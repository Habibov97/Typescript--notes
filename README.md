# TypeScript Notes API

A simple authentication API built with TypeScript, Express, TypeORM, SQLite, JWT, and Zod.

## Features

- User registration
- User login
- Password hashing with bcrypt
- JWT authentication
- Request validation with Zod
- SQLite database integration
- TypeORM entities and repositories
- Environment variable configuration

## Tech Stack

- TypeScript
- Express
- TypeORM
- SQLite
- JWT
- Zod
- Bcrypt

## Project Structure

```text
src/
├── config/
├── controllers/
├── database/
│   └── entities/
├── middlewares/
├── routes/
├── services/
├── types/
├── utils/
├── validations/
└── app.ts
```

## Installation

Clone the repository:

```bash
git clone https://github.com/Habibov97/Typescript--notes.git
cd Typescript--notes
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
JWT_SECRET=your_secret_key
```

## Development

Run the development server:

```bash
npm run dev
```

## Build

Compile TypeScript:

```bash
npm run build
```

## Production

Start the compiled application:

```bash
npm start
```

## Available Scripts

```bash
npm run dev
npm run build
npm start
```

## Database

This project uses SQLite together with TypeORM.

Entities:

- User
- Note

## Authentication

Authentication is implemented using:

- JWT (JSON Web Tokens)
- bcrypt password hashing

## Validation

Request validation is handled using Zod schemas.

## License

ISC
