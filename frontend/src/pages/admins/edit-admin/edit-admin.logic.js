import { updateData } from "@/utils/updateData";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function EditAdminLogic(admin, editId, token, adminRole) {
  const [error, setError] = useState({});
  const initialValues = {
    firstName: admin.data.first_name,
    lastName: admin.data.last_name,
    email: admin.data.email,
    username: admin.data.username,
    roles: admin.data.roles,
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
    if (!values.username) {
      errors.username = "Required";
    }
    if (!values.roles) {
      errors.roles = "Required";
    }
    return errors;
  };

  const handelSubmit = async (values, setSubmitting) => {
    let body = {
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      username: values.username,
      roles: values.roles,
    };

    await updateData("admin/edit", `${editId}/${adminRole}`, body, token).then(
      (data) => {
        if (!!data.error) {
          setError((prevState) => ({
            ...prevState,
            [data.error.data.error.errors[0].path]: data.error.data.error.errors[0].message,
          }));
          return;
        }
        console.log(data)
        toast.success("Edit Succeffully", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
        });
        toast.onChange(() => {
          setTimeout(() => {
          }, 1900);
        });
      }
    );
  };
  return { initialValues, validate, handelSubmit, error };
}
