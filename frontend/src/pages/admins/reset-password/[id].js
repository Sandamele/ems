import FormContainer from "../../../components/common/formContainer";
import Layout from "../../../components/layout/layout";
import React from "react";
import { Formik } from "formik";
import Inputbox from "../../../components/common/inputbox";
import Button from "../../../components/common/button";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import BackButton from "../../../components/common/backButton";
import { resetPasswordLogic } from "./reset-password.logic";

export default function ResetAdminPassword({id}) {
    const {handelSubmit, initialValues, validate} = resetPasswordLogic(id);
  return (
    <Layout>
      <div>
        <BackButton link={"/admins"} />
      </div>
      <hr />
      <div>
        <FormContainer header="Reset Password">
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
                  <div className="col-lg-6 col-md-6">
                    <Inputbox
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      handleChange={handleChange}
                      value={values.confirmPassword}
                    />
                    {errors.confirmPassword && touched.confirmPassword ? (
                      <div className="text-danger">{errors.confirmPassword}</div>
                    ) : null}
                  </div>
                </div>
                <Button type="submit" name="Submit" />
              </form>
            )}
          </Formik>
        </FormContainer>
      </div>
      <ToastContainer />
    </Layout>
  );
}
// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async (ctx) => {
    const id = ctx.query.id;
    return {
        props: {
            id
        }
    }
}
