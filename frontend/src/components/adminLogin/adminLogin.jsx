import React from "react";
import FormContainer from "../common/formContainer";
import { Formik } from "formik";
import Inputbox from "../common/inputbox";
import Button from "../common/button";
import adminLoginLogic from "./adminLogin.logic";
import { isEmpty } from "@/utils/isEmpty";

export default function AdminLogin() {
  const { handelSubmit, initialValues, validate, invalidCredentials } = adminLoginLogic();
  return (
    <div>
      <h2 className="text-center">Welcome To Company Name</h2>
      <p className="text-center">Please Login to Continue</p>
      <FormContainer header="Login">
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
            isSubmitting,
            setSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              {!isEmpty(invalidCredentials) ? <div className="mb-3 text-center text-danger">{invalidCredentials}</div>: ''}
              <div className="mb-3">
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
              </div>
              
              <div className="mb-3">
                <Inputbox
                  type="password"
                  name="password"
                  placeholder="Password"
                  handleChange={handleChange}
                  value={values.password}
                />
                {errors.password && touched.password ? (
                  <div className="text-danger">{errors.password}</div>
                ) : null}
              </div>
              <Button type="submit" name="Login" />
            </form>
          )}
        </Formik>
      </FormContainer>
    </div>
  );
}
