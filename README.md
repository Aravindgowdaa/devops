<<<<<<< HEAD
# devops
=======
# React + Django Multi-Page Starter

Small full-stack starter project with:
- React frontend (Vite)
- Django backend
- Multiple React pages (`Home`, `About`, `Contact`)
- API connection from React to Django (`/api/health/`)

## Project structure

```text
devops/
  frontend/   # React app
  backend/    # Django app
```

## Frontend setup

```powershell
cd frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

## Backend setup

```powershell
cd backend
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Backend runs at: `http://127.0.0.1:8000`

## API endpoints

- `GET /api/health/` -> health check message
- `POST /api/echo/` -> echoes a posted JSON message

Example:

```json
{ "message": "Hello from React" }
```
>>>>>>> 72837b8 (Removed venv and fixed gitignore)
