import React from 'react'
import { FooterContainer,FooterWrap,FooterIcon, FooterLinkTitle, FooterLinkSubtitle, FooterLinksContainer,FooterLinkItems, FooterLink, FooterCopyRight } from './InfoElements'
import Icon4 from "../../images/github.png"
const Mainfooter = () => {
    return (
        <FooterContainer>
        <FooterWrap>
            <FooterLinkTitle to="/">
            YumTrip
            </FooterLinkTitle>
            <FooterLinkSubtitle>
            Get tools that grow your business
            </FooterLinkSubtitle>
            <FooterLinksContainer>
            <FooterLinkItems>
                <FooterLink to="/termsandconditions">Terms &#38; Conditions</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
                <FooterLink to="/howitworks">How it works</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
                <FooterLink to="/contactus">Conatct Us</FooterLink>
            </FooterLinkItems>
            </FooterLinksContainer>
            <FooterLinksContainer >
        <a href="https://github.com/divyanshsikarwar/YumTrip-FrontEnd"><FooterIcon src={Icon4} /></a>
        
          
        </FooterLinksContainer>
            <FooterCopyRight>
            {" "}
            &copy; YumTrip {new Date().getFullYear()}
            &nbsp;All rights reserved.
            </FooterCopyRight>
        </FooterWrap>
        </FooterContainer>
            
        
    )
}

export default Mainfooter
