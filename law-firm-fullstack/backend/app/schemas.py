from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, EmailStr, Field


class BranchBase(BaseModel):
    name: str = Field(..., min_length=2)
    address: str
    city: str
    phone: str
    email: Optional[EmailStr] = None
    description: Optional[str] = None


class BranchCreate(BranchBase):
    pass


class BranchRead(BranchBase):
    id: int

    class Config:
        orm_mode = True


class EmployeeBase(BaseModel):
    name: str = Field(..., min_length=2)
    title: str
    specialty: Optional[str] = None
    bio: Optional[str] = None
    photo_url: Optional[str] = None


class EmployeeCreate(EmployeeBase):
    pass


class EmployeeRead(EmployeeBase):
    id: int

    class Config:
        orm_mode = True


class AppointmentBase(BaseModel):
    full_name: str = Field(..., min_length=2)
    email: EmailStr
    phone: str
    branch_id: Optional[int] = None
    date_time: str
    message: Optional[str] = None


class AppointmentCreate(AppointmentBase):
    pass


class AppointmentRead(AppointmentBase):
    id: int
    status: str
    created_at: datetime
    branch: Optional[BranchRead] = None

    class Config:
        orm_mode = True


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenPayload(BaseModel):
    sub: Optional[str] = None
