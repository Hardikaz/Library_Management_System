### Project Overview

This full-stack project is built using a **MongoDB** database for data storage, a **Node.js** backend server, and a **React.js** frontend. The project currently includes:
1. **Admin and User Login**
2. **Admin and User Homepages**
3. **MongoDB Database** for storing user/admin data.
4. The frontend uses **React**, while the backend is powered by **Express.js** with **Nodemon** for auto-reloading.

### Prerequisites

Ensure that the following software is installed before running the project:

1. **Node.js**: Download and install it from [nodejs.org](https://nodejs.org).
2. **MongoDB**: Set up a MongoDB instance either locally or using a service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
3. **NPM**: Node Package Manager is bundled with Node.js.
4. **Nodemon**: Ensure Nodemon is installed globally to auto-reload the server on changes. You can install it globally using:
   ```bash
   npm install -g nodemon
   ```

### Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone <your-repository-url>
   cd <your-repository-name>
   ```

2. **Install Dependencies**:

   For the **frontend**:
   ```bash
   cd frontend
   npm install
   ```

   For the **backend**:
   ```bash
   cd ../backend
   npm install
   ```

3. **Configure Environment Variables**:

   For the backend, you’ll need to create a `.env` file in the **backend** directory and add the following:
   ```bash
   MONGO_URI=<Your MongoDB connection string>
   JWT_SECRET=<Your JWT secret key>
   ```

### Running the Application

To run the project, follow these steps:

1. **Start the Frontend**:
   Open a terminal, navigate to the **frontend** directory, and run the following command:
   ```bash
   cd frontend
   npm start
   ```

   This will start the React application, and it should automatically open in your default web browser at `http://localhost:3000`.

2. **Start the Backend**:
   Open a new terminal, navigate to the **backend** directory, and run the following command:
   ```bash
   cd backend
   nodemon server.js
   ```

   The backend server will start, and it should be running at `http://localhost:5000` (or another port, if specified).


### Usage

- After launching both the frontend and backend servers, you can navigate between the **Admin** and **User** homepages by logging in with appropriate credentials. 
- The MongoDB database will store user/admin data, login information, and any additional features that are later integrated.

