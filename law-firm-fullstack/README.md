# Law Firm Full-Stack Website

A modern full-stack law firm website built with React.js and FastAPI.

## Features

- Responsive landing pages: Home, About, Contact, Branches
- Appointment booking form with backend storage
- Employee / lawyer team showcase
- Founder introduction video section
- Testimonials and Google Maps integration
- JWT authentication for admin API access
- PostgreSQL database with SQLAlchemy
- Backend email notifications for bookings
- Dockerized frontend, backend, and PostgreSQL services

## Tech Stack

- Frontend: React, Tailwind CSS, Framer Motion, Axios, React Router
- Backend: FastAPI, SQLAlchemy, PostgreSQL, JWT authentication
- Deployment: Docker, Docker Compose

## Quick Start

1. Copy environment templates:
   - `cp backend/.env.example backend/.env`
   - `cp frontend/.env.example frontend/.env`
2. Update `.env` values with your own settings.
3. Run the app:
   - `docker compose up --build`
4. Frontend will be available at `http://localhost:4173`
   Backend API will be available at `http://localhost:8000`

## Project Structure

- `frontend/` — React application with Tailwind components and page routing.
- `backend/` — FastAPI REST API with PostgreSQL integration and JWT.
- `docker-compose.yml` — Service orchestration for app and database.

## Admin API

- `POST /api/v1/auth/login` — obtain JWT token
- `GET /api/v1/admin/appointments` — list appointments
- `POST /api/v1/admin/employees` — create employee
- `PUT /api/v1/admin/branches/{branch_id}` — update branch

## Notes

- Use a valid SMTP provider in `backend/.env` for email notifications.
- Replace `SECRET_KEY` with a strong random value.
