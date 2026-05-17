# Stage 1: Build the React frontend
FROM node:20-alpine AS frontend-builder
WORKDIR /frontend

# Copy frontend configuration and package files
COPY frontend/package.json frontend/package-lock.json* ./
RUN npm install

# Copy frontend source code and compile
COPY frontend/ ./
RUN npm run build

# Stage 2: Create the final production FastAPI backend container
FROM python:3.12-slim
WORKDIR /app

# Install backend dependencies
COPY backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend source code
COPY backend/ ./

# Copy compiled frontend from Stage 1 into backend's root folder as 'dist'
COPY --from=frontend-builder /frontend/dist ./dist

# Expose the single web server port
# Railway/Fly.io supply a PORT environment variable, default to 8080 if not set
ENV PORT=8080
EXPOSE 8080

# Start Uvicorn serving our combined app
CMD ["sh", "-c", "uvicorn app.main:app --host 0.0.0.0 --port ${PORT:-8080}"]
