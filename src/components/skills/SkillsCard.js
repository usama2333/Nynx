import { Box, Stack, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import { data, responsive } from './style'


const SkillsCard = (props) => {
  return (
    <Fragment>
    <Box sx={{ml : {xs : '30px' , sm : '20px' , md : '20px' } }}>


    <Box
                sx={{
                  width: "290px",
                  height: "390px",
                // width : '100%',
                  border: "1px solid rgba(66, 36, 56, 0.15)",
                  borderRadius: "10px",
                  background: "#FFFFFF",
                  mb: "40px",
                }}
              >
                <Box sx={{
                    borderRadius : '10px'
                }} component="img" src={props.img}></Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    mt: "16px",
                  }}
                >
                  <Box
                    component="img"
                    src={props.logo}
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
                      {props.name}
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
                      {props.sur}
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
                  {props.text1}
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
                  {props.text2}
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
                  {props.reviews}
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
                      {props.fixed}
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
                      {props.fixedPrice}
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
                      {props.monthly}
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
                      {props.monthlyPrice}
                    </Typography>
                  </Box>
                </Stack>
              </Box>




    </Box>
      
    </Fragment>
  )
}

export default SkillsCard
