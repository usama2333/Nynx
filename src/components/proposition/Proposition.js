import { Box, Container, Stack, Typography } from '@mui/material'
import React,{Fragment} from 'react';
import galaxy from '../../assests/images/galaxy.png';

const Proposition = () => {
  return (
    <Fragment>

    <Container maxWidth='xl' sx={{
          background: "#E5E5E5",
          pt : '40px'
        }}>

        <Box sx={{
          background: '#422438',
          borderRadius: '10px',
          // height : '445px',
          ml : {xs : '0px' , md :'40px'},
          mr : {xs : '0px' , md :'40px'},
          
        }}>

        <Stack direction={{sm : 'column' , md : 'row'}} alignItems='center'>

          <Box sx={{
            flex : '0 0 50%'
          }}>

          <Box sx={{
            mt : {xs:'40px',sm : '90px' , md :'0px'},
            ml :'43px',
            mr :'43px',
           

          }}>

         
             <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: { xs: "30px", md: "35px", lg: "45px", xl: "45px" },
              lineHeight: "100%",
              color: "#FFF2D0",
              mb : '30px'
            }}
          >
              Value Proposition
              </Typography>


              <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: {xs : '15px',sm : '16px',md : '17px', lg : '18px'},
              lineHeight: "150%",
              color: "#FFF2D0",
            }}
          >
              At NYNX, we believe freelance industry needs a space where people can work together effectively on fixed projects and monthly bases. By following Simon Senik’s The Golden Circle, we have created an online workspace that allows experts from all over the world to meet with clients, collaborate with other experts, and increase their income by working in teams.

              </Typography>
            </Box>
          </Box>

          <Box sx={{
            flex : '0 0 50%'
          }}>

           <Box sx={{mt : '40px', mb : '40px'}}>
           <Box component='img' src={galaxy} sx={{
            height :{lg : 'auto' , md : '300px', sm : '300px' , xs : '230px'},
            width : {lg : 'auto' , md : '470px',sm : '470px' , xs : '350px'}
             }}></Box>
           </Box>

          </Box>


        </Stack>

        </Box>
    
    </Container>
      
    </Fragment>
  )
}

export default Proposition
