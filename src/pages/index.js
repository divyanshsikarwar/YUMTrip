import { Button } from "@material-ui/core";
import React, { useState } from "react";
import {
  InfoSection,
  Services,
  Footer,
  Navbar,
  Sidebar,
  Banner,
} from "../components/InfoSection";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";



const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Banner />
      {/*
      <Button onClick={()=>{var redirectWindow = window.open('https://yumtrip.netlify.app/invoice/qwert:vpl-nau-dfl', '_blank');
    }}> Open Open </Button> */}
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      {/*<InfoSection {...homeObjFour}/>*/}
      <Footer />
    </>
  );
};

export default Home;
