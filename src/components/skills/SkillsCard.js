import { Box, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import {data,fixedPriceSx,
  fixedSx,imgBox,logoSx,monthlyPriceSx,monthlySx, nameSx, responsive,reviewsSx,surSx,
  text2Sx,textSx,} from "./style";

const SkillsCard = (props) => {
  return (
    <Fragment>
      <Box sx={{ ml: { xs: "30px", sm: "20px", md: "20px" } }}>
        <Box sx={imgBox}>
          <Box
            sx={{
              borderRadius: "10px",
            }}
            component="img"
            src={props.img}
          ></Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              mt: "16px",
            }}
          >
            <Box component="img" src={props.logo} sx={logoSx}></Box>
            <Box>
              <Typography sx={nameSx}>{props.name}</Typography>

              <Typography sx={surSx}>{props.sur}</Typography>
            </Box>
          </Box>

          <Typography sx={textSx}>{props.text1}</Typography>
          <Typography sx={text2Sx}>{props.text2}</Typography>
          <Typography sx={reviewsSx}>{props.reviews}</Typography>

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
              <Typography sx={fixedSx}>{props.fixed}</Typography>
              <Typography sx={fixedPriceSx}>{props.fixedPrice}</Typography>
            </Box>

            <Box>
              <Typography sx={monthlySx}>{props.monthly}</Typography>
              <Typography sx={monthlyPriceSx}>{props.monthlyPrice}</Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Fragment>
  );
};

export default SkillsCard;
