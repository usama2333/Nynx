import { Box, Container, Stack, Typography } from '@mui/material';
import React,{Fragment} from 'react';

const data = [
    {
        name : 'Sana Faizan',
        title : 'Content Writer',
        text : '“Amazing experience i love it a lot. Thanks to the team NYNX that dreams come true, great! I really appreciate.”'
    },
    {
        name : 'Lissan Haider',
        title : 'Website Developer',
        text : '“My relationship with NYNX keeps on growing. The projects get larger and more technical every month.”'
    },
    {
        name : 'Faisal Sohail',
        title : 'Presentation Designer',
        text : '“Couldn’t be more greatful than i already am. I was able to work for many cients on longer projects.”'
    },
]

const Toprated = () => {
  return (
    <Fragment>

    <Container maxWidth='xl' sx={{
          background: "#E5E5E5",
          pt : '70px',
          
        }}>


     <Box >
     <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: {xl : '45px' , lg : '40px' , md : '35px' , xs : '30px'},
              lineHeight: "100%",
              textAlign : 'center',
              color: "#422438",
              mb : '17px'
            }}
          >
         What they are saying
         </Typography>

         <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: {xl : '24px' , lg : '22px' , md : '20px' , xs : '18px'},
              lineHeight: "150%",
              color: "#422438",
              opacity : 0.8,
              textAlign : 'center',
              mb :'20px'
            }}
          >
         Review From Our Top Rated Freelancers
         </Typography>
     </Box>

     <Stack direction='row' flexWrap='wrap' justifyContent='space-evenly' alignItems='center'>

     {data.map((data) => (

    
        <Box sx={{
            width :'385px',
            height : {xl : '295px' , lg : '270px'},
            background: '#FAC751',
            borderRadius: '15px',
            padding :{xs : '15px' , sm : '30px' , md : '35px'},
            boxSizing : 'border-box',
            mb : '20px'
        }}>
          
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "131%",
              color: "#A23842",
              textAlign : 'center',
              
              mb : '3px'
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
              lineHeight: "150%",
              color: "#422438",
              textAlign : 'center',
              mb : '18px'
            }}
          >
            {data.title}
           </Typography>

           <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: {xl : '20px' , md : '18px' , xs : '16px'},
              lineHeight: "140%",
              color: "#422438",
              textAlign : 'center',
            }}
          >
          {data.text}
           </Typography>

        </Box>
        ))}
     </Stack>


    </Container>

      
    </Fragment>
  )
}

export default Toprated
