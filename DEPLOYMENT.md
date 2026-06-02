# Deployment Guide

This application consists of two parts:
1. **Frontend** - React/Vite application (deployed to Vercel)
2. **Backend** - Socket.IO server (deployed to Render)

## Prerequisites
- Node.js 18+
- npm
- GitHub account
- Vercel account
- Render account

## Step 1: Deploy Backend to Render

1. Push your code to GitHub
2. Go to [Render.com](https://render.com) and sign up
3. Click "New +" and select "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Name**: subdiv-maker-server
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Environment Variables**:
     - `PORT`: `10000`
     - `ALLOWED_ORIGINS`: `https://your-frontend-url.vercel.app` (update after frontend deployment)
6. Click "Deploy Web Service"
7. Wait for deployment to complete and copy the server URL (e.g., `https://subdiv-maker-server.onrender.com`)

## Step 2: Deploy Frontend to Vercel

1. Go to [Vercel.com](https://vercel.com) and sign up
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Environment Variables**:
     - `VITE_SOCKET_SERVER_URL`: `https://subdiv-maker-server.onrender.com` (use your Render server URL)
5. Click "Deploy"
6. Wait for deployment to complete and copy the Vercel URL

## Step 3: Update Backend CORS

1. Go back to your Render dashboard
2. Find your subdiv-maker-server service
3. Click "Environment"
4. Update `ALLOWED_ORIGINS` to include your Vercel URL:
   - `https://your-frontend-url.vercel.app`
5. Click "Save Changes"
6. Render will automatically redeploy

## Step 4: Test

1. Open your Vercel URL in a browser
2. Enter a username and try hosting/joining a tournament
3. Test with multiple users in different browsers/devices

## Important Notes

- The server uses in-memory storage, so data is lost when the server restarts
- For production, consider adding a database (PostgreSQL, MongoDB, etc.)
- The free tier on Render has a 15-minute timeout for inactive services
- The first request after timeout may take longer as the server spins up

## Local Development

To run locally:
```bash
npm install
npm run dev
```

This will start both the frontend (http://localhost:5173) and backend (http://localhost:3001).
