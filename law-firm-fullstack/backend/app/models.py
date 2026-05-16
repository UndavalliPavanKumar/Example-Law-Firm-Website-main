from datetime import datetime

from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship

from app.db.base import Base


class Branch(Base):
    __tablename__ = "branches"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(length=120), nullable=False)
    address = Column(String(length=255), nullable=False)
    city = Column(String(length=120), nullable=False)
    phone = Column(String(length=32), nullable=False)
    email = Column(String(length=128), nullable=True)
    description = Column(Text, nullable=True)

    appointments = relationship("Appointment", back_populates="branch")


class Employee(Base):
    __tablename__ = "employees"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(length=120), nullable=False)
    title = Column(String(length=120), nullable=False)
    specialty = Column(String(length=180), nullable=True)
    bio = Column(Text, nullable=True)
    photo_url = Column(String(length=255), nullable=True)


class Appointment(Base):
    __tablename__ = "appointments"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(length=140), nullable=False)
    email = Column(String(length=140), nullable=False)
    phone = Column(String(length=40), nullable=False)
    branch_id = Column(Integer, ForeignKey("branches.id"), nullable=True)
    date_time = Column(String(length=80), nullable=False)
    message = Column(Text, nullable=True)
    status = Column(String(length=40), default="pending", nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)

    branch = relationship("Branch", back_populates="appointments")
