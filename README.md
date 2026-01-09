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
