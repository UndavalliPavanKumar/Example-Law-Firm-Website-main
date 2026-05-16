import logging

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

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
