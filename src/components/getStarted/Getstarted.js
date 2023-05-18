import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React,{Fragment} from 'react';
import manSmile from '../../assests/images/manSmile.png'

const Getstarted = () => {
  return (
    <Fragment>
     <Container maxWidth='xl' sx={{background : '#422438'}}>

     <Stack direction={{xs : 'column' , sm : 'row'}} alignItems='center' justifyContent='center'>
        <Box sx={{
            flex : '0 0 60%'
        }}>
            <Typography sx={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: { xs: "30px", md: "35px", lg: "45px", xl: "45px" },
                lineHeight: "100%",
                color: '#FFF2D0',
                mt : {xs : '20px' , sm : '10px' , md : '0px'}, 
                ml : {xs : '10px', sm :'20px' , md : '40px'}
            }}>
            Work with the Best Experts to Increase Business Impact Today
            </Typography>

            <Button>
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
                          padding : {xl : '19px 40px', lg : '16px 38px', md : '16px 36px' , sm : '14px 34px', xs : '12px 28px'},
                          boxSizing : 'border-box',
                        //   padding: {xl : "8px 28px 8px 29px" , lg : '6px 24px 6px 25px' ,  md : '6px 24px 6px 25px', sm : '5px 20px 5px 20px', xs :'5px 16px 5px 16px' },
                          color: "#422438",
                          borderRadius: "44px",
                          ml : {xs : '10px', sm :'20px' , md : '40px'},
                          mt : {xs : '20px' , sm : '45px'}
                        }}
                      >
                        Get Started
                      </Typography>
                    </Button>

           
        </Box>

        <Box sx={{
            flex : '0 0 40%'
        }}>
                <Box component='img' src={manSmile} sx={{
                    height :{xl : '355px' , lg : '340px', md : '300px', xs : '250px'},
                    width : {xl :'455px' , lg : '440px', md : '400px', xs : '250px'}
                }}>

                </Box>
        </Box>
     </Stack>

     </Container>
      
    </Fragment>
  )
}

export default Getstarted
