import { Button, Container, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import mainPic from '../../assests/images/mainPic.png';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius : '30px'
};

const Main = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpenn = () => setOpen(true);
  const handleClosee = () => setOpen(false);
  return (
    <Fragment>
      <Container maxWidth="xl" sx={{ background: "#422438" }}>
        <Stack
          direction={{md : 'row',sm : 'column' }}
          sx={{
            pt:{md : '200px' , sm : '150px', xs : '120px'},
          }}
        >
          <Box sx={{ flex: "0 0 50%" }}>
            <Box sx={{
                width : {xl : '600px' , lg : '490px' , md : '400px'},
                ml : '40px',
                }}>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: {xl : '48px' , lg : '46px', md : '38px', sm : '36px', xs : '30px'},
                  lineHeight: "100%",
                  /* or 48px */

                  color: "#FFF2D0",
                  mb : '20px'
                }}
              >
                Perfect Place to Hire Freelance Experts
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: {xl : '24px' , lg : '22px' , md : '18px',  sm : ' 18px', xs : '18px'},
                  lineHeight: "150%",
                  /* or 48px */

                  color: "#FFF2D0",
                  opacity : 0.8
                }}
              >
                Build your team. Collaborate on projects. Work at your own convenience
              </Typography>
            </Box>

            <Stack direction='row' sx={{mt : '40px' , ml :'40px'}}>
            <Box>
                    <Button onClick={handleOpenn}>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: {xl : '16px', sm : '14px' , xs : '12px'},
                          lineHeight: {xl : '24px' , sm : '20px'},
                          /* identical to box height */
                          background: "#FAC751",
                          textTransform: "capitalize",
                          padding : {xl : '19px 40px', lg : '16px 36px', md : '16px 36px' , sm : '14px 34px', xs : '12px 28px'},
                          boxSizing : 'border-box',
                        //   padding: {xl : "8px 28px 8px 29px" , lg : '6px 24px 6px 25px' ,  md : '6px 24px 6px 25px', sm : '5px 20px 5px 20px', xs :'5px 16px 5px 16px' },
                          color: "#422438",
                          borderRadius: "44px",
                        }}
                      >
                        Find Services
                      </Typography>
                    </Button>

                    
                </Box>

                <Box>
                    <Button onClick={handleOpenn}>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: {xl : '16px', sm : '14px' , xs : '12px'},
                      lineHeight: {xl : '24px' , sm : '20px'},
                          /* identical to box height */
                          textTransform: "capitalize",
                          padding : {xl : '19px 40px', lg : '16px 36px',md : '16px 36px', sm : '14px 34px', xs : '12px 28px'},
                          boxSizing : 'border-box',
                        //   padding: {xl : "8px 28px 8px 29px" , lg : '6px 24px 6px 25px' ,  md : '6px 24px 6px 25px', sm : '5px 20px 5px 20px', xs :'5px 16px 5px 16px' },
                        color: '#FAC751',
                          borderRadius: "44px",
                          border : '1px solid #FAC751;'
                        }}
                      >
                        Become an Expert
                      </Typography>
                    </Button>

                    
                </Box>
            </Stack>
          </Box>

          <Box sx={{ flex: "0 0 50%" }}>
            <Box
            component = 'img'
            src={mainPic}
            sx={{

                height : {xl : '550px' , lg : '500px', md : '480px', sm :'400px', xs : '350px'},
                display : 'flex',
                mt : {md : '-50px' , sm : '50px', xs : '30px' },
                ml : {xl : '50px',lg : '50px' , md : '-40px', sm : '40px' }
                // position : 'relative',
                // top : '-80px'

                }}

            >

            </Box>
          </Box>
        </Stack>
        <Box sx={{
          borderRadius : '100px'
        }}>
        <Modal
        open={open}
        onClose={handleClosee}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize:'26px',
                  lineHeight: "100%",
                  /* or 48px */

                  color: "red",
                  mb : '20px'
                }} id="modal-modal-title" variant="h6" component="h2">
          Welcome to NYNX! The new home for freelancers.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Our platform is currently under construction at the moment, but please subscribe to our waiting list at the bottom of this page to receive news of our upcoming launch, exciting features which we think you'll love, and discounts on our platform fees..
          </Typography>
          <Typography>
          Don't miss out on the NYNX revolution!
          </Typography>
        </Box>
      </Modal>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Main;
