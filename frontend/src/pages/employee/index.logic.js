import { toast } from "react-toastify"
import { deleteData } from "../../utils/deleteData"
export const handleEditEmployee = async (id) => {
    window.open(`/employee/edit-employee/${id}`,'_self')
}
export const handleDeleteEmployee = async (id, token) => {
    await deleteData('employee/delete',id, token).then(data => {
        if(!!data.data){
            toast.success("Employee deleted successfully", {
                position: "top-center",
                autoClose: 1200,
                hideProgressBar: false,
            })
            toast.onChange(() => {
                setTimeout(()=> {
                  window.location.reload();
                },1200)
              })
        }else{
            toast.error("Failed to delete employee")
        }
    })
}

export const handleViewEmployee = async (id) => {
    window.open(`/employee/${id}`,'_self')
}