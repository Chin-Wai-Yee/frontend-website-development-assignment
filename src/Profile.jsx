import React from "react";
import { useEffect, useRef } from "react";
import Stack from "@mui/material/Stack";
import { Card, CardContent, Typography, Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Profile () {
  const navigate = useNavigate();
  let username = sessionStorage.getItem("user");
  const usernameRef = useRef(username);

  useEffect(() => {
    function checkLogin () {
      fetch("/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then((response) => {
        if (!response.ok) {
          console.log("Error:", response.statusText);
          navigate("/user/signin");
        }
        return response.json();
      })
      .then((data) => {
        usernameRef.current = data.username;
        sessionStorage.setItem("user", usernameRef.current);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }
    checkLogin();

  }, [navigate]);

  function logout () {
    fetch("/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((response) => {
      if (!response.ok) {
        console.log("Error:", response.statusText);
      }
      sessionStorage.removeItem("user");
      navigate("/user/signin");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }

  return (
    <Stack
      sx={{
        width: "100%",
        minHeight: "65vh",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Card
        sx={{
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          minHeight: "50vh",
          width: "fit-content",
          alignContent: "center",
          justifyContent: "center",
          bgcolor: "primary.main",
          color: "primary.contrastText",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar>
            <AccountCircleIcon />
          </Avatar>
          <Typography variant="h5" component="h2" marginY="3rem">
            You logged in as: <strong>{usernameRef.current}</strong>
          </Typography>
          <Button onClick={logout} color="inherit" variant="outlined">
            Log Out
          </Button>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Profile;