import { postData } from "@/utils/postData";
import axios from "axios";
import { toast } from "react-toastify";

export default function rootAdminRegisterLogic() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
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
      roles: "super admin",
      confirmPassword: values.confirmPassword,
    };
    await postData("admin/register", body).then((data) => {
      toast.success(data.data.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
      })
      toast.onChange(() => {
        setTimeout(()=> {
            window.location.reload()
        },2100)
      })
    });
  };

  return { initialValues, validate, handelSubmit };
}
