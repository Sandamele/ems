import { postData } from "../../utils/postData";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function AddAdminLogic() {
  const router = useRouter();
  const [error, setError] = useState({});
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    roles: "",
    confirmPassword: "",
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
    if (!values.password) {
      errors.password = "Required";
    }
    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords must match.";
    }
    return errors;
  };
  const handelSubmit = async (values, setSubmitting) => {
    let body = {
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      username: values.username,
      passwords: values.password,
      roles: values.roles,
      confirmPassword: values.confirmPassword,
    };
    await postData("admin/register", body).then((data) => {
      if (!!data.error) {
        setError((prevState) => ({
          ...prevState,
          [data.error.errors[0].path]: data.error.errors[0].message,
        }));
        return;
      }
      toast.success("Admin added", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
      });
      toast.onChange(() => {
        setTimeout(() => {
          router.push("/admins");
        }, 1900);
      });
    });
  };

  return { handelSubmit, initialValues, validate, error };
}
