import { sessionSSR } from "@/utils/sessionSSR";
import Layout from "../../../components/layout/layout";
import React from "react";
import { fetchData } from "@/utils/fetchData";
import FormContainer from "@/components/common/formContainer";
import Inputbox from "../../../components/common/inputbox";
import Select from "../../../components/common/select";
import Button from "../../../components/common/button";
import { Formik } from "formik";
import EditAdminLogic from "./edit-admin.logic";
import jwt from 'jsonwebtoken';
import { ToastContainer } from "react-toastify";
import BackButton from "@/components/common/backButton";
export default function EditAdmin({ admin, editId, token, adminRole }) {
  const { initialValues, validate, handelSubmit, error } = EditAdminLogic(admin, editId, token, adminRole);
  return (
    <Layout>
      <div>
      <BackButton link={"/admins"} />
      </div>
      <hr />
      <div>
        <FormContainer header={`Edit Admin`}>
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
                      type="text"
                      name="username"
                      placeholder="Username"
                      handleChange={handleChange}
                      value={values.username}
                    />
                    {errors.username && touched.username ? (
                      <div className="text-danger">{errors.username}</div>
                    ) : null}
                    {error.username && touched.username ? (
                      <div className="text-danger text-capitalize">
                        {error.username}
                      </div>
                    ) : null}
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <Inputbox
                      type="text"
                      name="email"
                      placeholder="Email"
                      handleChange={handleChange}
                      value={values.email}
                    />
                    {errors.email && touched.email ? (
                      <div className="text-danger">{errors.email}</div>
                    ) : null}
                    {error.email && touched.email ? (
                      <div className="text-danger text-capitalize">
                        {error.email}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="mb-3">
                  <Select
                    name="roles"
                    value={values.roles}
                    handleChange={handleChange}
                  >
                    <option value="" selected disabled hidden>
                      Select role
                    </option>
                    <option value="super admin">Super Admin</option>
                    <option value="admin">Admin</option>
                  </Select>
                  {errors.roles && touched.roles ? (
                    <div className="text-danger">{errors.roles}</div>
                  ) : null}
                </div>
                <Button type="submit" name="Edit" />
              </form>
            )}
          </Formik>
        </FormContainer>
      </div>
      <ToastContainer />
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
  const decodeToken = jwt.decode(token);
  const admin = await fetchData("admin/findOne", editId, token);
  return {
    props: {
      admin: admin.data,
      editId,
      token,
      adminRole: decodeToken.roles
    },
  };
};
