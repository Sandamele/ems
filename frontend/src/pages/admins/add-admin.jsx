import FormContainer from "@/components/common/formContainer";
import Layout from "../../components/layout/layout";
import Inputbox from "../../components/common/inputbox";
import Select from "../../components/common/select";
import Button from "../../components/common/button";
import { Formik } from "formik";
import adminLoginLogic from "./add-admin.logic";
import { ToastContainer } from "react-toastify";
import BackButton from "@/components/common/backButton";
import { sessionSSR } from "@/utils/sessionSSR";
export default function AddAdmin() {
  const { handelSubmit, validate, initialValues, error } = adminLoginLogic();
  return (
    <Layout>
      <div>
        <BackButton link={"/admins"} />
      </div>
      <hr />
      <div>
        <FormContainer header="Add Admin">
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
                    />
                    {errors.username && touched.username ? (
                      <div className="text-danger">{errors.username}</div>
                    ) : null}
                    {error.username && touched.username ?  (
                      <div className="text-danger text-capitalize">{error.username}</div>
                    ) : null}
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <Inputbox
                      type="text"
                      name="email"
                      placeholder="Email"
                      handleChange={handleChange}
                    />
                    {errors.email && touched.email ? (
                      <div className="text-danger">{errors.email}</div>
                    ) : null}
                    {error.email && touched.email ?  (
                      <div className="text-danger text-capitalize">{error.email}</div>
                    ) : null}
                  </div>
                </div>
                <div className="mb-3">
                  <Select name="roles" value={values.roles} handleChange={handleChange}>
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
                <div className="row mb-3">
                  <div className="col-lg-6 col-md-6">
                    <Inputbox
                      type="password"
                      name="password"
                      placeholder="Password"
                      handleChange={handleChange}
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
                    />
                    {errors.confirmPassword && touched.confirmPassword ? (
                      <div className="text-danger">
                        {errors.confirmPassword}
                      </div>
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
  return {
    props: {
    },
  };
};
