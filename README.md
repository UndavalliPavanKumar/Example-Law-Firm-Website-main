# KVR Legal Services - Official Website

A high-end, premium law firm website built with **React (Vite)**, **FastAPI**, and **Framer Motion**.

## 🌟 Key Features
- **Cinematic Hero Section**: Professional design with glassmorphism and gold-gradient accents.
- **Dynamic Practice Areas**: Interactive cards showcasing legal expertise.
- **Client Appointment System**: Integrated booking form with backend storage and email notifications.
- **Elite Navigation**: Modern, responsive header with animated transitions.
- **Professional Stats Dashboard**: Real-time business metrics and firm success rates.

## 🛠 Tech Stack
- **Frontend**: React, Tailwind CSS, Framer Motion, Axios.
- **Backend**: FastAPI (Python), SQLAlchemy, Pydantic.
- **Database**: PostgreSQL (Production) / SQLite (Development).
- **Deployment**: Docker, Fly.io, Railway.app.

## 🚀 Getting Started Locally

### 1. Clone the repository
```bash
git clone https://github.com/UndavalliPavanKumar/Example-Law-Firm-Website-main.git
cd Example-Law-Firm-Website-main
```

### 2. Backend Setup
```bash
cd law-firm-fullstack/backend
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

## 🌐 Deployment
This project is configured for **Fly.io** and **Railway.app** using the included `Dockerfile` and `fly.toml` configurations.

---
© 2026 KVR Legal Services. All rights reserved.
