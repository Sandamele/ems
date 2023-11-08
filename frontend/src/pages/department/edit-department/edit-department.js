import { postData } from "@/utils/postData";
import { session } from "@/utils/session";
import { updateData } from "@/utils/updateData";
import { toast } from "react-toastify";

// const BASE_URL = process.env.EMS_SERVER_LINK;
export const editDepartmentLogic = (department) => {
  const { token } = session();
  const initialValues = {
    department: department.data.name,
    manager: department.data.manager,
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
    await updateData('department/edit', department.data.id, body, token).then(data => {
        if(!!data.data){
            toast.success("Successfully updated Department", { 
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
            });
            toast.onChange(() => {
                setTimeout(() => {
                    window.open('/department','_self')
                }, 2000);
            })
        }
    })
  };

  return { initialValues, validate, handelSubmit };
};
