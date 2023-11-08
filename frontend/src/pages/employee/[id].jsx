import { sessionSSR } from "../../utils/sessionSSR";
import Layout from "../../components/layout/layout";
import React from "react";
import { fetchData } from "../../utils/fetchData";
import BackButton from "@/components/common/backButton";

export default function ViewEmployee({ department, employee }) {
  return (
    <Layout>
      <div>
      <BackButton link={"/employee"} />
      </div>
      <hr/>
      <div>
        <h3>
          Employee: {employee.data.first_name} {employee.data.last_name}
        </h3>
      </div>
      <hr />
        <table className="table table-borderless">
          <tbody>
            <tr>
              <th>Employee Code</th>
              <td>:</td>
              <td>{employee.data.employee_code}</td>
            </tr>
            <tr>
              <th>Position</th>
              <td>:</td>
              <td>{employee.data.position}</td>
            </tr>
            <tr>
              <th>Department</th>
              <td>:</td>
              <td>{department.data.name}</td>
            </tr>
            <tr>
              <th>Manager</th>
              <td>:</td>
              <td>{department.data.manager}</td>
            </tr>
          </tbody>
        </table>
      <hr />
      <table className="table table-borderless">
        <tbody>
          <tr>
            <th>First Name</th>
            <td>:</td>
            <td> {employee.data.first_name}</td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td>:</td>
            <td> {employee.data.last_name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>:</td>
            <td> {employee.data.email}</td>
          </tr>
          <tr>
            <th>Phone Number</th>
            <td>:</td>
            <td> {employee.data.phone_number}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>:</td>
            <td> {employee.data.gender}</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <table className="table table-borderless">
        <tbody>
          <tr>
            <th>Street Address</th>
            <td>:</td>
            <td> {employee.data.address_street}</td>
          </tr>
          <tr>
            <th>City</th>
            <td>:</td>
            <td> {employee.data.address_city}</td>
          </tr>
          <tr>
            <th>Province</th>
            <td>:</td>
            <td> {employee.data.address_province}</td>
          </tr>
          <tr>
            <th>Country</th>
            <td>:</td>
            <td> {employee.data.address_country}</td>
          </tr>
          <tr>
            <th>Postal Code</th>
            <td>:</td>
            <td> {employee.data.address_postal_code}</td>
          </tr>
        </tbody>
      </table>
      <hr />
    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  const token = sessionSSR(ctx.req, ctx.res);
  const id = ctx.query.id;
  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  
  const employee = await fetchData("employee", id, token);
  const department = await fetchData('department', employee.data.data.department, token);
  return {
    props: {
      employee: employee.data,
      department: department.data
    },
  };
};
