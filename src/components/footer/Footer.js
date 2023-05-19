import { Box, Container, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { heading, text } from "./style";
import n from "../../assests/images/n.png";
import y from "../../assests/images/y.png";
import x from "../../assests/images/x.png";
import nfirst from "../../assests/images/nfirst.png";
import dot from "../../assests/images/dot.png";
import nsecond from "../../assests/images/nsecond.png";

const Footer = () => {
  return (
    <Fragment>
      <Container
        maxWidth="xl"
        sx={{
          background: "#011F42",
          pb :' 20px'
        //   height: "400px",
        }}
      >
        <Box
          sx={{
            ml: {xs :'20px' , sm : '50px'},
            pt: "70px",
            pr: {lg : '250px' , md : '100px' , sm : '50px' , xs : '20px'}
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            flexWrap="wrap"
            sx={{
              mb: "50px",
            }}
          >
            <Box sx={{mb : {xs : '50px' , lg : '0px'}}}>
              <Typography sx={heading}>For Clients</Typography>

              <Typography sx={text}>How it Works</Typography>

              <Typography sx={text}>Find Services</Typography>

              <Typography sx={text}>Dashboard</Typography>

              <Typography sx={text}>Post a Job</Typography>
            </Box>

            <Box>
              <Typography sx={heading}>For Freelancers</Typography>

              <Typography sx={text}>How to find work</Typography>

              <Typography sx={text}>Direct Contracts</Typography>

              <Typography sx={text}>Find Freelance Jobs</Typography>
            </Box>

            <Box>
              <Typography sx={heading}>Company</Typography>

              <Typography sx={text}>Why NYNX</Typography>

              <Typography sx={text}>Contact Us</Typography>
            </Box>

            <Box>
              <Typography sx={heading}>Follow us</Typography>

              <Typography sx={text}>Facebook</Typography>

              <Typography sx={text}>Twitter</Typography>

              <Typography sx={text}>Linkedin</Typography>
              <Typography sx={text}>Instagram</Typography>
              <Typography sx={text}>Medium</Typography>
            </Box>
          </Stack>
        </Box>

        <Box
          sx={{
            opacity: "0.3",
            border: "0.5px solid #B3DDF0",
            ml: {xs : '0px' , sm : '50px'},
            mr: {xs : '0px' , sm : '50px'},
          }}
        ></Box>

        <Stack
          direction="row" justifyContent='space-between' flexWrap='wrap'
          sx={{
            mt: "30px",
            pr : {xs : '0px' , md : '50px'}
          }}
        >
         <Box sx={{
            display : 'flex',
            flexDirection : 'row'
         }}>
          <Box
            sx={{
              position: "relative",
              ml: {xs :'0px' , sm : '50px'},
              display : {xs : 'none', sm : 'flex'}
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
                left : '20px',
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

          <Typography
            sx={{
              ml: {xs :'40px' , md : '90px'},
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "21px",
              color: "#B3DDF0",
            //   flexGrow : 1
            }}
          >
            © 2021 NYNX creatives ltd
          </Typography>
          </Box>
           

          <Box sx={{
            display : 'flex',
            flexDirection : 'row'
         }}>

           
          <Typography
            sx={{
             
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "21px",
              color: "#B3DDF0",
            }}
          >
            Privacy Policy
          </Typography>

          <Typography
            sx={{
             
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "21px",
              color: "#B3DDF0",
              ml : '30px'
            }}
          >
            Terms of Services
          </Typography>
        </Box>
          
        </Stack>
      </Container>
    </Fragment>
  );
};

export default Footer;
