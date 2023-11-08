import { toast } from "react-toastify";
import { deleteData } from "../../utils/deleteData";

export const handleEditDepartment = async (id) => {
  window.open(`/department/edit-department/${id}`, "_self");
};
export const handleDeleteDepartment = async (id, token) => {
  await deleteData("department/delete", id, token).then((data) => {
    console.log(data.data)
    if (!!data.data) {
      toast.success(data.data.message, {
        position: "top-center",
        autoClose: 1500,
      });
      toast.onChange(() => {
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      });
    }
  });
};
