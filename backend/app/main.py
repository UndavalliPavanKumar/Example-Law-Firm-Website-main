import logging
import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

from app.api.routers import auth, appointments, branches, employees
from app.core.config import settings
from app.db import base, session
from app.logging_config import configure_logging


configure_logging()
logger = logging.getLogger(__name__)


app = FastAPI(title=settings.PROJECT_NAME)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.BACKEND_CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix=settings.API_V1_STR)
app.include_router(appointments.router, prefix=settings.API_V1_STR)
app.include_router(branches.router, prefix=settings.API_V1_STR)
app.include_router(employees.router, prefix=settings.API_V1_STR)


@app.on_event("startup")
def on_startup() -> None:
    logger.info("Creating database tables if they do not exist")
    base.Base.metadata.create_all(bind=session.engine)


# Serve React Frontend in single-container production deployment
if os.path.exists("dist"):
    logger.info("Serving frontend static files from dist/")
    app.mount("/assets", StaticFiles(directory="dist/assets"), name="assets")

    @app.get("/{catchall:path}")
    async def serve_spa(catchall: str):
        # Prevent fallback from swallowing API or doc endpoints
        if catchall.startswith("api/v1") or catchall.startswith("docs") or catchall.startswith("openapi.json"):
            raise HTTPException(status_code=404, detail="Not Found")
        
        # Check if the file exists in dist/ (e.g. favicon.ico, logo.png)
        file_path = os.path.join("dist", catchall)
        if os.path.isfile(file_path):
            return FileResponse(file_path)
            
        # Fallback to index.html for SPA router (about, booking, etc.)
        return FileResponse("dist/index.html")
