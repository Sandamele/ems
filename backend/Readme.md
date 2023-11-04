# API Documentation
### Admin
- [POST] /api/admin/register - Regsiter admin
    - Body: {first_name, last_name,username,email,roles (admin, super),passwords, confirmPassword}
- [POST] /api/admin/login - Admin Login
    - Body: {email, password}
- [GET] /api/admin/find - Get all the admins
- [GET] /api/admin/token - Refresh the token
- [GET] /api/admin/:id - Get admin
- [DELETE] /api/admin/delete/:id/:adminRole - Deletes admin
- [DELETE] /api/admin/logout - Log out the current logged in user.
- [PUT] /api/admin/edit/:id/:adminRole - Edit admin
- [PUT] /api/admin/change_password/:id - Admin change password
---

### Department
- [POST] /api/department/add - Create department
    - Body: {name}
- [GET] /api/department - Gets all departments
- [PUT] /api/department/edit/:id - Update department details
- [DELETE] /api/department/delete/:id - Remove department
----

### Employees
- [POST] /api/employee/add - Add employee to database
    - Body: {first_name,last_name,email,gender,phone_number,employee_code,position,department,address_street,address_city,address_province, address_postal_code, address_country }
- [GET] /api/employees - Gets all employees
- [GET] /api/employee/:id - Gets an employee with that particular ID
- [PUT] /api/employee/edit/:id - Updates employee information
- [DELETE] /api/employee/delete/:id - Removes employee from the system




