import React, { Fragment } from 'react';
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { data } from "./style";
import expert from '../../assests/images/expertPic.png';

const Freelancers = () => {
  return (
    <Fragment>

       <Container
        maxWidth="xl"
        sx={{
          background: "#E5E5E5",
          pt : '50px',
          pb :'50px'
        }}
      >
        <Stack
          direction={{sm : 'column' , md: 'row-reverse'}}
          sx={{
            ml: {xs : '0px' , sm : '20px' , md :'40px'},
            mr: {xs : '0px' , sm : '20px' , md :'40px'},
            // mb: "40px",
            background: "#FEA87E",
            borderRadius: "15px",
            // height: "650px",
          }}
        >
          <Box
            sx={{
              flex: "0  0 45.5%",
              mt: "50px",
              pl :'40px',
              pr : '40px',
              pb : '30px'
            //   ml: {xs :'20px' , sm : '30px' , md : '50px'}
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "21px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#FFF2D0",
              }}
            >
              FOR Experts
            </Typography>

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: {md :'45px' , sm :'35px', xs : '25px'},
                lineHeight: "100%",
                color: "#422438",
                mt: "15px",
              }}
            >
             Find More Work. Grow Skills with Team. Earn More
            </Typography>

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: {md : '30px' , sm : '25px', xs :'22px'},
                lineHeight: "45px",
                color: "#422438",
                mt: {md : '30px' , sm : '20px'},
              }}
            >
              Different Ways to Earn
            </Typography>

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: {sm : '16px' , xs : '14px'},
                lineHeight: "150%",
                color: "#422438",
                opacity: "0.8",
                mt: {sm :'8px' , xs :'4px'},
              }}
            >
             Offer your services on adhoc or monthly basis.
Monthly Skillsets will allow you to work for longer terms. 
            </Typography>

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: {md : '30px' , sm : '25px', xs :'22px'},
                lineHeight: "45px",
                color: "#422438",
                mt: {sm :'12px' , xs :'8px'},
              }}
            >
              Opportunity to Work in Team
            </Typography>

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: {sm : '16px' , xs : '14px'},
                lineHeight: "150%",
                color: "#422438",
                opacity: "0.8",
                mt: {sm :'8px' , xs :'4px'},
              }}
            >
              Workspaces will allow you to collaborate, share knowledge and develop ideas with
fellow experts.
            </Typography>

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: {md : '30px' , sm : '25px', xs :'22px'},
                lineHeight: "45px",
                color: "#422438",
                mt: {sm :'12px' , xs :'8px'},
              }}
            >
              Control the Way You Work
            </Typography>

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: {sm : '16px' , xs : '14px'},
                lineHeight: "150%",
                color: "#422438",
                opacity: "0.8",
                mt: {sm :'8px' , xs :'4px'},
              }}
            >
              Control your own pipeline and workload by accepting or rejecting project offers from clients before starting work.
            </Typography>

            <Box
              sx={{
                mt: "5px",
              }}
            >
              <Button>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#6A2837",
                    padding: {
                      xl: "19px 40px",
                      lg: "14px 24px",
                      md: "14px 24px",
                      sm :'12px 20px',
                      xs : '10px 16px'
                    },
                    // background: '#FEA87E',
                    borderRadius: "44px",
                    border: "1px solid black",
                  }}
                >
                  Become an Expert
                </Typography>
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              flex: "0  0 48%",
            //   mt: "50px",
            }}
          >

            <Box component='img' src={expert}  sx={{
                height :'auto' , width :'auto', display :{xs : 'none' , md : 'flex'
                }}}>

            </Box>

    



          </Box>
        </Stack>
      </Container>
    </Fragment>
  )
}

export default Freelancers
