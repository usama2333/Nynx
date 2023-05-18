import { StackedBarChartRounded } from "@mui/icons-material";
import { Box, Container, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import profile1 from "../../assests/images/profile1.png";
import profile3 from "../../assests/images/profile3.png";
import profile4 from "../../assests/images/profile4.png";
import n from "../../assests/images/n.png";
import y from "../../assests/images/y.png";
import x from "../../assests/images/x.png";
import nfirst from "../../assests/images/nfirst.png";
import dot from "../../assests/images/dot.png";
import nsecond from "../../assests/images/nsecond.png";
import lower from "../../assests/images/lower.png";
import fire from "../../assests/images/fire.png";
import star from "../../assests/images/star.png";
import lowerr from "../../assests/images/lowerr.png";
import upper from "../../assests/images/upper.png";
import MessageIcon from "@mui/icons-material/Message";
import wheel from "../../assests/images/wheel.png";
import rocket from "../../assests/images/rocket.png";
import colon from "../../assests/images/colon.png";
import rocketRound from "../../assests/images/rocketRound.png";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import StarIcon from "@mui/icons-material/Star";

const data = [
  {
    price: "$3,600",
    task: "Paid Tasks",
  },
  {
    price: "$18,700",
    task: "Pending Tasks",
  },
  {
    price: "$22,300",
    task: "Total Budget",
  },
];

const jobData = [
  {
    name: "Job Posting",
  },
  {
    name: "Freelancers",
  },
  {
    name: "Tasks",
  },
  {
    name: "Activity",
  },
];

const Team = () => {
  return (
    <Fragment>
      <Container
        maxWidth="xl"
        sx={{
          background: "#E5E5E5",
          pb :'100px'
        }}
      >
        <Stack
          direction="column"
          alignItems="center"
          sx={{
            pt: "150px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "45px",
              lineHeight: "100%",
              color: "#422438",
            }}
          >
            Build amazing
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "45px",
              lineHeight: "100%",
              color: "#422438",
            }}
          >
            Teams on Demand
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "150%",
              color: "#422438",
              opacity: 0.8,
              mt: "10px",
              mb: "30px",
            }}
          >
            Find, Hire and Manage Top Talent in One Place
          </Typography>
        </Stack>

        <Stack
          direction="row"
          spacing={3}
          flexWrap="wrap"
          justifyContent="center"
        >
          {/* First card */}
          <Box
            sx={{
              height: "605px",
              width: "385px",
              background: "#FFE3C5",
              borderRadius: "15px",
              mb: "15px",
            }}
          >
            <Box
              sx={{
                mt: "50px",
                ml: { xs: "0px", md: "40px" },
                mb: "40px",
              }}
            >
              <Box
                sx={{
                  background: "#371E2F",
                  borderTopLeftRadius: "10.8564px",
                }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    ml: "14px",
                    pt: "9px",
                    pb: "9px",
                  }}
                >
                  {Array.from({ length: 3 }, (_, index) => (
                    <Box
                      sx={{
                        height: "8px",
                        width: "8px",
                        background: "#FFFFFF",
                        borderRadius: "100px",
                        opacity: 0.3,
                      }}
                    ></Box>
                  ))}
                </Stack>
              </Box>

              <Stack direction="row">
                <Box
                  sx={{
                    flex: "0 0 20%",
                    background: "#422438",
                    opacity: 0.8,
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        position: "relative",
                        ml: "10px",
                        mt: "13px",
                      }}
                    >
                      <Box
                        component="img"
                        src={n}
                        sx={{
                          position: "relative",
                          top: { xl: "4px", sm: "0px" },
                          width: "11px",
                          height: "13px",
                        }}
                      ></Box>

                      <Box
                        component="img"
                        src={y}
                        sx={{
                          position: "absolute",
                          top: "7.5px",
                          left: "12px",
                          width: "11px",
                          height: "13px",
                        }}
                      ></Box>

                      <Box
                        component="img"
                        src={nfirst}
                        sx={{
                          position: "absolute",
                          left: "22.5px",
                          top: "10px",
                          height: "6.5px",
                          width: "3.5px",
                        }}
                      ></Box>

                      <Box
                        component="img"
                        src={dot}
                        sx={{
                          position: "absolute",
                          width: "3px",
                          height: "3px",
                          left: "24px",
                          top: "7px",
                        }}
                      ></Box>

                      <Box
                        component="img"
                        src={nsecond}
                        sx={{
                          position: "absolute",
                          left: "27px",
                          top: "7px",
                          width: "5.38px",
                          height: "9.6px",
                        }}
                      ></Box>

                      <Box
                        component="img"
                        src={x}
                        sx={{
                          position: "absolute",
                          left: "33.5px",
                          top: "7.5px",
                          width: "11px",
                          height: "9px",
                        }}
                      ></Box>
                    </Box>
                  </Box>

                  <Box sx={{ mt: "50px" }}>
                    <Stack direction="row" justifyContent="center">
                      <Box
                        sx={{
                          height: "4.6px",
                          width: "4.6px",
                          background: "#FFF2D0",
                          borderRadius: "1px",
                        }}
                      ></Box>

                      <Box
                        sx={{
                          height: "4.6px",
                          width: "4.6px",
                          background: "#FFF2D0",
                          borderRadius: "1px",
                          opacity: 0.25,
                          ml: "1px",
                        }}
                      ></Box>
                    </Stack>

                    <Stack
                      direction="row"
                      justifyContent="center"
                      sx={{ mt: "1px" }}
                    >
                      <Box
                        sx={{
                          height: "4.6px",
                          width: "4.6px",
                          background: "#FFF2D0",
                          borderRadius: "1px",
                          opacity: 0.25,
                        }}
                      ></Box>

                      <Box
                        sx={{
                          height: "4.6px",
                          width: "4.6px",
                          background: "#FFF2D0",
                          borderRadius: "1px",
                          opacity: 0.25,
                          ml: "1px",
                        }}
                      ></Box>
                    </Stack>
                  </Box>

                  <Box sx={{ position: "relative" }}>
                    <Box
                      component="img"
                      src={upper}
                      sx={{
                        width: "8.6px",
                        height: "8.4px",
                        position: "absolute",
                        left: "29px",
                        top: "10px",
                      }}
                    ></Box>
                    <Box>
                      <MessageIcon
                        sx={{
                          width: "8.14px",
                          height: "5.83px",
                          position: "absolute",
                          left: "26.5px",
                          top: "13.5px",
                        }}
                      ></MessageIcon>
                    </Box>
                  </Box>

                  <Box>
                    <Box
                      sx={{ position: "relative", left: "28px", top: "43px" }}
                    >
                      <RocketLaunchIcon
                        sx={{ height: "10px", width: "10px" }}
                      ></RocketLaunchIcon>
                    </Box>
                    <Box
                      component="img"
                      sx={{
                        width: "28px",
                        height: "28px",
                        background: "#FFF2D0",
                        borderRadius: "100px",
                        mt: "20px",
                        ml: "19px",
                      }}
                    ></Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mt: "10px",
                    }}
                  >
                    <Box
                      component="img"
                      src={wheel}
                      sx={{ height: "10px", width: "10px" }}
                    ></Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    flex: "0 0 80%",
                    background: "#FFF2D0",
                    bordeRadius: "0px 0px 10.8566px 0px",
                    pt: "14px",
                    // pl : '24px'
                    height: "271px",
                  }}
                >
                  <Box
                    sx={{
                      ml: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: 600,
                          fontSize: "15px",
                          lineHeight: "136%",
                          color: "#422438",
                        }}
                      >
                        Designing the website
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Roboto",
                          fontStyle: "normal",
                          fontWeight: 500,
                          fontSize: "5px",
                          lineHeight: "7px",
                          color: "rgba(66, 36, 56, 0.5)",
                        }}
                      >
                        Feb 6 , 2022
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "6.5px",
                        lineHeight: "150%",
                        color: "#422438",
                        opacity: 0.5,
                        mt: "0.55px",
                      }}
                    >
                      Active since Aug 4, 2021
                    </Typography>

                    <Stack direction="row">
                      {data.map((data) => (
                        <Box
                          sx={{
                            mt: "11px",
                            mr: "6px",
                            border: "0.483111px solid #E3D6D1",
                            borderRadius: "2.89867px",
                            padding: "4px 23px 5px 4px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Roboto",
                              fontStyle: "normal",
                              fontWeight: 700,
                              fontSize: "6.7px",
                              lineHeight: "8px",
                              color: "#422438",
                            }}
                          >
                            {data.price}
                          </Typography>

                          <Typography
                            sx={{
                              fontFamily: "Roboto",
                              fontStyle: "normal",
                              fontWeight: 500,
                              fontSize: "6.2px",
                              lineHeight: "7px",
                              color: "rgba(66, 36, 56, 0.5)",
                              mt: "1px",
                            }}
                          >
                            {data.task}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>

                    <Stack direction="row">
                      {jobData.map((data) => (
                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: 600,
                            fontSize: "9.7px",
                            lineHeight: "136%",
                            color: "#422438",
                            mt: "12px",
                            mr: "11.9px",
                          }}
                        >
                          {data.name}
                        </Typography>
                      ))}
                    </Stack>

                    <Stack direction="row" sx={{ mt: "14px" }}>
                      <Box
                        component="img"
                        src={profile1}
                        sx={{
                          width: "20px",
                          height: "21px",
                        }}
                      ></Box>

                      <Box sx={{ ml: "8px", mt: "5px" }}>
                        <Box
                          sx={{
                            width: "35px",
                            height: "5px",
                            background: "#422438",
                            opacity: 0.2,
                          }}
                        ></Box>

                        <Box
                          sx={{
                            width: "228px",
                            height: "7px",
                            background: "#422438",
                            opacity: 0.2,
                            mt: "3.2px",
                          }}
                        ></Box>

                        <Box
                          sx={{
                            width: "202px",
                            height: "7px",
                            background: "#422438",
                            opacity: 0.2,
                            mt: "3.2px",
                          }}
                        ></Box>
                      </Box>
                    </Stack>

                    <Stack direction="row" sx={{ mt: "14px" }}>
                      <Box
                        component="img"
                        src={profile3}
                        sx={{
                          width: "20px",
                          height: "21px",
                        }}
                      ></Box>
                      <Box sx={{ ml: "8px", mt: "5px" }}>
                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: 600,
                            fontSize: "5.4px",
                            lineHeight: "136%",
                            color: "#422438",
                          }}
                        >
                          Faisal S
                        </Typography>

                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: 400,
                            fontSize: "5.4px",
                            lineHeight: "168%",
                            color: "#422438",
                            mb: "15px",
                          }}
                        >
                          Thanks for this information. I think we definitely had
                          a difference of perspective from the conversation. I
                          apologize for my part in that.
                        </Typography>

                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: 400,
                            fontSize: "5.4px",
                            lineHeight: "168%",
                            color: "#422438",
                          }}
                        >
                          I was asking for the mobile-responsive design without
                          a wireframe. It would not be ideal for us to pay an
                          extra $30 for the project, as we have already set our
                          budget based on our understanding of the project.
                        </Typography>
                      </Box>
                    </Stack>

                    <Stack direction="row" sx={{ mt: "14px" }}>
                      <Box
                        component="img"
                        src={profile4}
                        sx={{
                          width: "20px",
                          height: "21px",
                        }}
                      ></Box>

                      <Box sx={{ ml: "8px", mt: "5px" }}>
                        <Box
                          sx={{
                            width: "35px",
                            height: "5px",
                            background: "#422438",
                            opacity: 0.2,
                          }}
                        ></Box>

                        <Box
                          sx={{
                            width: "225px",
                            height: "7px",
                            background: "#422438",
                            opacity: 0.2,
                            mt: "3.2px",
                          }}
                        ></Box>

                        <Box
                          sx={{
                            width: "228px",
                            height: "7px",
                            background: "#422438",
                            opacity: 0.2,
                            mt: "3.2px",
                          }}
                        ></Box>
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              </Stack>

              <Typography
                sx={{
                  mt: "40px",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "30px",
                  lineHeight: "131%",
                  color: "#422438",
                }}
              >
                Create your
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "30px",
                  lineHeight: "131%",
                  color: "#422438",
                }}
              >
                Work Space
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "16pxpx",
                  lineHeight: "150%",
                  color: "#422438",
                  opacity: 0.8,
                  mt: "12px",
                }}
              >
                Create your virtual room to kick start your project. Post a job.
                Hire more than one expert in same workplace.
              </Typography>
            </Box>
          </Box>

          {/* // New component */}

          <Box
            sx={{
              height: "605px",
              width: "385px",
              background: "#FFE3C5",
              borderRadius: "15px",
              mb: "15px",
            }}
          >
            <Box
              sx={{
                mt: "50px",
                ml: { xs: "0px", md: "40px" },
                mb: "40px",
              }}
            >
              <Box
                sx={{
                  background: "#371E2F",
                  borderTopLeftRadius: "10.8564px",
                }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    ml: "14px",
                    pt: "9px",
                    pb: "30px",
                  }}
                >
                  {Array.from({ length: 3 }, (_, index) => (
                    <Box
                      sx={{
                        height: "8px",
                        width: "8px",
                        background: "#FFFFFF",
                        borderRadius: "100px",
                        opacity: 0.3,
                      }}
                    ></Box>
                  ))}
                </Stack>

                <Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{
                      borderRadius: "10px",
                      background: "#91838d",
                      opacity: "0.8",
                      ml: "13px",
                      height: "70px",
                    }}
                  >
                    <Box
                      component="img"
                      src={profile1}
                      sx={{
                        width: "42px",
                        height: "45px",
                        ml: "15px",
                        mr: "15px",
                      }}
                    ></Box>

                    <Stack>
                      <Box
                        sx={{
                          width: "68px",
                          height: "18px",
                          background: "#cfb8c8",
                        }}
                      ></Box>

                      <Box
                        sx={{
                          width: "68px",
                          height: "11px",
                          background: "#cfb8c8",
                          mt: "8px",
                        }}
                      ></Box>
                    </Stack>

                    <Box
                      sx={{
                        ml: "25px",
                        mr: "25px",
                        width: "53px",
                        height: "18px",
                        background: "#cfb8c8",
                        mt: "8px",
                      }}
                    ></Box>

                    <Box
                      sx={{
                        width: "83px",
                        height: "18px",
                        background: "#cfb8c8",
                        mt: "8px",
                      }}
                    ></Box>
                  </Stack>

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
                    <Box
                      component="img"
                      src={profile3}
                      sx={{
                        height: "45px",
                        width: "45px",
                      }}
                    ></Box>

                    <Stack>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: 600,
                          fontSize: "16px",
                          lineHeight: "136.5%",
                          color: "#422438",
                        }}
                      >
                        Faisal S
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: "8px",
                          lineHeight: "150%",
                          color: "#422438",
                        }}
                      >
                        Ui Ux Designer
                      </Typography>
                    </Stack>

                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "13px",
                        lineHeight: "136.5%",
                        color: "#422438",
                      }}
                    >
                      Monthly
                    </Typography>

                    <Stack direction="row">
                      <Box>
                        {Array.from({ length: 5 }, (_, index) => (
                          <StarIcon
                            sx={{
                              color: "gold",
                              width: "14px",
                              height: "14px",
                            }}
                          ></StarIcon>
                        ))}
                      </Box>
                    </Stack>
                  </Stack>

                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{
                      mb: "15px",
                      mt: "11px",
                      borderRadius: "10px",
                      background: "#91838d",
                      opacity: "0.8",
                      ml: "13px",
                      height: "70px",
                    }}
                  >
                    <Box
                      component="img"
                      src={profile4}
                      sx={{
                        width: "42px",
                        height: "45px",
                        ml: "15px",
                        mr: "15px",
                      }}
                    ></Box>

                    <Stack>
                      <Box
                        sx={{
                          width: "68px",
                          height: "18px",
                          background: "#cfb8c8",
                        }}
                      ></Box>

                      <Box
                        sx={{
                          width: "68px",
                          height: "11px",
                          background: "#cfb8c8",
                          mt: "8px",
                        }}
                      ></Box>
                    </Stack>

                    <Box
                      sx={{
                        ml: "25px",
                        mr: "25px",
                        width: "53px",
                        height: "18px",
                        background: "#cfb8c8",
                        mt: "8px",
                      }}
                    ></Box>

                    <Box
                      sx={{
                        width: "83px",
                        height: "18px",
                        background: "#cfb8c8",
                        mt: "8px",
                      }}
                    ></Box>
                  </Stack>
                </Stack>
              </Box>

              <Typography
                sx={{
                  mt: "40px",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "30px",
                  lineHeight: "131%",
                  color: "#422438",
                }}
              >
                Build your Team
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "30px",
                  lineHeight: "131%",
                  color: "#422438",
                }}
              >
                & Assign Tasks
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "150%",
                  color: "#422438",
                  opacity: 0.8,
                  mt: "12px",
                }}
              >
                In workspace you can assign tasks to build a team and add
                descriptions, attachments and other details that will help you
                get the best results.
              </Typography>
            </Box>
          </Box>

          {/* End of second card */}

          {/* Third Card data */}

          <Box
            sx={{
              height: "605px",
              width: "385px",
              background: "#FFE3C5",
              borderRadius: "15px",
              mt: "15px",
            }}
          >
            <Box
              sx={{
                mt: "50px",
                ml: { xs: "0px", md: "40px" },
                mb: "40px",
              }}
            >
              <Box
                sx={{
                  background: "#371E2F",
                  borderTopLeftRadius: "10.8564px",
                }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    ml: "14px",
                    pt: "9px",
                    pb: "30px",
                  }}
                >
                  {Array.from({ length: 3 }, (_, index) => (
                    <Box
                      sx={{
                        height: "8px",
                        width: "8px",
                        background: "#FFFFFF",
                        borderRadius: "100px",
                        opacity: 0.3,
                      }}
                    ></Box>
                  ))}
                </Stack>

                <Stack>
                  <Stack
                    direction="column"
                    sx={{
                      borderRadius: "10px",
                      background: "#91838d",
                      opacity: "0.8",
                      ml: "13px",
                      height: "123px",
                    }}
                  >
                    <Stack
                      direction="row"
                      sx={{
                        mt: "17px",
                        ml: "17px",
                      }}
                    >
                      <Box
                        component="img"
                        src={fire}
                        sx={{
                          width: "61px",
                          height: "34px",
                          mr: "15px",
                        }}
                      ></Box>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: 600,
                          fontSize: "12px",
                          lineHeight: "130%",
                          color: "#FFFFFF",
                        }}
                      >
                        You will get your logo and brand guideline
                      </Typography>
                    </Stack>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        ml: "18px",
                        mt: "40px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: 600,
                          fontSize: "10px",
                          lineHeight: "136%",
                          color: "#FFFFFF",
                          mr: "13px",
                        }}
                      >
                        Requirements
                      </Typography>

                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: 600,
                          fontSize: "10px",
                          lineHeight: "136%",
                          color: "#FFFFFF",
                          mr: "13px",
                        }}
                      >
                        Details
                      </Typography>

                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: 600,
                          fontSize: "10px",
                          lineHeight: "136%",
                          color: "#FFFFFF",
                        }}
                      >
                        Delivery & Feedback
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack
                    direction="row"
                    sx={{
                      borderRadius: "10px 0px 0px 10px",
                      height: "75px",
                      mt: "10px",
                      ml: "18px",
                    }}
                  >
                    <Stack direction="row" sx={{ mt: "20px" }}>
                      <Box>
                        {Array.from({ length: 5 }, (_, index) => (
                          <Box component="img" src={star}></Box>
                        ))}
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: "Roboto",
                          fontStyle: "normal",
                          fontWeight: 500,
                          fontSize: "31.6px",
                          lineHeight: "37px",
                          color: "#FFFFFF",
                          ml: "11px",
                        }}
                      >
                        5.0
                      </Typography>
                    </Stack>
                  </Stack>

                  <Box
                    sx={{
                      width: "325px",
                      height: "18px",
                      background: "#cfb8c8",
                      ml: "20px",
                      mb: "4px",
                    }}
                  ></Box>

                  <Box
                    sx={{
                      width: "173px",
                      height: "18px",
                      background: "#cfb8c8",
                      ml: "20px",
                      mb: "10px",
                    }}
                  ></Box>
                </Stack>
              </Box>

              <Typography
                sx={{
                  mt: "40px",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "30px",
                  lineHeight: "131%",
                  color: "#422438",
                }}
              >
                Manage Tasks and
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "30px",
                  lineHeight: "131%",
                  color: "#422438",
                }}
              >
                Get Results
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "150%",
                  color: "#422438",
                  opacity: 0.8,
                  mt: "12px",
                }}
              >
                Once you've found someone who fits your needs, manage your tasks
                and keep track of progress through our dashboard.
              </Typography>
            </Box>
          </Box>

          {/* End of third card data */}
        </Stack>




        <Box
          sx={{
            background: "#A23842",
            borderRadius: "15px",
            // width: "1119px",
            // height: "411px",
            display :'flex',
            flexDirection : 'column',
            alignItems : 'center',
            ml :{xs : '0px' , sm : '10px' , md :'50px'},
            mr : {xs : '0px' , sm : '10px' , md : '40px'},
            mt : '80px',
           
           
          }}
        >
          <Box component='img' src={colon} sx={{width :'50px' , height : '30px' , mt : {xs : '50px',sm : '60px' , md :'70px' , lg :'96px'} , mb : '24px'}}></Box>
          <Typography sx={{
             fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: {xl : '36px' , lg : '32px' , md : '30px', sm :'28px'},
                  lineHeight: "131%",
                  color: "#FFF2D0",
                  textAlign : 'center',
                  ml : {xl : '90px' , lg : '80px' , md: '70px',sm :'60px'},
                  mr : {xl : '90px' , lg : '80px' , md: '70px',sm :'60px'},
          }}>
          Give a man a fish, and you feed him for a day. Teach a man to fish, and you feed him for a lifetime
          </Typography>

          <Typography sx={{
              fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: {xs : '16px' , sm :'18px' , md : '20px'},
                  lineHeight: "131%",
                  color: "#FAC751",
                  mt : '24px',
                  mb : '4px'
          }}>
          Lao Tzu
          </Typography>

          <Typography sx={{
              fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: {xs :'12px',sm :'14px' },
                  lineHeight: "150%",
                  color: "#FFF2D0",
                  mb : {xs :'40px' , sm :'50px' , md :'70px' , lg : '80px'}
                 
          }}>
         Chinese Philosopher
          </Typography>

        </Box>
       
      </Container>
    </Fragment>
  );
};

export default Team;
