from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app import crud, schemas
from app.api.deps import get_current_admin, get_db
from app.services.email_service import send_booking_email

router = APIRouter(tags=["appointments"])


@router.post("/appointments", response_model=schemas.AppointmentRead, status_code=status.HTTP_201_CREATED)
def create_appointment(appointment_in: schemas.AppointmentCreate, db: Session = Depends(get_db)):
    appointment = crud.create_appointment(db=db, appointment_in=appointment_in)

    message = (
        f"Thank you for booking an appointment with our law firm.\n"
        f"Name: {appointment.full_name}\n"
        f"Date and time: {appointment.date_time}\n"
        f"Message: {appointment.message or 'N/A'}\n"
    )
    send_booking_email(
        subject="Appointment Request Received",
        recipient=appointment.email,
        body=message,
    )
    return appointment


@router.get("/admin/appointments", response_model=list[schemas.AppointmentRead])
def list_appointments(
    current_admin: dict = Depends(get_current_admin), db: Session = Depends(get_db)
):
    return crud.get_appointments(db=db)


@router.get("/admin/appointments/{appointment_id}", response_model=schemas.AppointmentRead)
def get_appointment(
    appointment_id: int,
    current_admin: dict = Depends(get_current_admin),
    db: Session = Depends(get_db),
):
    appointment = crud.get_appointment(db=db, appointment_id=appointment_id)
    if not appointment:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Appointment not found")
    return appointment


@router.delete("/admin/appointments/{appointment_id}", status_code=status.HTTP_204_NO_CONTENT)
def remove_appointment(
    appointment_id: int,
    current_admin: dict = Depends(get_current_admin),
    db: Session = Depends(get_db),
):
    appointment = crud.get_appointment(db=db, appointment_id=appointment_id)
    if not appointment:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Appointment not found")
    crud.delete_appointment(db=db, appointment=appointment)
