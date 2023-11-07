import React, { useState } from "react";
import FormContainer from "../common/formContainer";
import Inputbox from "../common/inputbox";
import Button from "../common/button";
import { Formik } from "formik";
import rootAdminRegisterLogic from "./rootAdminRegister.logic";
import { ToastContainer } from "react-toastify";

export default function RootAdminRegister() {
  const { handelSubmit, initialValues, validate } = rootAdminRegisterLogic();
  return (
    <div>
      <h1 className="text-center">Welcome!</h1>
      <p className="text-center">
        To get started, please create the first root admin by entering necessary
        information below.
      </p>
      <FormContainer header="Admin Register">
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
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="mb-3 row">
                <div className="col-lg-6">
                  <Inputbox
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    handleChange={handleChange}
                    value={values.firstName}
                  />
                  {errors.firstName && touched.firstName ? (<div className="text-danger">{errors.firstName}</div>) : null}
                </div>
                <div className="col-lg-6">
                  <Inputbox
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    handleChange={handleChange}
                    value={values.lastName}
                  />
                  {errors.lastName && touched.lastName ? (<div className="text-danger">{errors.lastName}</div>) : null}

                </div>
              </div>
              <div className="mb-3">
                <Inputbox
                  type="email"
                  name="email"
                  placeholder="Email"
                  handleChange={handleChange}
                  value={values.email}
                />
                  {errors.email && touched.email ? (<div className="text-danger">{errors.email}</div>) : null}

              </div>
              <div className="mb-3">
                <Inputbox
                  type="text"
                  name="username"
                  placeholder="Username"
                  handleChange={handleChange}
                  value={values.username}
                />
                  {errors.username && touched.username ? (<div className="text-danger">{errors.username}</div>) : null}

              </div>
              <div className="mb-3">
                <Inputbox
                  type="password"
                  name="password"
                  placeholder="Password"
                  handleChange={handleChange}
                  value={values.password}
                />
                  {errors.password && touched.password ? (<div className="text-danger">{errors.password}</div>) : null}
              </div>
              <div className="mb-3">
                <Inputbox
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  handleChange={handleChange}
                  value={values.confirmPassword}
                />
                  {errors.confirmPassword && touched.confirmPassword ? (<div className="text-danger">{errors.confirmPassword}</div>) : null}

              </div>
              <Button type="submit" name="Ready to start" />
            </form>
          )}
        </Formik>
      </FormContainer>
      <ToastContainer />
    </div>
  );
}
