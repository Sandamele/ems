import Button from '@/components/common/button'
import Layout from '../../components/layout/layout'
import React from 'react'
import { useRouter } from 'next/navigation'
import { sessionSSR } from '@/utils/sessionSSR';
import { fetchData } from '@/utils/fetchData';
import { BiPencil } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { handleDeleteEmployee, handleEditEmployee, handleViewEmployee} from './index.logic';
import { ToastContainer } from 'react-toastify';

export default function Index({employees, token}) {
    const router = useRouter();
    const handleRouter = () => {
        router.push('/employee/add-employee');
    }
  return (
    <Layout>
        <div className='containers'>
            <h3>Employees</h3>
            <Button name="Add New Employee" handleButton={handleRouter} />
        </div>
        <hr />
        {employees.data.length > 0 && <table className='table table-bordered table-striped'>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Employee Code</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {!!employees.data && employees.data.map((employee, index) => (
                <tr key={employee.id}>
                  <td>{index + 1}</td>
                  <td>{employee.first_name}</td>
                  <td>{employee.last_name}</td>
                  <td>{employee.employee_code}</td>
                  <td>
                    <span className="me-3" role="button" onClick={() => handleEditEmployee(employee.id)}>
                      {" "}
                      <BiPencil color="green" />
                    </span>
                    <span className="me-3" role="button" onClick={() => handleDeleteEmployee(employee.id, token)}>
                      <MdDeleteForever color="red" />
                    </span>
                    <span roel="button" onClick={() => handleViewEmployee(employee.id)}>
                      <AiFillEye />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
        </table>}
        <ToastContainer />
    </Layout>
  )
}

export const getServerSideProps = async ({ req, res }) => {
  const token = sessionSSR(req, res);
  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const employees = await fetchData("employee", null, token);
  return {
    props: {
      employees: employees.data,
      token,
    },
  };
};
