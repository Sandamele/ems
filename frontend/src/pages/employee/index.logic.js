import { toast } from "react-toastify"
import { deleteData } from "../../utils/deleteData"

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