import Layout from '../../components/layout/layout'
import React from 'react'
import { handleAddDepartmentRouter } from './department.logic'
import Button from '@/components/common/button'
import { sessionSSR } from '@/utils/sessionSSR'
import { fetchData } from '@/utils/fetchData'
import { handleDeleteDepartment, handleEditDepartment } from './index.logic'
import { BiPencil } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { ToastContainer } from 'react-toastify'
export default function Index({departments, token}) {
  return (
    <Layout>
        <div className='containers'>
            <h3>Department</h3>
          <Button name="Add Department" handleButton={handleAddDepartmentRouter} />
        </div>
        <hr />
        <div>
          <table className='table table-bordered table-striped'>
            <thead>
              <tr>
                <th>Department</th>
                <th>Manager</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {departments.data.length > 0 && departments.data.map((department) => (
                <tr key={department.id}>
                  <td>{department.name}</td>
                  <td>{department.manager}</td>
                  <td>
                    <span className="me-3" role="button" onClick={() => handleEditDepartment(department.id)}>
                      {" "}
                      <BiPencil color="green" />
                    </span>
                    <span className="me-3" role="button" onClick={() => handleDeleteDepartment(department.id, token)}>
                      <MdDeleteForever color="red" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ToastContainer />
    </Layout>
  )
}

export const getServerSideProps = async (ctx) => {
  const token = sessionSSR(ctx.req, ctx.res);
  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const department = await fetchData("department", null, token);
  return {
    props: {
      departments: department.data,
      token
    }
  }
}