# PerSec-TypeScript-Project


## Overview

**PerSec-TypeScript-Project** is a comprehensive project that combines cutting-edge technologies like **React (Vite)**, **Node.js**, and **TypeScript** to build a highly performant and secure web application. This project is specifically focused on optimizing the performance of the frontend (using React with Vite) and securing the backend (using Node.js) to create a more robust, scalable, and maintainable application.

The goal of this project is to explore and implement best practices for performance in frontend development and security in backend development, ensuring that the application is fast, reliable, and protected against common vulnerabilities.


## Key Features

- **Frontend**: A modern React application using **Vite** as the build tool for faster bundling and hot reloading.

- **Backend**: A Node.js application implementing best practices for security using **TypeDI** for Dependency Injection and **Routing-Controllers** for clean route handling, while also protecting against SQL injection, cross-site scripting (XSS), and other common threats.

- **Full TypeScript Support**: The entire project is built using TypeScript for better maintainability, improved code quality, and strong typing.

- **Performance Optimization**: Techniques and best practices to optimize the frontend app’s performance, such as lazy loading, code splitting, and caching.

- **Security**: Strong security practices in the backend, including proper authentication, encryption, and validation of user input.


## Technologies Used

### Frontend

- **React**: A powerful JavaScript library for building user interfaces.

- **Vite**: A next-generation build tool that offers lightning-fast builds and HMR (Hot Module Replacement) for React applications.

- **TypeScript**: A statically typed superset of JavaScript that provides better tooling and catches errors earlier in the development process.

- **CSS Modules / Styled Components**: For scoped and maintainable styling.

### Backend

- **Node.js**: A JavaScript runtime for building scalable server-side applications.

- **TypeDI**: A lightweight Dependency Injection library for TypeScript and JavaScript. It is used for managing application dependencies in a modular and scalable way.

- **Routing-Controllers**: A TypeScript library that simplifies building APIs with **Express** by allowing the definition of route handlers using controllers. It enables the use of decorators to handle HTTP methods, request validation, and middleware in a structured way.

- **JWT (JSON Web Tokens)**: For secure and stateless authentication in the application.

- **bcrypt.js**: For hashing passwords securely.

- **dotenv**: For loading environment variables to keep sensitive information secure.

- **CORS**: A middleware to handle cross-origin resource sharing (CORS) and enable secure interactions between the frontend and backend.

## Installation and Setup

### 1. Clone the repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/mahaveer1013/PerSec-TypeScript-Project.git
```

### 2. Install dependencies for the frontend

Navigate to the frontend folder and install the required dependencies using npm or yarn:

```bash
cd PerSec-TypeScript-Project/frontend
npm install
```

or

```bash
cd PerSec-TypeScript-Project/frontend
yarn install
```

### 3. Install dependencies for the backend

Next, navigate to the backend folder and install the dependencies:

```bash
cd PerSec-TypeScript-Project/backend
npm install
```

or

```bash
cd PerSec-TypeScript-Project/backend
yarn install
```

### 4. Configure environment variables for the backend

Create a .env file in the backend directory and add the necessary environment variables, such as database credentials, JWT secret, etc.

Example:

```makefile
MONGO_URI=localhost
JWT_SECRET=your-jwt-secret
```

### 5. Run the development servers

To run the frontend app (React + Vite):

```bash
cd frontend
npm run dev
```

or

```bash
cd frontend
yarn dev
```


To run the backend app (Node.js + TypeDI + Routing-Controllers):

```bash
cd backend
npm start
```

or

```bash
cd backend
yarn start
```

### 6. Open the application in the browser

- Once the development servers are running, you can open the application in your browser. 
- By default, the frontend app will be available at http://localhost:3000, and the backend API will be available at http://localhost:5000 (or another port, depending on your configuration).


## Performance Optimization Techniques


**Frontend (React + Vite)**

- Code Splitting: Use React's dynamic import() to split large JavaScript bundles and load code only when needed.

- Lazy Loading: Components and assets are loaded only when they are needed, reducing initial load time.

- Optimized Images: Use image compression techniques and modern formats like WebP for faster loading.

- Caching: Implement service workers for caching static files and improving load speed on repeat visits.


**Backend (Node.js + TypeDI + Routing-Controllers)**

- Caching: Implement HTTP caching strategies to reduce server load and improve response times.

- Rate Limiting: Use libraries like express-rate-limit to limit the number of requests to the API and prevent abuse.

- Async/Await: Use asynchronous programming (e.g., async/await) to avoid blocking the event loop and improve performance.

- Database Optimizations: Use indexing and optimized queries for faster database interactions.


## Security Best Practices


**Frontend (React + Vite)**

- Cross-Site Scripting (XSS) Prevention: Use libraries like react-helmet to sanitize and manage HTML content.

- Input Validation: Validate and sanitize user input on the client-side to avoid malicious data submission.


**Backend (Node.js + TypeDI + Routing-Controllers)**

- SQL Injection Prevention: Use parameterized queries with ORM libraries (e.g., Sequelize, TypeORM) to prevent SQL injection attacks.

- Authentication: Use JWT (JSON Web Tokens) for stateless authentication.

- Password Hashing: Use bcrypt to securely hash and verify passwords.

- HTTPS: Serve the application over HTTPS to encrypt data in transit.

- CORS: Use cors middleware to enable secure cross-origin requests between the frontend and backend.


## Contributing

We welcome contributions! If you would like to contribute to this project, please fork the repository, make your changes, and submit a pull request. Be sure to follow the project's coding standards and best practices.


## License

This project is licensed under the MIT License – see the LICENSE file for details.