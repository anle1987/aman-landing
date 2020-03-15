/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import logoAman from "../images/logo-aman.svg"
import logoFooter from "../images/logo-footer.svg"
import iconFacebook from "../images/ic-facebook.svg"
import iconInstagram from "../images/ic-instagram.svg"
import iconLinkedin from "../images/ic-linkedin.svg"
import iconTwitter from "../images/ic-twitter.svg"
import "./layout.css"

const Header = styled.header`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
`

const HeaderButton = styled.button`
  text-align: center;
  line-height: 1.4;
  font-weight: bold;
  color: #ffffff;
  font-size: 16px;
  padding: 8px 20px;
  border-radius: 12px;
  background: #155a51;
  border: none;
  margin-left: auto;
`

const HeaderContainer = styled.div`
  max-width: 1152px;
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100px;
`

const HeaderLogo = styled(Link)`
  margin-right: 60px;
  img {
    margin-bottom: 0;
  }
`

const HeaderLink = styled(Link)`
  margin-right: 40px;
  color: #155a51;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
`

const MainWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const Footer = styled.footer`
  padding: 48px 0;
  background-color: #155a51;
`

const FooterAddressList = styled.div`
  display: flex;
`

const FooterAddressItem = styled.div`
  margin-right: 144px;
`

const FooterAddressName = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
`

const FooterAddressText = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
`

const FooterContainer = styled.div`
  max-width: 1152px;
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
`

const FooterInformation = styled.div`
  flex: 1;
`

const FooterLogo = styled.div`
  img {
    margin-bottom: 32px;
  }
`

const FooterSocial = styled.div`
  display: flex;
`

const FooterSocialLink = styled.a`
  margin-left: 32px;
  height: 32px;
  width: 32px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
  &.facebook {
    background-image: url(${iconFacebook});
  }
  &.instagram {
    background-image: url(${iconInstagram});
  }
  &.linkedin {
    background-image: url(${iconLinkedin});
  }
  &.twitter {
    background-image: url(${iconTwitter});
  }
`

const FooterText = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 32px;
  max-width: 500px;
`

const Layout = ({ children }) => {
  return (
    <MainWrapper>
      <Header>
        <HeaderContainer>
          <HeaderLogo>
            <img src={logoAman} alt="logo aman" />
          </HeaderLogo>
          <HeaderLink>About Us</HeaderLink>
          <HeaderLink>Features</HeaderLink>
          <HeaderButton>Get in Touch</HeaderButton>
        </HeaderContainer>
      </Header>
      <main>{children}</main>
      <Footer>
        <FooterContainer>
          <FooterInformation>
            <FooterLogo>
              <img src={logoFooter} alt="footer logo" />
            </FooterLogo>
            <FooterText>
              Aman is a trademark of Insurtech Global Technologies LLC – a
              company incorporated in the State of Delaware, United States of
              America.
            </FooterText>
            <FooterAddressList>
              <FooterAddressItem>
                <FooterAddressName>US Office</FooterAddressName>
                <FooterAddressText>
                  201 E Center St
                  <br />
                  Anaheim, CA 92805
                  <br />
                  +1 343 202 4288
                  <br />
                  wecare@aman.us
                </FooterAddressText>
              </FooterAddressItem>
              <FooterAddressItem>
                <FooterAddressName>Indonesia Office</FooterAddressName>
                <FooterAddressText>
                  Komplek Ruko Harmoni Mas Blok C No. 42
                  <br />
                  Jl. Jembatan Dua Raya, Jakarta Utara 14450, Indonesia
                  <br />
                  +62 813 1641 0976
                  <br />
                  wecare@aman.us
                </FooterAddressText>
              </FooterAddressItem>
            </FooterAddressList>
          </FooterInformation>
          <FooterSocial>
            <FooterSocialLink href="" className="facebook"></FooterSocialLink>
            <FooterSocialLink href="" className="linkedin"></FooterSocialLink>
            <FooterSocialLink href="" className="twitter"></FooterSocialLink>
            <FooterSocialLink href="" className="instagram"></FooterSocialLink>
          </FooterSocial>
        </FooterContainer>
      </Footer>
    </MainWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
