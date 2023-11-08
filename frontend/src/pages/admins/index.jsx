import { sessionSSR } from "../../utils/sessionSSR";
import Layout from "../../components/layout/layout";
import React, { useState } from "react";
import { fetchData } from "@/utils/fetchData";
import { BiPencil } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Button from "../../components/common/button";
import styles from "../../styles/admin.module.scss";
import { useEffect } from "react";
import { session } from "@/utils/session";
import { ToastContainer, toast } from "react-toastify";
import { handleAddAdminRouter, handleDeleteAdmin, handleEditAdmin, resetAdminPassword } from "./index.logic";

export default function Index({ admins, token }) {
  const [adminRole, setAdminRole] = useState("");
  const [adminId, setAdminId] = useState(0);
  
  useEffect(() => {
    const { user } = session();
    setAdminRole(user.roles);
    setAdminId(user.admin_id);
  }, []);
  return (
    <Layout>
      <div className={`containers`}>
        <h3>Admins</h3>
        {adminRole === "Super Admin" && (
          <Button name="Add Admin" handleButton={handleAddAdminRouter} />
        )}
      </div>
      <hr />
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {admins.data.length > 0 &&
              admins.data.map((admin) => (
                <tr key={admin.id}>
                  <td>{admin.first_name}</td>
                  <td>{admin.last_name}</td>
                  <td>{admin.email}</td>
                  <td>{admin.username}</td>
                  <td>{admin.roles}</td>
                  <td>
                    <span
                      className="me-3"
                      role="button"
                      onClick={() => handleEditAdmin(admin.id, adminRole)}
                    >
                      {" "}
                      <BiPencil color="green" />
                    </span>
                    <span
                      role="button"
                      className="me-3"
                      onClick={() =>
                        handleDeleteAdmin(admin.id, adminId, adminRole, token)
                      }
                    >
                      <MdDeleteForever color="red" />
                    </span>
                    <span role="button" onClick={() => resetAdminPassword(admin.id, adminRole)}>
                      <RiLockPasswordLine />
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </Layout>
  );
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
  const admins = await fetchData("admin/find", null, token);
  return {
    props: {
      admins: admins.data,
      token,
    },
  };
};
