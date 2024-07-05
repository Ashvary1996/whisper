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

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  return (
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
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <TextField
                required={true}
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
              ></TextField>
              <TextField
                required={true}
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
              ></TextField>
              <Button
                sx={{
                  marginTop: "1rem",
                }}
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
                type="submit"
                fullWidth
                variant="text"
                // color="secondary"
                onClick={() => setIsLogin(false)}
              >
                Sign Up Instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Sign-Up</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                  }}
                  component="label"
                >
                  <>
                    <CameraIco />
                    <VisuallyHiddenInput type="file" accept="image/*" />
                  </>
                </IconButton>
              </Stack>
              <TextField
                required={true}
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
              ></TextField>
              <TextField
                required={true}
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
              ></TextField>
              <TextField
                required={true}
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
              ></TextField>
              <TextField
                required={true}
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
              ></TextField>
              <Button
                sx={{
                  marginTop: "1rem",
                }}
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
                type="submit"
                fullWidth
                variant="text"
                // color="secondary"
                onClick={toggleLogin}
              >
                LOG IN INSTEAD
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
}

export default Login;
