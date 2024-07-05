import React, { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CameraAlt as CameraIco } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/style";
import { Formik, Form, Field } from "formik";
import { validationSchema } from "../utils/validators";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [avatar, setAvatar] = useState(null);

  const toggleLogin = () => {
    setIsLogin((prev) => !prev);
  };
  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
      // const reader = new FileReader();
      // reader.onloadend = () => {
      //   setAvatar(reader.result);
      // };
      // reader.readAsDataURL(file);
    }
  };
  return (
    <div style={{ backgroundImage: "linear-gradient(45deg, black, #6cb36e)" }}>
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {isLogin ? (
            <>
              <Typography variant="h5">Login</Typography>
              <Formik
                initialValues={{ username: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form style={{ width: "100%", marginTop: "1rem" }}>
                    <Field
                      name="username"
                      as={TextField}
                      label="Username"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      error={touched.username && !!errors.username}
                      helperText={touched.username && errors.username}
                    />
                    <Field
                      name="password"
                      as={TextField}
                      type="password"
                      label="Password"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      error={touched.password && !!errors.password}
                      helperText={touched.password && errors.password}
                    />
                    <Button
                      sx={{ marginTop: "1rem" }}
                      variant="contained"
                      color="primary"
                      type="submit"
                      fullWidth
                    >
                      Login
                    </Button>
                    <Typography textAlign={"center"} m={"1rem"}>
                      OR
                    </Typography>
                    <Button
                      type="button"
                      fullWidth
                      variant="text"
                      onClick={toggleLogin}
                    >
                      Sign Up Instead
                    </Button>
                  </Form>
                )}
              </Formik>
            </>
          ) : (
            <>
              <Typography variant="h5">Sign-Up</Typography>
              <Formik
                initialValues={{
                  name: "",
                  username: "",
                  bio: "",
                  password: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form style={{ width: "100%", marginTop: "1rem" }}>
                    <Stack
                      position={"relative"}
                      width={"10rem"}
                      margin={"auto"}
                    >
                      <Avatar
                        src={avatar}
                        sx={{
                          width: "10rem",
                          height: "10rem",
                          objectFit: "contain",
                        }}
                      />
                      <IconButton
                        sx={{ position: "absolute", bottom: 0, right: 0 }}
                        component="label"
                      >
                        <>
                          <CameraIco />
                          <VisuallyHiddenInput
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarChange}
                          />
                        </>
                      </IconButton>
                    </Stack>
                    <Field
                      name="name"
                      as={TextField}
                      label="Name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      error={touched.name && !!errors.name}
                      helperText={touched.name && errors.name}
                    />
                    <Field
                      name="username"
                      as={TextField}
                      label="Username"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      error={touched.username && !!errors.username}
                      helperText={touched.username && errors.username}
                    />
                    <Field
                      name="bio"
                      as={TextField}
                      label="Bio"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                    <Field
                      name="password"
                      as={TextField}
                      type="password"
                      label="Password"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      error={touched.password && !!errors.password}
                      helperText={touched.password && errors.password}
                    />
                    <Button
                      sx={{ marginTop: "1rem" }}
                      variant="contained"
                      color="primary"
                      type="submit"
                      fullWidth
                    >
                      Sign-Up
                    </Button>
                    <Typography textAlign={"center"} m={"1rem"}>
                      OR
                    </Typography>
                    <Button
                      type="button"
                      fullWidth
                      variant="text"
                      onClick={toggleLogin}
                    >
                      LOG IN INSTEAD
                    </Button>
                  </Form>
                )}
              </Formik>
            </>
          )}
        </Paper>
      </Container>
    </div>
  );
}

export default Login;
