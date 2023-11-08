import FormContainer from "../../../components/common/formContainer";
import Layout from "../../../components/layout/layout";
import { fetchData } from "@/utils/fetchData";
import { sessionSSR } from "@/utils/sessionSSR";
import React from "react";
import { Formik } from "formik";
import Inputbox from "../../../components/common/inputbox";
import Button from "../../../components/common/button";
import Select from "../../../components/common/select";
import { ToastContainer } from "react-toastify";
import BackButton from "../../../components/common/backButton";
import editEmployeeLogic from "./edit-employee.logic";

export default function EditEmployee({employee, departments}) {
  const {initialValues, validate, handelSubmit, error} = editEmployeeLogic(employee);
  return (
    <Layout>
      <div>
      <BackButton link={"/employee"} />
      </div>
      <hr />
      <div>
        <FormContainer header="Edit Employee">
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={(values, setSubmitting) => {
              handelSubmit(values, setSubmitting);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-lg-6 col-md-6">
                    <Inputbox
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      handleChange={handleChange}
                      value={values.firstName}
                    />
                    {errors.firstName && touched.firstName ? (
                      <div className="text-danger">{errors.firstName}</div>
                    ) : null}
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <Inputbox
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      handleChange={handleChange}
                      value={values.lastName}
                    />
                    {errors.lastName && touched.lastName ? (
                      <div className="text-danger">{errors.lastName}</div>
                    ) : null}
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-lg-6 col-md-6">
                    <Inputbox
                      type="email"
                      name="email"
                      placeholder="Email"
                      handleChange={handleChange}
                      value={values.email}
                    />
                    {errors.email && touched.email ? (
                      <div className="text-danger">{errors.email}</div>
                    ) : null}
                    {error.email && touched.email ? (
                      <div className="text-danger">{error.email}</div>
                    ) : null}
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <Inputbox
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      handleChange={handleChange}
                      value={values.phoneNumber}
                    />
                    {errors.phoneNumber && touched.phoneNumber ? (
                      <div className="text-danger">{errors.phoneNumber}</div>
                    ) : null}
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-lg-6 col-md-6">
                  <Select
                    name="gender"
                    value={values.gender}
                    handleChange={handleChange}
                  >
                    <option value="" selected disabled hidden>
                      Select gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Select>
                  {errors.gender && touched.gender ? (
                    <div className="text-danger">{errors.gender}</div>
                  ) : null}
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <Inputbox
                      type="text"
                      name="employeeCode"
                      placeholder="Employee Code"
                      handleChange={handleChange}
                      value={values.employeeCode}
                    />
                    {errors.employeeCode && touched.employeeCode ? (
                      <div className="text-danger">{errors.employeeCode}</div>
                    ) : null}
                    {error.employee_code && touched.employeeCode ? (
                      <div className="text-danger">{"Employee must be unique"}</div>
                    ) : null}
                  </div>
                </div>
                <div className="row mb-3">
                  
                  <div className="col-lg-6 col-md-6">
                    <Inputbox
                      type="text"
                      name="position"
                      placeholder="Position"
                      handleChange={handleChange}
                      value={values.position}
                    />
                    {errors.position && touched.position ? (
                      <div className="text-danger">{errors.position}</div>
                    ) : null}
                  </div>
                  <div className="col-lg-6 col-md-6">
                  <Select
                    name="department"
                    value={values.department}
                    handleChange={handleChange}
                  >
                    <option value="" selected disabled hidden>
                      Select department
                    </option>
                    {departments.data.length > 0 && departments.data.map((department) => (
                      <option key={department.id} value={department.id}>{department.name}</option>
                    ))}
                  </Select>
                  {errors.department && touched.department ? (
                    <div className="text-danger">{errors.department}</div>
                  ) : null}
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-lg-6 col-md-6">
                    <Inputbox
                      type="text"
                      name="addressStreet"
                      placeholder="Street address"
                      handleChange={handleChange}
                      value={values.addressStreet}
                    />
                    {errors.addressStreet && touched.addressStreet ? (
                      <div className="text-danger">{errors.addressStreet}</div>
                    ) : null}
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <Inputbox
                      type="text"
                      name="addressCity"
                      placeholder="City"
                      handleChange={handleChange}
                      value={values.addressCity}
                    />
                    {errors.addressCity && touched.addressCity ? (
                      <div className="text-danger">{errors.addressCity}</div>
                    ) : null}
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-lg-6 col-md-6">
                    <Inputbox
                      type="text"
                      name="addressProvince"
                      placeholder="Province"
                      handleChange={handleChange}
                      value={values.addressProvince}
                    />
                    {errors.addressProvince && touched.addressProvince ? (
                      <div className="text-danger">{errors.addressProvince}</div>
                    ) : null}
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <Inputbox
                      type="text"
                      name="addressCountry"
                      placeholder="Country"
                      handleChange={handleChange}
                      value={values.addressCountry}
                    />
                    {errors.addressCountry && touched.addressCountry ? (
                      <div className="text-danger">{errors.addressCountry}</div>
                    ) : null}
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-lg-12">
                    <Inputbox
                      type="number"
                      name="addressPostalCode"
                      placeholder="Postal Code"
                      handleChange={handleChange}
                      value={values.addressPostalCode}
                    />
                    {errors.addressPostalCode && touched.addressPostalCode ? (
                      <div className="text-danger">{errors.addressPostalCode}</div>
                    ) : null}
                  </div>
                </div>
                <Button type="submit" name="Edit" />
              </form>
            )}
          </Formik>
        </FormContainer>
        <ToastContainer />
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  const token = sessionSSR(ctx.req, ctx.res);
  const editId = ctx.query.id;
  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const department = await fetchData("department", null, token);
  const employee = await fetchData('employee', editId, token);
  return {
    props: {
      departments: department.data,
      employee: employee.data
    },
  }; 
}
