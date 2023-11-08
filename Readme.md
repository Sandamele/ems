# Backend Instruction
Go to the backend folder
## Requirement
Node verstion 16.5
## Installation
npm install
## Run in development
npm run develop
## Run in production
npm run start

## Folder Structure
```
┣ src/
┃ ┣ config/
┃ ┃ ┣ dbConnection.js
┃ ┃ ┗ index.js
┃ ┣ controllers/
┃ ┃ ┣ admin/
┃ ┃ ┃ ┣ changePassword.js
┃ ┃ ┃ ┣ checkAdminTableIsEmpty.js
┃ ┃ ┃ ┣ delete.js
┃ ┃ ┃ ┣ edit.js
┃ ┃ ┃ ┣ findAdmin.js
┃ ┃ ┃ ┣ listAdmin.js
┃ ┃ ┃ ┣ login.js
┃ ┃ ┃ ┣ logout.js
┃ ┃ ┃ ┗ register.js
┃ ┃ ┣ department/
┃ ┃ ┃ ┣ add.js
┃ ┃ ┃ ┣ delete.js
┃ ┃ ┃ ┣ edit.js
┃ ┃ ┃ ┣ get.js
┃ ┃ ┃ ┗ getAll.js
┃ ┃ ┗ employee/
┃ ┃   ┣ add.js
┃ ┃   ┣ delete.js
┃ ┃   ┣ findEmployee.js
┃ ┃   ┣ listAll.js
┃ ┃   ┗ update.js
┃ ┣ middleware/
┃ ┃ ┣ refreshToken.js
┃ ┃ ┣ validateDepartment.js
┃ ┃ ┣ validateEmployeeDetails.js
┃ ┃ ┣ validationRegisterAdmin.js
┃ ┃ ┗ verifyToken.js
┃ ┣ models/
┃ ┃ ┣ admin/
┃ ┃ ┃ ┗ index.js
┃ ┃ ┣ department/
┃ ┃ ┃ ┗ index.js
┃ ┃ ┗ employee/
┃ ┃   ┗ index.js
┃ ┣ routes/
┃ ┃ ┣ admin/
┃ ┃ ┃ ┗ index.js
┃ ┃ ┣ department/
┃ ┃ ┃ ┗ index.js
┃ ┃ ┗ employee/
┃ ┃   ┗ index.js
┃ ┣ utils/
┃ ┃ ┗ isEmpty.js
┃ ┗ index.js
┣ .dockerignore
┣ .env.development
┣ .env.production
┣ .gitignore
┣ Dockerfile
┣ Readme.md
┣ package-lock.json
┗ package.json
```

# Database 
Using MYSQL
The credentials are in ./backend/.env.development

# Frontend
Go to frontend
## Requirement
Nextjs 14.0.1 Page Router
Node 20.9.0
## Install
npm install
## Run in development
npm run dev

The credentials are in ./frontend/.env.development

## Folder Structure
```
public/
┃ ┣ favicon.ico
┃ ┣ next.svg
┃ ┗ vercel.svg
┣ src/
┃ ┣ components/
┃ ┃ ┣ adminLogin/
┃ ┃ ┃ ┣ adminLogin.jsx
┃ ┃ ┃ ┗ adminLogin.logic.js
┃ ┃ ┣ common/
┃ ┃ ┃ ┣ backButton.jsx
┃ ┃ ┃ ┣ button.jsx
┃ ┃ ┃ ┣ formContainer.jsx
┃ ┃ ┃ ┣ inputbox.jsx
┃ ┃ ┃ ┗ select.jsx
┃ ┃ ┣ layout/
┃ ┃ ┃ ┗ layout.jsx
┃ ┃ ┣ navigation/
┃ ┃ ┃ ┣ navbar.jsx
┃ ┃ ┃ ┗ navigation.jsx
┃ ┃ ┗ rootAdminRegister/
┃ ┃   ┣ rootAdminRegister.jsx
┃ ┃   ┗ rootAdminRegister.logic.js
┃ ┣ pages/
┃ ┃ ┣ admins/
┃ ┃ ┃ ┣ edit-admin/
┃ ┃ ┃ ┣ reset-password/
┃ ┃ ┃ ┣ add-admin.jsx
┃ ┃ ┃ ┣ add-admin.logic.js
┃ ┃ ┃ ┣ index.jsx
┃ ┃ ┃ ┗ index.logic.js
┃ ┃ ┣ api/
┃ ┃ ┃ ┣ auth/
┃ ┃ ┃ ┗ hello.js
┃ ┃ ┣ department/
┃ ┃ ┃ ┣ edit-department/
┃ ┃ ┃ ┣ add-department.jsx
┃ ┃ ┃ ┣ add-department.logic.js
┃ ┃ ┃ ┣ department.logic.js
┃ ┃ ┃ ┣ index.jsx
┃ ┃ ┃ ┗ index.logic.js
┃ ┃ ┣ employee/
┃ ┃ ┃ ┣ edit-employee/
┃ ┃ ┃ ┣ [id].jsx
┃ ┃ ┃ ┣ add-employee.jsx
┃ ┃ ┃ ┣ add-employee.logic.js
┃ ┃ ┃ ┣ index.jsx
┃ ┃ ┃ ┗ index.logic.js
┃ ┃ ┣ _app.js
┃ ┃ ┣ _document.js
┃ ┃ ┗ index.js
┃ ┣ styles/
┃ ┃ ┣ Home.module.scss
┃ ┃ ┣ admin.module.scss
┃ ┃ ┣ colors.scss
┃ ┃ ┣ common.module.scss
┃ ┃ ┣ formContainer.module.scss
┃ ┃ ┣ globals.scss
┃ ┃ ┣ navbar.module.scss
┃ ┃ ┗ navigation.module.scss
┃ ┗ utils/
┃   ┣ deleteData.js
┃   ┣ fetchData.js
┃   ┣ isEmpty.js
┃   ┣ postData.js
┃   ┣ session.js
┃   ┣ sessionSSR.js
┃   ┗ updateData.js
┣ .env.development
┣ .env.production
┣ .gitignore
┣ README.md
┣ jsconfig.json
┣ next.config.js
┣ package-lock.json
┗ package.json
```
