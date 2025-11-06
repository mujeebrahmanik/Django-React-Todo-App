# Django-React-Todo-App 🎉

A full-stack To-Do application built with Django for the backend and React for the frontend.

## 📝 Description

This project provides a foundation for building a To-Do application using Django and React. It includes user authentication and task management functionalities. The backend is built using Django REST Framework with JWT authentication, while the frontend utilizes React and React Bootstrap for a responsive user interface.

## 📌 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [⚙️ Installation](#️-installation)
- [🚀 Usage](#-usage)
- [📂 Project Structure](#-project-structure)
- [📚 API Reference](#-api-reference)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)
- [🔗 Important Links](#-important-links)
- [📄 Footer](#-footer)

## ✨ Features

- ✅ **User Authentication:** Secure user registration and login using JWT (JSON Web Tokens).
- 📝 **Task Management:** Create, read, update, and delete tasks.
- 🗂️ **Category Support:** Organize tasks into categories.
- 📅 **Priority and Date Tracking:** Set task priority and track creation dates.
- 📱 **Responsive UI:** User interface built with React Bootstrap for cross-device compatibility.
- 🛡️ **CSRF Protection:** Protection against Cross-Site Request Forgery.

## 🛠️ Tech Stack

- 💻 **Languages:** JavaScript, Python, HTML, CSS
- ⚛️ **Frontend:** React, React Bootstrap
- 🐍 **Backend:** Django, Django REST Framework
- 📦 **Package Manager:** npm, pip
- 💽 **Database:** SQLite (default)
- 🧪 **Testing:** unittest

## ⚙️ Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/mujeebrahmanik/Django-React-Todo-App.git
    cd Django-React-Todo-App
    ```

2.  **Set up the backend:**

    ```bash
    cd backend
    python -m venv env
    env\Scripts\activate  #for windows
    source env/bin/activate #for linux and mac
    pip install -r requirements.txt
    ```

3.  **Configure Django settings:**

    - Create a `.env` file in the `backend` directory.
    - Add `DJANGO_SECRET_KEY` variable.
    ```
    DJANGO_SECRET_KEY=your_django_secret_key
    ```

4.  **Run Django migrations:**

    ```bash
    python manage.py migrate
    ```

5.  **Start the Django development server:**

    ```bash
    python manage.py runserver
    ```

6.  **Set up the frontend:**

    ```bash
    cd ../frontend
    npm install
    ```

7.  **Configure Frontend API URL:**
    
   - Create a `.env` file in the `frontend` directory.
   - Add `VITE_BACKEND_BASE_API` variable.
    ```
   VITE_BACKEND_BASE_API=http://localhost:8000/
   ```

8.  **Start the React development server:**

    ```bash
    npm run dev
    ```

## 🚀 Usage

1.  **Register a new user account:** Navigate to the registration page on the frontend and create a new user account.
2.  **Login:** Login with your newly created credentials.
3.  **Manage Tasks and Categories:** Use the app to add, edit, delete and view tasks categorized under different categories.

### Scripts

The React application uses the following scripts:
- `dev`: Starts the development server.
- `build`: Builds the application for production.
- `lint`: Runs ESLint to check for code quality issues.
- `preview`: Runs a production preview server.

## 📂 Project Structure

```
Django-React-Todo-App/
├── backend/                # Django backend project
│   ├── api/               # Django REST API application
│   ├── todo/              # Main Django project directory
│   ├── manage.py          # Django management script
│   └── requirements.txt   # Python dependencies
├── frontend/               # React frontend project
│   ├── src/              # React source code
│   ├── public/           # Static assets
│   ├── package.json       # npm dependencies and scripts
│   ├── vite.config.js   # Vite configuration
│   └── index.html         # Main HTML file
├── README.md             # Project documentation (this file)
└── ...
```

## 📚 API Reference

The backend provides the following API endpoints:

| Endpoint           | Method | Description                                     |
| ------------------ | ------ | ----------------------------------------------- |
| `/category/`       | GET    | List all categories                             |
| `/category/`       | POST   | Create a new category                           |
| `/category/{id}/`   | GET    | Retrieve a specific category                    |
| `/category/{id}/`   | PUT    | Update a specific category                      |
| `/category/{id}/`   | DELETE | Delete a specific category                      |
| `/task/`            | GET    | List all tasks                                  |
| `/task/`            | POST   | Create a new task                               |
| `/task/{id}/`       | GET    | Retrieve a specific task                        |
| `/task/{id}/`       | PUT    | Update a specific task                          |
| `/task/{id}/`       | DELETE | Delete a specific task                          |
| `/register/`        | POST   | Register a new user                             |
| `/token/`           | POST   | Obtain access and refresh tokens (login)        |
| `/token/refresh/`   | POST   | Refresh access token                            |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Implement your changes.
4.  Submit a pull request.

## 📜 License

This project is open source without any license.

## 🔗 Important Links

- GitHub Repository: [https://github.com/mujeebrahmanik/Django-React-Todo-App](https://github.com/mujeebrahmanik/Django-React-Todo-App)

## 📄 Footer

© 2024 [Mujeeb Rahmani](https://github.com/mujeebrahmanik). [Django-React-Todo-App](https://github.com/mujeebrahmanik/Django-React-Todo-App). Please feel free to fork, star, and create issues!

---
**<p align="center">Generated by [ReadmeCodeGen](https://www.readmecodegen.com/)</p>**
