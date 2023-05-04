import React, { useState } from "react";
import "./LoginPage.css";
import {
  Box,
  Button,
  Divider,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import LockOpenTwoToneIcon from "@mui/icons-material/LockOpenTwoTone";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialLoginValues = {
  username: "",
  password: "",
};

const validationSchema = Yup.object({
  username: Yup.string().required("Please Enter your Email"),
  password: Yup.string()
    .required("Please Enter your Password")
    .min(7, "Password must contain Atleast 8 Characters"),
  // .matches(
  //   "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
  //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  // ),
});

const onSubmit = (values, formikHelpers) => {
  console.log(values);
  formikHelpers.resetForm();
};

function LoginPage() {
  return (
    <>
      <div className="container">
        <div className="heading0">
          <h2 className="fontfamily">
            Welcome to the World of{" "}
            <span
              style={{
                color: "red",
              }}
            >
              Stop
            </span>{" "}
            &{" "}
            <span
              style={{
                color: "yellow",
              }}
            >
              Shop
            </span>
            .!
          </h2>
          <img src="https://images.bewakoof.com/web/group-19-1617704502.png" alt="" />
        </div>
        <div className="login-container">
          <div className="heading">
            <h2 className="fontfamily">Login / Sign up </h2>
            <h2 className="fontfamily">
              for Lastest Trends,exciting offers and everything{" "}
              <span
                style={{
                  color: "red",
                }}
              >
                Stop
              </span>{" "}
              &{" "}
              <span
                style={{
                  color: "yellow",
                }}
              >
                Shop
              </span>
            </h2>
          </div>
          <Formik
            initialValues={initialLoginValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnMount
          >
            {(formik) => (
              <>
                <Form>
                  <h2 className="login-heading">Login</h2>
                  <Field
                    name="username"
                    id="username"
                    type="text"
                    as={TextField}
                    label="Username"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonOutlineTwoToneIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <ErrorMessage name="username" component={TextError} />
                  <Box height={20} />
                  <Field
                    name="password"
                    id="usernpasswordame"
                    type="password"
                    as={TextField}
                    label="Password"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockOpenTwoToneIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <ErrorMessage name="password" component={TextError} />
                  <Box height={16} />
                  <Button fullWidth
                    type="submit"
                    disabled={!formik.isValid}
                    variant="contained"
                  >
                    SIGN IN
                  </Button>
                </Form>
              </>
            )}
          </Formik>
          <Divider
            sx={{
              color: "white",
            }}
          />
          <div className="foot">
            <h5 className="fontfamily">
              By creating an account or logging in, you agree with Stop & Shop's
              Terms and Conditions and Privacy Policy.
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
