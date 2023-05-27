import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import img4 from "../../assests/images/img4.png";
import img5 from "../../assests/images/img5.png";
import vectorArrow from "../../assests/images/vectorArrow.png";
import { arrowBox, imgBox, mainBox, textMainDiv, textName } from "./style";
const Caro = (props) => {
  return (
    <Fragment>
    <Box sx={{ml : '40px'}}>
      <Box sx={mainBox}>
        <Box component="img" src={props.img} sx={imgBox}></Box>
        <Box sx={textMainDiv}>
          <Typography sx={textName}>{props.name}</Typography>
          <Box component="img" src={vectorArrow} sx={arrowBox}></Box>
        </Box>
      </Box>
      </Box>
    </Fragment>
  );
};

export default Caro;
