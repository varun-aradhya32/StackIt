# StackIt_backend

This repository contains the **backend API for StackIt**, a modern Q&A platform where users can register, log in, post technical questions and answers, and vote on responses. The backend is built using **Node.js**, **Express**, and **MongoDB**, and provides secure RESTful endpoints for all core features.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Frontend](#frontend)

---

## Features

- 🔐 **Authentication**: Secure JWT-based login and registration
- ❓ **Ask Questions**: Create and manage questions with rich text content and tags
- 💬 **Answer Questions**: Post, update, and delete answers
- 👍 **Voting System**: Upvote and downvote answers
- 🧹 **Input Sanitization**: Protect against malicious input (e.g., XSS)
- 🔍 **RESTful API**: Cleanly structured and well-organized routes

---

## Technologies Used

- **Backend Framework**: Node.js + Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens), bcrypt.js for password hashing
- **Validation & Sanitization**: express-validator, xss-clean
- **CORS & Security**: Helmet, cors
- **Dev Tools**: Nodemon, dotenv, Morgan (optional)

---

## Frontend Repo

https://github.com/varun-aradhya32/StackIt_frontend.git
