import { deleteData } from "@/utils/deleteData";

import { toast } from "react-toastify";

export const handleAddAdminRouter = () => {
  window.open("/admins/add-admin", "_self");
};
export const handleEditAdmin = (editId, adminRole) => {
  if (adminRole !== "Super Admin") {
    toast.error("Only Super Admin can edit admins", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
    });
    return;
  }
  window.open(`/admins/edit-admin/${editId}`, "_self");
};
export const handleDeleteAdmin = async (
  deleteId,
  adminId,
  adminRole,
  token
) => {
  if (adminId === deleteId) {
    toast.error("Cannot delete your own account", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
    });
    return;
  }
  await deleteData("admin/delete", `${deleteId}/${adminRole}`, token).then(
    (data) => {
      if (!!data.error) {
        toast.error(`${data.error.data.error}`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
        });
        return;
      }
      if (!!data.data) {
        toast.success(`Successfully deleted admin account`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
        });
        toast.onChange(() => {
          setTimeout(() => {
            window.location.reload();
          }, 1200);
        });
      }
    }
  );
};

export const resetAdminPassword = (id, adminRole) => {
  if (adminRole !== "Super Admin") {
    toast.error("Only Super Admin can edit admins", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
    });
    return;
  }
  window.open(`/admins/reset-password/${id}`,'_self')
};
