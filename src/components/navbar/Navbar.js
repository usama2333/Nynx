import { Input, Stack, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import n from "../../assests/images/n.png";
import y from "../../assests/images/y.png";
import x from "../../assests/images/x.png";
import nfirst from "../../assests/images/nfirst.png";
import dot from "../../assests/images/dot.png";
import nsecond from "../../assests/images/nsecond.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import { notificationList } from "./style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "30px",
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const notify = (error) => toast("Sign in Successfully");

const pages = ["Find Services", "About Nynx", "How it works"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const signInHandler = () => {
    notify();
  };

  const [open, setOpen] = React.useState(false);
  const handleOpenn = () => setOpen(true);
  const handleClosee = () => setOpen(false);
  return (
    <Fragment>
      <Container maxWidth="custom">
        <AppBar
          position="absolute"
          sx={{
            background: "#422438",
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
              <Box
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                  }}
                >
                  <Box
                    component="img"
                    src={n}
                    sx={{
                      position: "relative",
                      top: { xl: "4px", sm: "0px" },
                      width: { xl: "21px", lg: "18px", md: "18px" },
                      height: { xl: "24px", lg: "20px", md: "20px" },
                    }}
                  ></Box>

                  <Box
                    component="img"
                    src={y}
                    sx={{
                      position: "absolute",
                      top: "8px",
                      width: { xl: "21px", lg: "18px", md: "18px" },
                      height: { xl: "24px", lg: "20px", md: "20px" },
                    }}
                  ></Box>

                  <Box
                    component="img"
                    src={nfirst}
                    sx={{
                      position: "absolute",
                      left: { xl: "45px", lg: "37px", md: "37px" },
                      top: { xl: "15px", lg: "8px", md: "8px" },
                    }}
                  ></Box>
                  <Box
                    component="img"
                    src={dot}
                    sx={{
                      position: "absolute",
                      left: { xl: "45px", lg: "37px", md: "37px" },
                      top: { xl: "8px", lg: "0px", md: "0px" },
                    }}
                  ></Box>

                  <Box
                    component="img"
                    src={nsecond}
                    sx={{
                      position: "absolute",
                      left: { xl: "52px", lg: "45px", md: "45px" },
                      top: { xl: "8px", lg: "2px", md: "2px" },
                    }}
                  ></Box>

                  <Box
                    component="img"
                    src={x}
                    sx={{
                      position: "absolute",
                      left: { xl: "65px", lg: "58px", md: "58px" },
                      top: { xl: "4px", lg: "2px", md: "2px" },
                      width: { xl: "21px", lg: "18px", md: "18px" },
                      height: { xl: "24px", lg: "20px", md: "20px" },
                    }}
                  ></Box>
                </Box>
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>

                {/* End search bar here */}
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {/* Search bar here */}

                <Box sx={{ ml: "80px" }}>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search>
                </Box>

                {/* End search bar here */}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Stack direction="row" alignItems="center">
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: { xl: "16px", lg: "16px", md: "14px" },
                      lineHeight: { xl: "24px", lg: " 20px", md: "20px" },
                      /* identical to box height */

                      textTransform: "capitalize",

                      color: "#FFF2D0",
                      display: { md: "block", xs: "none" },
                    }}
                  >
                    Find Services
                  </Typography>
                  <Typography
                    sx={{
                      ml: { lg: "52px", md: "45px" },
                      mr: { lg: "26px", md: "20px" },
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: { xl: "16px", lg: "16px", md: "14px" },
                      lineHeight: { xl: "24px", lg: " 20px", md: "20px" },
                      /* identical to box height */

                      textTransform: "capitalize",

                      color: "#FFF2D0",
                      display: { md: "block", xs: "none" },
                    }}
                  >
                    About Nynx
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: { xl: "16px", lg: "16px", md: "14px" },
                      lineHeight: { xl: "24px", lg: " 20px", md: "20px" },
                      /* identical to box height */

                      textTransform: "capitalize",

                      color: "#FFF2D0",
                      display: { md: "block", xs: "none" },
                    }}
                  >
                    How It Works
                  </Typography>
                  <Box>
                    <KeyboardArrowDownIcon
                      onClick={handleClick}
                      sx={{
                        // width: "16.37px",
                        // height: "15.19px",
                        display: { md: "flex", xs: "none" },
                      }}
                    ></KeyboardArrowDownIcon>
                    {/* <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                    <Typography sx={notificationList}  onClick={handleClose}></Typography>
                    <Typography sx={notificationList} onClick={handleClose}>50</Typography>
                    <Typography  sx={notificationList} onClick={handleClose}>Cu</Typography>
                    </Menu> */}
                  </Box>
                  <Button
                    onClick={signInHandler}
                    sx={{
                      ml: { sm: "20px", md: "26px" },
                      mr: { sm: "20px", md: "26px" },
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: {
                        xl: "16px",
                        lg: "16px",
                        md: "14px",
                        sm: "14px",
                        xs: "12px",
                      },
                      lineHeight: {
                        xl: "24px",
                        lg: " 20px",
                        md: "20px",
                        sm: "20px",
                      },
                      /* identical to box height */

                      textTransform: "capitalize",

                      color: "#FFF2D0",
                    }}
                  >
                    Login
                  </Button>

                  <Box>
                    <Button onClick={handleOpenn}>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: { xl: "16px", sm: "16px", xs: "12px" },
                          lineHeight: { xl: "24px", sm: "20px" },
                          /* identical to box height */
                          background: "#FFF2D0",
                          textTransform: "capitalize",
                          padding: {
                            xl: "8px 28px 8px 29px",
                            lg: "6px 24px 6px 25px",
                            md: "6px 24px 6px 25px",
                            sm: "5px 20px 5px 20px",
                            xs: "5px 16px 5px 16px",
                          },
                          color: "#422438",
                          borderRadius: "49px",
                        }}
                      >
                        Sign Up
                      </Typography>
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <ToastContainer />
        <Box
          sx={{
            borderRadius: "100px",
          }}
        >
          <Modal
            open={open}
            onClose={handleClosee}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "26px",
                  lineHeight: "100%",
                  /* or 48px */

                  color: "red",
                  mb: "20px",
                }}
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                Welcome to NYNX! The new home for freelancers.
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Our platform is currently under construction at the moment, but
                please subscribe to our waiting list at the bottom of this page
                to receive news of our upcoming launch, exciting features which
                we think you'll love, and discounts on our platform fees..
              </Typography>
              <Typography>Don't miss out on the NYNX revolution!</Typography>
            </Box>
          </Modal>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Navbar;
