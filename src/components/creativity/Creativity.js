import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import StarIcon from "@mui/icons-material/Star";
import { data } from "./style";




const Creativity = () => {
  return (
    <Fragment>
      <Container
        maxWidth="xl"
        sx={{
          background: "#E5E5E5",
        }}
      >
        <Stack
          direction={{sm : 'column' , md: 'row'}}
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
              flex: "0  0 45%",
              mt: "50px",
              ml: {xs :'20px' , sm : '30px' , md : '50px'}
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
              FOR CLIENTS
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
              Get Infinite Creativity at your Fingertips
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
              Expert Screening Process
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
              Our expert screening process is comprehensive and rigorous to
              match candidates with clients.
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
              Workspace for Collaboration
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
              Workplace that can enable clients to hire and manage multiple
              experts at the same time, making it easy for them to build teams
              that work together seamlessly.
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
              Hire At Your Own Convenience
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
              Whether you're looking for an expert for ad hoc assignment or a
              monthly contract, NYNX gives you the flexibility to hire at your
              own convenience.
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
                    mb : '20px'
                  }}
                >
                  Find Services
                </Typography>
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              flex: "0  0 50.9%",
              mt: "50px",
            }}
          >
            <Stack
              sx={{
                background: "#371E2F",
                borderRadius: "15px",
                height: "500px",
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  ml: "23px",
                  mt: "27px",
                }}
              >
                {Array.from({ length: 3 }, (_, index) => (
                  <Box
                    sx={{
                      height: "13px",
                      width: "13px",
                      background: "#FFFFFF",
                      borderRadius: "100px",
                      opacity: 0.5,
                    }}
                  ></Box>
                ))}
              </Stack>

              {data.map((data) => (
                <Stack
                  direction="row"
                  justifyContent="space-evenly"
                  alignItems="center"
                  sx={{
                    background: "#FFF2D0",
                    borderRadius: "10px 0px 0px 10px",
                    height: "75px",
                    mt: "10px",
                    ml: "18px",
                  }}
                >
                  <Box component="img" src={data.img} sx={{
                    height : {xl : 'auto' , lg : '55px', md : '50px'},
                    width : {xl : 'auto' , lg : '55px', md : '50px'}
                  }}></Box>

                  <Stack>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: {xl : '28px' , lg : '22px', md : '20px'},
                        lineHeight: "136.5%",
                        color: "#422438",
                      }}
                    >
                      {data.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "10px",
                        lineHeight: "150%",
                        color: "#422438",
                      }}
                    >
                      {data.post}
                    </Typography>
                  </Stack>

                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: {xl : '14px' , lg : '12px' , md : '12px'},
                      lineHeight: "136.5%",
                      color: "#422438",
                    }}
                  >
                    {data.job}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "14px",
                      lineHeight: "136.5%",
                      color: "#422438",
                    }}
                  >
                    {data.pay}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: "13px",
                      lineHeight: "20px",
                      color: "rgba(66, 36, 56, 0.5)",
                      display :{xs : 'none' , sm :'flex'}
                    }}
                  >
                    {data.date}
                  </Typography>

                  <Stack direction="row" display={{sm : 'flex' , xs :'none'}}>
                    <Box>
                      {Array.from({ length: 5 }, (_, index) => (
                        <StarIcon sx={{ color: "gold" }}></StarIcon>
                      ))}
                    </Box>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default Creativity;
