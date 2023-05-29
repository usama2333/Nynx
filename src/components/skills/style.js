
import card1 from "../../assests/images/card1.png";
import card2 from "../../assests/images/card2.png";
import card3 from "../../assests/images/card3.png";
import card4 from "../../assests/images/card4.png";
import profile1 from "../../assests/images/profile1.png";
import profile2 from "../../assests/images/profile2.png";
import profile3 from "../../assests/images/profile3.png";
import profile4 from "../../assests/images/profile4.png";
import profile5 from "../../assests/images/profile5.png";

export const data = [
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


  export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1280 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1280, min: 900 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 900, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  export const inspiredText = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: { xs: "30px", md: "35px", lg: "45px", xl: "45px" },
    lineHeight: "100%",
    color: "#422438",
    ml: { xs: "20px", sm: "30px" },
  }

  export const expertText = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: { xs: "30px", md: "35px", lg: "45px", xl: "45px" },
    lineHeight: "100%",
    color: "#422438",
    ml: { xs: "20px", sm: "30px" },
  }
  

  export const imgBox = {
    width: "290px",
    height: "390px",
  // width : '100%',
    border: "1px solid rgba(66, 36, 56, 0.15)",
    borderRadius: "10px",
    background: "#FFFFFF",
    mb: "40px",
  }

  export const logoSx = {
    height: "36px",
    width: "36px",
    ml: "20px",
    mr: "3px",
  }

  export const nameSx = {
    fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "136%",
                        color: "#422438",
  }

  export const surSx = {
    
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "130%",
    color: "#422438",
    opacity: 0.5,
  }

  export const textSx = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "130%",
    color: "#422438",
    ml: "20px",
    mt: "10px",
  }

  export const text2Sx = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "130%",
    color: "#422438",
    ml: "20px",
  }

  export const reviewsSx = {
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
  }

  export const fixedSx = {
    fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "122%",
                        color: "#000000",
                        opacity: 0.8,
  }

  export const fixedPriceSx = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "122%",
    color: "#000000",
    opacity: 0.8,
  }

  export const monthlySx = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "122%",
    color: "#000000",
    opacity: 0.8,
  }

  export const monthlyPriceSx = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "122%",
    color: "#000000",
    opacity: 0.8,
  }
  