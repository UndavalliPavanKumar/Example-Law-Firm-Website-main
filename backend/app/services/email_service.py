import smtplib
from email.message import EmailMessage

from app.core.config import settings


def send_booking_email(subject: str, recipient: str, body: str) -> None:
    if not settings.SMTP_USER or not settings.SMTP_PASSWORD:
        return

    message = EmailMessage()
    message["Subject"] = subject
    message["From"] = settings.EMAIL_FROM
    message["To"] = recipient
    message.set_content(body)

    with smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT, timeout=20) as smtp:
        smtp.starttls()
        smtp.login(settings.SMTP_USER, settings.SMTP_PASSWORD)
        smtp.send_message(message)
