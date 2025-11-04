# Ensolvers Notes App

A simple full-stack web application for creating, archiving, and categorizing notes.  
Built as a technical assessment for **Ensolvers**, following SPA architecture with separate frontend and backend.

---

## 🧩 Tech Stack

**Frontend**

- React 18 (Vite 5)
- React Router 6
- React-Bootstrap 2 + Bootstrap 5
- Axios 1

**Backend**

- Node.js 20
- Express 4
- Sequelize 6 (ORM)
- SQLite3 (default DB for local dev)
- dotenv + cors

---

## ⚙️ Project Structure

MUNOZ-24E0AE/
├─ run.sh
├─ README.md
├─ backend/
│ ├─ src/
│ │ ├─ app.js
│ │ ├─ server.js
│ │ ├─ config/
│ │ ├─ models/
│ │ ├─ repositories/
│ │ ├─ services/
│ │ ├─ controllers/
│ │ └─ routes/
│ ├─ .env.example
│ └─ package.json
└─ frontend/
├─ src/
│ ├─ pages/
│ ├─ components/
│ └─ api/
├─ index.html
└─ package.json

---

## 🚀 Quick Start

### 1️⃣ Prerequisites

- Node.js **v20.x**
- npm **v10.x**
- Bash (or Git Bash on Windows)

### 2️⃣ Clone and run

```bash
git clone https://github.com/hirelens-challenges/Munoz-24e0ae.git
cd Munoz-24e0ae
bash run.sh

This script:

Installs dependencies for frontend and backend

Syncs the SQLite database

Launches both servers in parallel

🌐 URLs
Service	URL
Frontend	http://localhost:5173

Backend API	http://localhost:3000/api

📚 API Reference
Notes
Method	    Endpoint	                                    Description
GET	        /api/notes	                                    List active notes
GET	        /api/notes/archived	                            List archived notes
POST	    /api/notes	                                    Create a new note
GET	        /api/notes/:id	                                Get note by ID
PUT	        /api/notes/:id	                                Update note
POST	    /api/notes/:id/archive	                        Archive note
POST	    /api/notes/:id/unarchive	                    Unarchive note
DELETE	    /api/notes/:id	                                Delete note

Categories
Method	    Endpoint	                                Description
GET	        /api/categories	                            List categories
POST	    /api/categories	                            Create category
DELETE	    /api/categories/:id	                        Delete category
POST	    /api/notes/:id/categories	                Add category to note
DELETE	    /api/notes/:id/categories/:categoryId	    Remove category from note

---

⚡️ Environment Variables

Example (backend/.env):

PORT=3000
DB_DIALECT=sqlite
DB_STORAGE=./data.sqlite


To use PostgreSQL instead:

DB_DIALECT=postgres
DB_HOST=localhost
DB_PORT=5432
DB_NAME=notesdb
DB_USER=postgres
DB_PASS=postgres

🧪 Running Manually
# Terminal 1 - Backend
cd backend
npm run db:sync
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```
