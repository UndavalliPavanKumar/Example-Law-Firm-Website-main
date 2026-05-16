from sqlalchemy.orm import Session

from app import models, schemas


def create_branch(db: Session, branch_in: schemas.BranchCreate) -> models.Branch:
    branch = models.Branch(**branch_in.model_dump())
    db.add(branch)
    db.commit()
    db.refresh(branch)
    return branch


def get_branches(db: Session, skip: int = 0, limit: int = 20) -> list[models.Branch]:
    return db.query(models.Branch).offset(skip).limit(limit).all()


def get_branch(db: Session, branch_id: int) -> models.Branch | None:
    return db.query(models.Branch).filter(models.Branch.id == branch_id).first()


def update_branch(db: Session, branch: models.Branch, branch_in: schemas.BranchCreate) -> models.Branch:
    for field, value in branch_in.model_dump().items():
        setattr(branch, field, value)
    db.commit()
    db.refresh(branch)
    return branch


def delete_branch(db: Session, branch: models.Branch) -> None:
    db.delete(branch)
    db.commit()


def create_employee(db: Session, employee_in: schemas.EmployeeCreate) -> models.Employee:
    employee = models.Employee(**employee_in.model_dump())
    db.add(employee)
    db.commit()
    db.refresh(employee)
    return employee


def get_employees(db: Session, skip: int = 0, limit: int = 20) -> list[models.Employee]:
    return db.query(models.Employee).offset(skip).limit(limit).all()


def get_employee(db: Session, employee_id: int) -> models.Employee | None:
    return db.query(models.Employee).filter(models.Employee.id == employee_id).first()


def update_employee(db: Session, employee: models.Employee, employee_in: schemas.EmployeeCreate) -> models.Employee:
    for field, value in employee_in.model_dump().items():
        setattr(employee, field, value)
    db.commit()
    db.refresh(employee)
    return employee


def delete_employee(db: Session, employee: models.Employee) -> None:
    db.delete(employee)
    db.commit()


def create_appointment(db: Session, appointment_in: schemas.AppointmentCreate) -> models.Appointment:
    appointment = models.Appointment(**appointment_in.model_dump())
    db.add(appointment)
    db.commit()
    db.refresh(appointment)
    return appointment


def get_appointments(db: Session, skip: int = 0, limit: int = 50) -> list[models.Appointment]:
    return db.query(models.Appointment).offset(skip).limit(limit).all()


def get_appointment(db: Session, appointment_id: int) -> models.Appointment | None:
    return db.query(models.Appointment).filter(models.Appointment.id == appointment_id).first()


def delete_appointment(db: Session, appointment: models.Appointment) -> None:
    db.delete(appointment)
    db.commit()
