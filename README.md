# E-commerce Website

An e-commerce website built using the MERN stack, featuring authentication, authorization, and a fully functional backend.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Features

- User authentication and authorization
- Product listing and details
- Shopping cart functionality
- Order processing
- Admin dashboard for managing products and orders

## Tech Stack

**Frontend:**
- React.js
- CSS

**Backend:**
- Node.js
- Express.js
- MongoDB

## Installation

1. **Clone the repository:**
    ```bash
    git clone git@github.com:sumedhakoranga/Sum-luxe.git
    cd Sum-luxe
    ```

2. **Install dependencies:**

    For the backend:
    ```bash
    cd backend
    npm install
    ```

    For the frontend:
    ```bash
    cd ../frontend
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the `backend` directory and add the following variables:
    ```plaintext
    MONGO_URI=your_mongodb_connection_string
    ```

4. **Run the application:**

    Start the backend server:
    ```bash
    cd backend
    npm start
    ```

    Start the frontend development server:
    ```bash
    cd ../frontend
    npm start
    ```

5. **Access the application:**
    Open your browser and go to `http://localhost:3000`.

## Usage

- **Register and log in:**
    Create a new account or log in with existing credentials.
- **Browse products:**
    Explore the product catalog and view product details.
- **Add to cart:**
    Add products to your shopping cart.
- **Manage profile:**
    Update your user profile and view order history.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
