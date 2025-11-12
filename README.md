# Taller Node.js + Express + Prisma + Supabase

## Pasos
1. Copia tu DATABASE_URL de Supabase en .env
2. npm install
3. npx prisma migrate dev --name init
4. npm run dev

## Endpoints
- POST /users
- GET /users
- GET /users/:id
- POST /tasks
- GET /tasks
- GET /tasks/user/:userId

Puerto: 3000
Sin autenticación / sin helmet/cors (requisito del taller)
