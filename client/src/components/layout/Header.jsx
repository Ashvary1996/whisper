import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { orange } from "../../constants/color";
import {
  Add as AddIco,
  Group as GroupIco,
  Logout as LogoutIco,
  Menu as MenuIco,
  Search as SearchIco,
  Notifications as NotificationIco,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const handelMobile = () => {
    console.log("handelMobile");
  };
  const IconBtn = ({ title, icon, onClick }) => {
    return (
      <>
        <Tooltip title={title}>
          <IconButton color="inherit" size="large" onClick={onClick}>
            {icon}
          </IconButton>
        </Tooltip>
      </>
    );
  };
  const openSearch = () => {
    setIsSearch((prev) => !prev);
    console.log("openSearchDialog");
  };
  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev);
    console.log("openNewGroup");
  };

  const navigateToGroup = () => {
    navigate("/groups");
    console.log("navigateToGroup");
  };
  const logOutHandler = () => {
    setIsMobile((prev) => !prev);
    console.log("logOutHandler");
  };
  const openNotification = () => {
    setIsNotification((prev) => !prev);
    console.log("openNotification");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: orange,
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Whisper
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit" onClick={handelMobile}>
                <MenuIco />
              </IconButton>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
              }}
            />
            <Box>
              <IconBtn
                title={"Search"}
                icon={<SearchIco />}
                onClick={openSearch}
              />
              <IconBtn
                title={"New Group"}
                icon={<AddIco />}
                onClick={openNewGroup}
              />
              <IconBtn
                title={"Manage Groups"}
                icon={<GroupIco />}
                onClick={navigateToGroup}
              />
              <IconBtn
                title={"Log-Out"}
                icon={<LogoutIco />}
                onClick={logOutHandler}
              />
              <IconBtn
                title={"Notifications"}
                icon={<NotificationIco />}
                onClick={openNotification}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
