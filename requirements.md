# Employee  Management System Requirements

## Description

This system is designed to manage employees and administrators within an organization. It provides features to create, edit, delete, and view employees, as well as to manage administrators, their roles, and permissions.

## Employee Features

- **Create a New Employee:**
  - Firstname
  - Lastname
  - Email
  - Phone number
  - Department
  - Position
  - Gender
  - employee code
  - address

- **Edit an Existing Employee:**
  - Update employee information

- **Delete an Employee:**
  - Remove an employee from the system

- **View a List of All Employees:**
  - Display a list of all employees

- **View an Individual Employee:**
  - Display detailed information about a specific employee

## Admin Features

- **One-time Signup for Super Admin:**
  - Create a Super Admin account during the initial setup

- **Create a New Admin:**
  - Firstname
  - Lastname
  - Email
  - Password
  - Role (admin, superadmin)

- **Add/Remove Permissions for Existing Roles:**
  - Allow Super Admin to modify permissions for admin and manager roles

- **Edit an Admin:**
  - Allow Super Admin to edit an admin's information, including role and permissions

- **Delete an Admin:**
  - Allow Super Admin to remove admin and manager accounts

- **View a List of All Admins:**
  - Display a list of all admin and manager accounts

## Tech Stack
### Backend
- Node.js with Express framework
- MYSQL database
  ### Random Notes
  Department will be its table
  Position will also be its own table
  Employee will have foreign keys referencing department