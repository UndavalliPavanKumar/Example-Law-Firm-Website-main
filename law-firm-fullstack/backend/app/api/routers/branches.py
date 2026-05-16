from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app import crud, schemas
from app.api.deps import get_current_admin, get_db

router = APIRouter(tags=["branches"])


@router.get("/branches", response_model=list[schemas.BranchRead])
def list_branches(skip: int = 0, limit: int = 20, db: Session = Depends(get_db)):
    return crud.get_branches(db=db, skip=skip, limit=limit)


@router.post("/admin/branches", response_model=schemas.BranchRead, status_code=status.HTTP_201_CREATED)
def create_branch(
    branch_in: schemas.BranchCreate,
    current_admin: dict = Depends(get_current_admin),
    db: Session = Depends(get_db),
):
    return crud.create_branch(db=db, branch_in=branch_in)


@router.put("/admin/branches/{branch_id}", response_model=schemas.BranchRead)
def update_branch(
    branch_id: int,
    branch_in: schemas.BranchCreate,
    current_admin: dict = Depends(get_current_admin),
    db: Session = Depends(get_db),
):
    branch = crud.get_branch(db=db, branch_id=branch_id)
    if not branch:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Branch not found")
    return crud.update_branch(db=db, branch=branch, branch_in=branch_in)


@router.delete("/admin/branches/{branch_id}", status_code=status.HTTP_204_NO_CONTENT)
def remove_branch(
    branch_id: int,
    current_admin: dict = Depends(get_current_admin),
    db: Session = Depends(get_db),
):
    branch = crud.get_branch(db=db, branch_id=branch_id)
    if not branch:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Branch not found")
    crud.delete_branch(db=db, branch=branch)
