# Chesschoholic

Chesschoholic is a chess training project with a React + Vite frontend and a .NET backend API.

## Project structure

```text
.
├── src/        # React frontend
├── public/     # Frontend static assets
└── backend/    # ASP.NET Core backend API
```

## Run the frontend

```bash
npm install
npm run dev
```

## Run the backend

```bash
cd "backend/Chess Training & Match Tracker API"
dotnet restore
dotnet run
```

The backend API is configured to run on `https://localhost:7072` and `http://localhost:5289` in development.
