# How to Deploy This Website (Step-by-Step)

Since your code is already on GitHub, the easiest way to deploy this full-stack application is using **Railway.app**. It handles the Database, Backend, and Frontend in one place.

## Step 1: Push Your Changes to GitHub
I have made several improvements (Redesign, YouTube fix, etc.). You need to sync these to your repository:

1. **Commit the changes**:
   ```bash
   git add .
   git commit -m "Enhance home page design and fix YouTube links"
   ```
2. **Push to GitHub**:
   ```bash
   git push origin main
   ```

---

## Step 2: Set Up Railway.app
1. Go to [Railway.app](https://railway.app) and log in with your GitHub account.
2. Click **"New Project"** -> **"Deploy from GitHub repo"**.
3. Select your repository: `Example-Law-Firm-Website-main`.
4. Railway will detect the `docker-compose.yml` and start setting up the services.

---

## Step 3: Add a Production Database
Your local version uses SQLite (`backend.db`), but for production, you need **PostgreSQL**.

1. In your Railway project dashboard, click **"New"** -> **"Database"** -> **"Add PostgreSQL"**.
2. Railway will automatically create a database and provide a connection string.
3. In the **Backend Service** settings on Railway, add an environment variable:
   - Name: `DATABASE_URL`
   - Value: `${{Postgres.RAILWAY_DATABASE_URL}}` (Railway will provide this variable).

---

## Step 4: Configure Frontend
The frontend needs to know where the backend is running.

1. In the **Frontend Service** settings on Railway, add an environment variable:
   - Name: `VITE_API_URL`
   - Value: `https://your-backend-url.railway.app/api/v1` (Railway will generate a public URL for your backend).

---

## Step 5: Verify Deployment
Once all services are "Green":
1. Open the public URL provided by Railway for your **Frontend**.
2. Test the booking form to ensure it connects to the production database.

> [!TIP]
> If you'd like, I can prepare the commands to push your code to GitHub right now. Just say "Push the code".
