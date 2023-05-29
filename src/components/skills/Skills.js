import { Box, Container, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { data, expertText, inspiredText, responsive } from "./style";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <Fragment>
      <Container
        maxWidth="xl" sx={{background: "#FFE3C5",}}
      >
        <Box
          sx={{
            pt: "70px",
            // ml: { xs: "20px", sm: "50px" },
            pb: "70px",
          }}
        >
          <Typography sx={inspiredText}>
            Get inspired with skillsets made by our
          </Typography>
          <Typography sx={expertText}>Experts</Typography>

          <Box
            sx={{
              mt: "40px",
              // ml: {  xs: "50px" , sm : '60px' },
            }}
          >
            <Carousel
              responsive={responsive}
              ssr={true}
              showDots={true}
              autoPlay={true}
              autoPlaySpeed={2000}
            >
              {data.map((data) => (
                <SkillsCard
                  name={data.name}
                  img={data.img}
                  logo={data.logo}
                  sur={data.sur}
                  text1={data.text1}
                  text2={data.text2}
                  reviews={data.reviews}
                  fixed={data.fixed}
                  fixedPrice={data.fixedPrice}
                  monthly={data.monthly}
                  monthlyPrice={data.monthlyPrice}
                />
              ))}
            </Carousel>
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Skills;
