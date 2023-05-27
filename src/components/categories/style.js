import img1 from "../../assests/images/img1.png";
import img2 from "../../assests/images/img2.png";
import img3 from "../../assests/images/img3.png";
import img4 from "../../assests/images/img4.png";
import img5 from "../../assests/images/img5.png";

export const data = [
    {
      img: img1,
      name: "Art & Design",
    },
    {
      img: img2,
      name: "Marketing",
    },
    {
      img: img3,
      name: "Creative Writing",
    },
    {
      img: img4,
      name: "Video Production",
    },
    {
      img: img1,
      name: "Art & Design",
    },
    {
      img: img2,
      name: "Marketing",
    },
    {
      img: img3,
      name: "Creative Writing",
    },
    {
      img: img4,
      name: "Video Production",
    },
  ];
  
  export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1280 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1280, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };