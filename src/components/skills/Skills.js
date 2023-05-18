import { Box, Container, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import card1 from "../../assests/images/card1.png";
import card2 from "../../assests/images/card2.png";
import card3 from "../../assests/images/card3.png";
import card4 from "../../assests/images/card4.png";
import profile1 from "../../assests/images/profile1.png";
import profile2 from "../../assests/images/profile2.png";
import profile3 from "../../assests/images/profile3.png";
import profile4 from "../../assests/images/profile4.png";
import profile5 from "../../assests/images/profile5.png";

const data = [
  {
    img: card1,
    logo: profile5,
    name: "Sarah",
    sur: "Acheiver",
    text1: "I will design your logo and ",
    text2: "brand guideline",
    reviews: "5.0 (498 Reviews)",
    fixed: "Fixed from",
    fixedPrice: "£50",
    monthly: "Monthly from",
    monthlyPrice: "£500",
  },

  {
    img: card2,
    logo: profile4,
    name: "Mark P",
    sur: "Novice",
    text1: "I will design presentation and  ",
    text2: "business card design",
    reviews: "5.0 (156 Reviews)",
    fixed: "Fixed from",
    fixedPrice: "£50",
    monthly: "Monthly from",
    monthlyPrice: "£500",
  },
  {
    img: card3,
    logo: profile2,
    name: "Robert H",
    sur: "",
    text1: "I will develop your website and   ",
    text2: "ecommerce store",
    reviews: "5.0 (960 Reviews)",
    fixed: "Fixed from",
    fixedPrice: "£50",
    monthly: "Monthly from",
    monthlyPrice: "£500",
  },

  {
    img: card4,
    logo: profile1,
    name: "Sarah L",
    sur: "Top Rated",
    text1: "I will handle your social media   ",
    text2: " marketing",
    reviews: "5.0 (96 Reviews)",
    fixed: "Fixed from",
    fixedPrice: "£50",
    monthly: "Monthly from",
    monthlyPrice: "£500",
  },
];

const Skills = () => {
  return (
    <Fragment>
      <Container
        maxWidth="xl"
        sx={{
          background: "#FFE3C5",
          //  height : '699px',
        }}
      >
        <Box
          sx={{
            pt: "70px",
            ml: { xs: "20px", sm: "50px" },
            pb: "70px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: { xs: "30px", md: "35px", lg: "45px", xl: "45px" },
              lineHeight: "100%",
              color: "#422438",
            }}
          >
            Get inspired with skillsets made by our
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: { xs: "30px", md: "35px", lg: "45px", xl: "45px" },
              lineHeight: "100%",
              color: "#422438",
            }}
          >
            Experts
          </Typography>

          <Stack
            direction="row"
            flexWrap="wrap"
            spacing={2}
            sx={{ mt: "40px" }}
          >
            {data.map((data) => (
              <Box
                sx={{
                  width: "290px",
                  height: "390px",
                  border: "1px solid rgba(66, 36, 56, 0.15)",
                  borderRadius: "10px",
                  background: "#FFFFFF",
                  mb: "40px",
                }}
              >
                <Box component="img" src={data.img}></Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    mt: "16px",
                  }}
                >
                  <Box
                    component="img"
                    src={data.logo}
                    sx={{
                      height: "36px",
                      width: "36px",
                      ml: "20px",
                      mr: "3px",
                    }}
                  ></Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "136%",
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
                        fontSize: "14px",
                        lineHeight: "130%",
                        color: "#422438",
                        opacity: 0.5,
                      }}
                    >
                      {data.sur}
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "130%",
                    color: "#422438",
                    ml: "20px",
                    mt: "10px",
                  }}
                >
                  {data.text1}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "130%",
                    color: "#422438",
                    ml: "20px",
                  }}
                >
                  {data.text2}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "130%",
                    color: "#422438",
                    ml: "20px",
                    opacity: 0.5,
                    mt: "6px",
                    mb: "12px",
                  }}
                >
                  {data.reviews}
                </Typography>

                <Box
                  sx={{
                    border: "1px solid #E3D6D1",
                    width: "100%",
                  }}
                ></Box>

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    mt: "20px",
                    pl: "10px",
                    pr: "10px",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "122%",
                        color: "#000000",
                        opacity: 0.8,
                      }}
                    >
                      {data.fixed}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "122%",
                        color: "#000000",
                        opacity: 0.8,
                      }}
                    >
                      {data.fixedPrice}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "122%",
                        color: "#000000",
                        opacity: 0.8,
                      }}
                    >
                      {data.monthly}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "122%",
                        color: "#000000",
                        opacity: 0.8,
                      }}
                    >
                      {data.monthlyPrice}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Skills;
