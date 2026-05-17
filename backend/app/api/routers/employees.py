from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app import crud, schemas
from app.api.deps import get_current_admin, get_db

router = APIRouter(tags=["employees"])


@router.get("/employees", response_model=list[schemas.EmployeeRead])
def list_employees(skip: int = 0, limit: int = 20, db: Session = Depends(get_db)):
    return crud.get_employees(db=db, skip=skip, limit=limit)


@router.post("/admin/employees", response_model=schemas.EmployeeRead, status_code=status.HTTP_201_CREATED)
def create_employee(
    employee_in: schemas.EmployeeCreate,
    current_admin: dict = Depends(get_current_admin),
    db: Session = Depends(get_db),
):
    return crud.create_employee(db=db, employee_in=employee_in)


@router.put("/admin/employees/{employee_id}", response_model=schemas.EmployeeRead)
def update_employee(
    employee_id: int,
    employee_in: schemas.EmployeeCreate,
    current_admin: dict = Depends(get_current_admin),
    db: Session = Depends(get_db),
):
    employee = crud.get_employee(db=db, employee_id=employee_id)
    if not employee:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Employee not found")
    return crud.update_employee(db=db, employee=employee, employee_in=employee_in)


@router.delete("/admin/employees/{employee_id}", status_code=status.HTTP_204_NO_CONTENT)
def remove_employee(
    employee_id: int,
    current_admin: dict = Depends(get_current_admin),
    db: Session = Depends(get_db),
):
    employee = crud.get_employee(db=db, employee_id=employee_id)
    if not employee:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Employee not found")
    crud.delete_employee(db=db, employee=employee)
