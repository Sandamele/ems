import { useState } from "react";
import { postData } from "../../utils/postData";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
export default function adminLoginLogic() {
  const [invalidCredentials, setInvalidCredentials] = useState('');
  const router = useRouter();
  const initialValues = {
    email: "",
    password: "",
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid Email Address";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };

  const handelSubmit = async (values, setSubmitting) => {
    const res = await postData("admin/login", {
      email: values.email,
      passwords: values.password,
    });
    if(!!res.error){
      setInvalidCredentials(res.error)
      return;
    }
    if(!!res.data.data){
      setInvalidCredentials('');
      setCookie('token', res.data.data);
      router.push('/employee');
    }
  };

  return { initialValues, validate, handelSubmit, invalidCredentials };
}
