# BI_Metabase_local_Angular_Django_embedding
This repository contains a full-stack implementation for embedding Metabase dashboards into a web application using Angular and Django.

The Django backend is responsible for generating signed Metabase embed URLs (JWT), which are short-lived and securely signed using a secret key. The Angular frontend requests these URLs and displays dashboards inside an iframe, ensuring Metabase access is controlled exclusively by the backend.

Although the current implementation does not include user authentication, the architecture is designed to easily support authentication and authorization mechanisms in the future.

🔑 Key Features

Angular frontend for UI and dashboard rendering

Django backend for secure JWT generation

Metabase signed embedding (JWT-based)

No direct exposure of Metabase URLs or credentials

Short-lived, secure embed tokens

Clean separation between frontend and backend

🏗 Architecture Overview

Frontend: Angular

Backend: Django (REST API)

BI Tool: Metabase (Signed Embedding)

This project serves as a reference implementation for securely embedding Metabase dashboards into web applications.

This guide explains how to set up Metabase locally using Docker, configure signed embedding, and run the Angular frontend with a Django backend that generates secure iframe URLs.

🧱 Prerequisites

Make sure the following are installed:

Docker & Docker Compose

Python 3.9+

Node.js 18+

Angular CLI

Git

📊 Metabase Setup (Local using Docker)
1️⃣ Pull and Run Metabase Container

Run Metabase with an embed secret key using Docker:

docker run -d \
  -p 3000:3000 \
  --name metabase \
  -e MB_EMBEDDING_SECRET_KEY=your_metabase_secret_key \
  metabase/metabase


🔑 Note:
Save this secret key — it must match the one used in the Django backend.

2️⃣ Access Metabase UI

Open your browser:

http://localhost:3000


Complete the initial setup:

Create admin user

Add database (Postgres / MySQL / Sample DB)

3️⃣ Create a Dashboard

Go to + New → Dashboard

Add questions or charts

Save the dashboard

Note the Dashboard ID from the URL
Example:

http://localhost:3000/dashboard/1


Dashboard ID = 1

4️⃣ Enable Embedding in Metabase

Go to Admin Settings

Navigate to Embedding

Enable:

✅ Enable embedding

✅ Enable signed embedding

Confirm the Embedding Secret Key

🐍 Django Backend Setup
1️⃣ Clone Backend Repository
git clone <backend-repo-url>
cd backend

2️⃣ Create Virtual Environment
python -m venv venv
source venv/bin/activate   # Linux / Mac
venv\Scripts\activate      # Windows

3️⃣ Install Dependencies
pip install -r requirements.txt


Ensure PyJWT is installed:

pip install PyJWT

4️⃣ Set Environment Variables

Create a .env file:

METABASE_SECRET_KEY=your_metabase_secret_key
METABASE_SITE_URL=http://localhost:3000

5️⃣ Django API to Generate Embed URL

Example logic (already implemented in the project):

Generates short-lived JWT

Signs with Metabase secret

Returns iframe embed URL

6️⃣ Run Django Server
python manage.py migrate
python manage.py runserver


Backend runs at:

http://localhost:8000

🌐 Angular Frontend Setup
1️⃣ Clone Frontend Repository
git clone <frontend-repo-url>
cd frontend

2️⃣ Install Dependencies
npm install

3️⃣ Configure Backend API URL

Update environment.ts:

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000'
};

4️⃣ Run Angular Application
ng serve


Frontend runs at:

http://localhost:4200

🖼 Viewing the Dashboard

Open Angular app

Navigate to the Insights / Dashboard page

Angular calls Django API

Django returns signed Metabase iframe URL

Dashboard renders securely inside the application
