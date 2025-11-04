#!/usr/bin/env bash
set -euo pipefail


# 1) Frontend deps
if [ ! -f frontend/package.json ]; then
echo "[ERROR] Missing frontend/. Run: npm create vite@latest frontend -- --template react"
exit 1
fi


# 2) Backend deps
if [ ! -f backend/package.json ]; then
echo "[ERROR] Missing backend/."
exit 1
fi


# 3) Copy envs if needed
if [ ! -f backend/.env ]; then
cp backend/.env.example backend/.env
fi


# 4) Install deps
( cd backend && npm install )
( cd frontend && npm install )


# 5) DB sync (create tables if not exist)
( cd backend && npm run db:sync )


# 6) Run both (use npx to avoid root devDep)
( npx concurrently -n BACK,FRONT -c green,blue "cd backend && npm run dev" "cd frontend && npm run dev" )