import FormContainer from "../../components/common/formContainer";
import Layout from "../../components/layout/layout";
import React from "react";
import { Formik } from "formik";
import Inputbox from "../../components/common/inputbox";
import Button from "../../components/common/button";
import { addDepartmentLogic } from "./add-department.logic";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import BackButton from "../../components/common/backButton";

export default function AddDepartment() {
    const {handelSubmit, initialValues, validate} = addDepartmentLogic();
  return (
    <Layout>
      <div>
        <BackButton link={"/department"} />
      </div>
      <hr />
      <div>
        <FormContainer header="Add Department">
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
                      name="department"
                      placeholder="Department"
                      handleChange={handleChange}
                      value={values.department}
                    />
                    {errors.department && touched.department ? (
                      <div className="text-danger">{errors.department}</div>
                    ) : null}
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <Inputbox
                      type="text"
                      name="manager"
                      placeholder="Manager"
                      handleChange={handleChange}
                      value={values.manager}
                    />
                    {errors.manager && touched.manager ? (
                      <div className="text-danger">{errors.manager}</div>
                    ) : null}
                  </div>
                </div>
                <Button type="submit" name="Add" />
              </form>
            )}
          </Formik>
        </FormContainer>
      </div>
      <ToastContainer />
    </Layout>
  );
}
