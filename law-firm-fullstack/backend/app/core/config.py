from typing import List

from pydantic import BaseSettings, EmailStr


class Settings(BaseSettings):
    PROJECT_NAME: str = "Law Firm API"
    API_V1_STR: str = "/api/v1"
    DATABASE_URL: str
    SECRET_KEY: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 1440
    SMTP_HOST: str = "smtp.mailtrap.io"
    SMTP_PORT: int = 587
    SMTP_USER: str | None = None
    SMTP_PASSWORD: str | None = None
    EMAIL_FROM: EmailStr = "noreply@lawfirm.com"
    ADMIN_EMAIL: EmailStr
    ADMIN_PASSWORD: str
    FRONTEND_URL: str = "http://localhost:4173"
    BACKEND_CORS_ORIGINS: List[str] = ["*"]

    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()
