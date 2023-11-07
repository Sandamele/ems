import { postData } from "@/utils/postData";
import { session } from "@/utils/session";
import { toast } from "react-toastify";

// const BASE_URL = process.env.EMS_SERVER_LINK;
export const addDepartmentLogic = () => {
  const { token } = session();
  const initialValues = {
    department: "",
    manager: "",
  };
  const validate = (values) => {
    const errors = {};
    if (!values.department) {
      errors.department = "Required";
    }
    if (!values.manager) {
      errors.manager = "Required";
    }
    return errors;
  };

  const handelSubmit = async (values, setSubmitting) => {
    let body = {
      name: values.department,
      manager: values.manager,
    };
    await postData("department/add", body, token).then((data) => {
      toast.success(data.data.message, {
        position: "top-center",
        autoClose: 2000,
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
    // await axios.post(`${BASE_URL}/department/add`, body).then((data) => {
    //     console.log(data)
    // }).catch((error) => {
    //     console.log(error)
    // })
  };

  return { initialValues, validate, handelSubmit };
};
