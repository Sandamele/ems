import { postData } from "@/utils/postData";
import { session } from "@/utils/session";
import { updateData } from "@/utils/updateData";
import { useState } from "react";
import { toast } from "react-toastify";

export default function editEmployeeLogic(employee, department) {
  const [error, setError] = useState({});
  const initialValues = {
    firstName: employee.data.first_name,
    lastName: employee.data.last_name,
    email: employee.data.email,
    phoneNumber: employee.data.phone_number,
    gender: employee.data.gender,
    employeeCode: employee.data.employee_code,
    position: employee.data.position,
    department: employee.data.department,
    addressStreet: employee.data.address_street,
    addressCity: employee.data.address_city,
    addressProvince: employee.data.address_province,
    addressCountry: employee.data.address_country,
    addressPostalCode: employee.data.address_postal_code,
  };

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    }
    if (!values.lastName) {
      errors.lastName = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid Email Address";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Required";
    } else if (
      isNaN(Number(values.phoneNumber)) ||
      values.phoneNumber.length !== 10
    ) {
      errors.phoneNumber = "Must be a valid Phone Number with 10 digits";
    }
    if (!values.gender) {
      errors.gender = "Required";
    }
    if (!values.employeeCode) {
      errors.employeeCode = "Required";
    }
    if (!values.position) {
      errors.position = "Required";
    }
    if (!values.department) {
      errors.department = "Required";
    }
    if (!values.addressStreet) {
      errors.addressStreet = "Required";
    }
    if (!values.addressCity) {
      errors.addressCity = "Required";
    }
    if (!values.addressProvince) {
      errors.addressProvince = "Required";
    }
    if (!values.addressCountry) {
      errors.addressCountry = "Required";
    }
    if (!values.addressPostalCode) {
      errors.addressPostalCode = "Required";
    }

    return errors;
  };
  const handelSubmit = async (values, setSubmitting) => {
    let body = {
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      phone_number: values.phoneNumber,
      gender: values.gender,
      employee_code:(values.employeeCode).toString(),
      position: values.position,
      department: values.department.toString(),
      address_street: values.addressStreet,
      address_city: values.addressCity,
      address_province: values.addressProvince,
      address_postal_code: values.addressPostalCode.toString(),
      address_country: values.addressCountry,
    };
    const { token } = session();
    await updateData(
      "employee",
      `update/${employee.data.id}`,
      body,
      token
    ).then((data) => {
      if (!!data.error) {
        console.log(data.error);
        setError((prevState) => ({
          ...prevState,
          [data.error.errors[0].path]: data.error.errors[0].message,
        }));
      }
      if (!!data.data) {
        toast.success(data.data.message, {
          position: "top-center",
          autoClose: 2000,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    });
  };

  return { initialValues, validate, handelSubmit, error };
}
