import { Stack, Typography } from "@mui/material";
import { Fragment } from "react";
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
import n from '../../assests/images/n.png';
import y from '../../assests/images/y.png';
import x from '../../assests/images/x.png';
import nfirst from '../../assests/images/nfirst.png';
import dot from '../../assests/images/dot.png';
import nsecond from '../../assests/images/nsecond.png';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from '@mui/icons-material/Search';

const pages = ["Find Services", "About Nynx", "How it works"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  return (
    <Fragment>
      <Container maxWidth="custom">
        <AppBar position="absolute" sx={{ background: "#422438",backgroundColor: "transparent", boxShadow: "none" }}>
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
              <Box sx={{
                position : 'relative',
              }}>

              
                <Box
                component='img'
                src={n}
                sx={{
                   position : 'relative',
                   top : {xl : '4px' , sm : '0px'},
                    width : {xl : '21px' , lg : '18px' , md : '18px'},
                    height :{xl : '24px' , lg : '20px' , md : '20px'}
                }}
                
                >
                </Box>

                <Box
                component='img'
                src={y}
                sx={{
                    position : 'absolute',
                    top:'8px',
                    width : {xl : '21px' , lg : '18px', md : '18px'},
                    height :{xl : '24px' , lg : '20px', md : '20px'}
                }}
                >
                </Box>

                <Box
                component='img'
                src={nfirst}
                sx={{
                    position : 'absolute',
                    left : {xl : '45px', lg : '37px' , md : '37px' },
                    top :  {xl : '15px' , lg : '8px' , md : '8px'}

                }}
                >
                </Box>
                 <Box
                component='img'
                src={dot}
                sx={{
                    position : 'absolute',
                    left : {xl : '45px', lg : '37px' , md : '37px'},
                    top : {xl : '8px' , lg : '0px',md : '0px'}

                }}
                >
                </Box> 


                 <Box
                component='img'
                src={nsecond}
                sx={{
                    position : 'absolute',
                    left : {xl : '52px' , lg : '45px' , md : '45px'},
                    top : {xl : '8px' , lg : '2px' , md : '2px'}

                }}
                >
                </Box>

                <Box
                component='img'
                src={x}
                sx={{
                    position : 'absolute',
                    left : {xl : '65px' , lg : '58px', md : '58px'},
                    top : {xl : '4px' , lg : '2px', md : '2px'},
                    width : {xl : '21px' , lg : '18px' , md :'18px'},
                    height :{xl : '24px' , lg : '20px' , md : '20px'}
                }}
                >
                </Box> 

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
                {/* LOGOooooo */}
                <Stack
                 direction='row'
                 alignItems='center'
                  sx={{
                    width: {xl : '250.56px' , lg : '200px', md : '200px',sm : '250px', xs : '150px'},
                    height: {xl : '42.58' , lg : '35px', md : '35px', sm : '35px' , xs : '35px'},
                    background: "#FFF2D0",
                    opacity: 0.1,
                    borderRadius: "21.3384px",
                    ml : {lg : '80px' , md : '60px'}
                  }}
                >
                  <SearchIcon sx={{color : 'red' , ml :'20px'}}/>
                    <Typography sx={{color: 'red', order : 1, opacity: 1,}}>
                        Search
                    </Typography>
                    <KeyboardArrowDownIcon sx={{color : 'red'}}/>
                </Stack>
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {/* {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))} */}
                
                <Stack
                 direction='row'
                 alignItems='center'
                  sx={{
                    width: {xl : '250.56px' , lg : '250px', md : '200px'},
                    height: {xl : '42.58' , lg : '35px', md : '35px'},
                    background: "#FFF2D0",
                    opacity: 0.1,
                    borderRadius: "21.3384px",
                    ml : {lg : '80px' , md : '60px'}
                  }}
                >
                  <SearchIcon sx={{color : 'red' , ml :'20px'}}/>
                    <Typography sx={{color: 'red', order : 1, opacity: 1,}}>
                        Search
                    </Typography>
                    <KeyboardArrowDownIcon sx={{color : 'red'}}/>
                </Stack>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Stack direction="row" alignItems="center">
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: {xl : '16px', lg : '14px', md : '14px'},
                      lineHeight: {xl : '24px' , lg :' 20px', md : '20px'},
                      /* identical to box height */

                      textTransform: "capitalize",

                      color: "#FFF2D0",
                      display : {md : 'block', xs : 'none'}
                    }}
                  >
                    Find Services
                  </Typography>
                  <Typography
                    sx={{
                      ml: {lg : '52px', md : '45px'},
                      mr: {lg : '26px' , md : '20px'},
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: {xl : '16px', lg : '14px', md : '14px'},
                      lineHeight: {xl : '24px' , lg :' 20px' , md : '20px'},
                      /* identical to box height */

                      textTransform: "capitalize",

                      color: "#FFF2D0",
                      display : {md : 'block', xs : 'none'}
                    }}
                  >
                    About Nynx
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: {xl : '16px', lg : '14px', md : '14px'},
                      lineHeight: {xl : '24px' , lg :' 20px' , md : '20px'},
                      /* identical to box height */

                      textTransform: "capitalize",

                      color: "#FFF2D0",
                      display : {md : 'block', xs : 'none'}
                    }}
                  >
                    How It Works
                  </Typography>
                  <KeyboardArrowDownIcon
                    sx={{
                      width: "16.37px",
                      height: "15.19px",
                      display : {md : 'block', xs : 'none'}
                    }}
                  ></KeyboardArrowDownIcon>
                  <Button
                    sx={{
                      ml: {sm : '20px' , md : '26px'},
                      mr: {sm : '20px' , md : '26px'},
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: {xl : '16px', lg : '14px', md : '14px' , sm : '14px', xs : '12px'},
                      lineHeight: {xl : '24px' , lg :' 20px' , md : '20px' , sm : '20px'},
                      /* identical to box height */

                      textTransform: "capitalize",

                      color: "#FFF2D0",
                    }}
                  >
                    Login
                  </Button>

                  <Box>
                    <Button>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: {xl : '16px', sm : '14px' , xs : '12px'},
                      lineHeight: {xl : '24px' , sm : '20px'},
                          /* identical to box height */
                          background: "#FFF2D0",
                          textTransform: "capitalize",
                          padding: {xl : "8px 28px 8px 29px" , lg : '6px 24px 6px 25px' ,  md : '6px 24px 6px 25px', sm : '5px 20px 5px 20px', xs :'5px 16px 5px 16px' },
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
      </Container>
    </Fragment>
  );
};

export default Navbar;
