import { postData } from "@/utils/postData";
import { session } from "@/utils/session";
import { updateData } from "@/utils/updateData";
import { toast } from "react-toastify";

// const BASE_URL = process.env.EMS_SERVER_LINK;
export const resetPasswordLogic = (id) => {
  const { token } = session();
  const initialValues = {
    password: "",
    confirmPassword: "",
  };
  const validate = (values) => {
    const errors = {};
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
      password: values.password,
      confirmPassword: values.confirmPassword,
    };
    await updateData("admin/change_password", id, body, token).then((data) => {
      if (!!data.data) {
        toast.success("Successfully changed Password", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
        });
        toast.onChange(() => {
          setTimeout(() => {
            window.open("/admins", "_self");
          }, 2200);
        });
      }
    });
  };

  return { initialValues, validate, handelSubmit };
};
