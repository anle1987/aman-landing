import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import iconEmployers from "../images/ic-foremployers.svg"
import iconEmployees from "../images/ic-foremployees.svg"
import iconInsurers from "../images/ic-forinsurers.svg"
import bgCurveGreen from "../images/bg-curve-green.svg"
import bgCurveOrange from "../images/bg-curve-orange.svg"
import bgSlide1 from "../images/bg-slide-1.jpg"
import bgSlide2 from "../images/bg-slide-2.jpg"
import bgSlide3 from "../images/bg-slide-3.jpg"
import imageSlide1 from "../images/image-slide-1.png"
import imageSlide2 from "../images/image-slide-2.png"
import imageSlide3 from "../images/image-slide-3.png"

const About = styled.section`
  padding-top: 80px;
`

const AboutBox = styled.div`
  border: 2px solid #ecd077;
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 72px;
`

const AboutBoxWrap = styled.div`
  padding: 0 96px 0 64px;
`

const AboutContainer = styled.div`
  max-width: 752px;
  margin: 0 auto;
  padding: 0 16px;
`

const AboutDescription = styled.div`
  line-height: 2;
`

const AboutHead = styled.div`
  position: relative;
`

const AboutIntro = styled.div`
  padding-left: 64px;
`

const AboutHeadline = styled.div`
  color: #239a8b;
  font-weight: bold;
  text-transform: uppercase;
  padding-left: 120px;
`

const AboutIcon = styled.i`
  width: 96px;
  height: 96px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  bottom: 0;
  &.employers {
    background-image: url(${iconEmployers});
  }
  &.employees {
    background-image: url(${iconEmployees});
  }
  &.insurers {
    background-image: url(${iconInsurers});
  }
`

const AboutParagraph = styled.div`
  font-size: 20px;
  margin-bottom: 72px;
`

const AboutTitle = styled.div`
  font-size: 48px;
  font-weight: bold;
  font-family: "Playfair Display", serif;
  margin-bottom: 32px;
  line-height: 1.4;
`

const SpanGreen = styled.span`
  color: #239a8b;
  font-weight: bold;
`

const Contact = styled.section`
  background-color: #f8ebc1;
  padding: 96px 0 80px;
  position: relative;
  &:before {
    content: "";
    padding-bottom: 15%;
    height: 0;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${bgCurveOrange});
  }
`

const ContactContainer = styled.div`
  max-width: 752px;
  margin: 0 auto;
  padding: 0 16px;
`

const ContactForm = styled.form`
  max-width: 540px;
  margin: 0 auto;
`

const ContactFormAction = styled.form`
  text-align: center;
  padding-top: 20px;
`

const ContactFormButton = styled.button`
  text-align: center;
  line-height: 1.4;
  font-weight: bold;
  color: #ffffff;
  font-size: 16px;
  padding: 12px 144px;
  border-radius: 12px;
  background: #155a51;
  display: inline-block;
`

const ContactFormColumn = styled.div`
  width: 50%;
  padding: 0 10px;
`

const ContactFormInput = styled.input`
  display: block;
  width: 100%;
  line-height: 2;
  padding: 4px 16px;
  background-color: rgba(112, 117, 126, 0.1);
  border: none;
  border-radius: 12px;
`

const ContactFormLabel = styled.label`
  display: block;
  font-weight: bold;
  font-size: 14px;
  line-height: 2;
  margin-bottom: 4px;
  color: #239a8b;
  letter-spacing: 0.05em;
`

const ContactFormRow = styled.div`
  margin: ${props => (props.hasColumn ? "0 -10px 20px -10px" : "0 0 20px 0")};
  display: ${props => (props.hasColumn ? "flex" : "block")};
`

const ContactSubtitle = styled.div`
  color: #70757e;
  text-align: center;
  margin-bottom: 40px;
`

const ContactTitle = styled.div`
  font-size: 48px;
  font-weight: bold;
  font-family: "Playfair Display", serif;
  margin-bottom: 24px;
  text-align: center;
  line-height: 1.4;
`

const Feature = styled.section`
  padding: 80px 0;
`

const FeatureContainer = styled.div`
  max-width: 1074px;
  margin: 0 auto;
  width: 100%;
  padding: 0 16px;
`

const FeatureDescription = styled.div`
  text-align: center;
`

const FeatureGrid = styled.div`
  width: 33.33%;
  padding: 0 32px;
`

const FeatureItem = styled.div``

const FeatureImage = styled.div`
  padding: 16px;
`

const FeatureList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -32px;
  margin-right: -32px;
`

const FeatureTitle = styled.div`
  font-size: 48px;
  font-weight: bold;
  font-family: "Playfair Display", serif;
  margin-bottom: 32px;
  text-align: center;
`

const Footer = styled.section``

const Hero = styled.section`
  position: relative;

  .swiper-container {
    background-color: #bbe3da;
    &:before {
      content: "";
      padding-bottom: 15%;
      height: 0;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url(${bgCurveGreen});
      z-index: 2;
    }
  }
  .swiper-pagination {
    display: block;
    position: relative;
    max-width: 1152px;
    width: 100%;
    padding: 0 16px;
    text-align: left;
    bottom: 80px;
    margin: 0 auto;
    --swiper-theme-color: #155a51;
    height: 0;
    z-index: 3;
    .swiper-pagination-bullet {
      &:first-child {
        margin-left: 0;
      }
    }
  }
`

const SlideButton = styled.button`
  text-align: center;
  line-height: 1.4;
  font-weight: bold;
  color: #ffffff;
  font-size: 20px;
  padding: 16px 56px;
  border-radius: 12px;
  background: #155a51;
  display: inline-block;
  border: none;
`

const SlideContainer = styled.div`
  max-width: 1152px;
  width: 100%;
  padding: 144px 16px 176px;
  margin: 0 auto;
`
const SlideText = styled.div`
  font-size: 48px;
  font-weight: bold;
  font-family: "Playfair Display", serif;
  margin-bottom: 32px;
  line-height: 1.4;
  color: #2b2b2b;
  padding-right: 45%;
  position: relative;
  opacity: 0.2;
  transform: translateX(-300px);
  transition: all 0.7s ease;
`

const SlideItem = styled.div`
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  &.swiper-slide-active {
    ${SlideText} {
      opacity: 1;
      transform: translateX(0);
    }
    &:after {
      background-position: 0 center;
    }
  }
  &:after {
    transition: all 0.7s ease;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 400px center;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &.slide-1 {
    background-image: url(${bgSlide1});
    &:after {
      background-image: url(${imageSlide1});
    }
  }
  &.slide-2 {
    background-image: url(${bgSlide2});
    &:after {
      background-image: url(${imageSlide2});
    }
  }
  &.slide-3 {
    background-image: url(${bgSlide3});
    &:after {
      background-image: url(${imageSlide3});
    }
  }
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      imageEmployees: file(relativePath: { eq: "image-employees.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageEmployers: file(relativePath: { eq: "image-employers.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageInsurers: file(relativePath: { eq: "image-insurers.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const params = {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    spaceBetween: 30,
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <Swiper {...params}>
          <SlideItem className="slide-1">
            <SlideContainer>
              <SlideText>
                Coronavirus can weigh in on your finance. Worry not, Aman has it
                covered.
              </SlideText>
              <SlideButton>See How</SlideButton>
            </SlideContainer>
          </SlideItem>
          <SlideItem className="slide-2">
            <SlideContainer>
              <SlideText>
                Cost saving on insurance can be that simple with Aman.
              </SlideText>
              <SlideButton>See How</SlideButton>
            </SlideContainer>
          </SlideItem>
          <SlideItem className="slide-3">
            <SlideContainer>
              <SlideText>
                Proactive quote feature on Aman helps to boost your sales to new
                customers.
              </SlideText>
              <SlideButton>See How</SlideButton>
            </SlideContainer>
          </SlideItem>
        </Swiper>
      </Hero>
      <About>
        <AboutContainer>
          <AboutTitle>What is Aman?</AboutTitle>
          <AboutIntro>
            <AboutParagraph>
              <SpanGreen>Aman /aman</SpanGreen> was founded by a team of
              technology enthusiast as a technology platform, enabling companies
              and employees to seamlessly manage various health benefit and
              lifestyle programs.
            </AboutParagraph>
          </AboutIntro>
          <AboutBoxWrap>
            <AboutBox>
              <AboutHead>
                <AboutIcon className="employers"></AboutIcon>
                <AboutHeadline>For Employers</AboutHeadline>
              </AboutHead>
              <AboutDescription>
                Employers can save cost on health benefit program through better
                access to competitive offers from insurers.
              </AboutDescription>
            </AboutBox>
            <AboutBox>
              <AboutHead>
                <AboutIcon className="employees"></AboutIcon>
                <AboutHeadline>For Employees</AboutHeadline>
              </AboutHead>
              <AboutDescription>
                Employees can manage their claims and purchase add-on easily
                using mobile application.
              </AboutDescription>
            </AboutBox>
            <AboutBox>
              <AboutHead>
                <AboutIcon className="insurers"></AboutIcon>
                <AboutHeadline>For Insurers</AboutHeadline>
              </AboutHead>
              <AboutDescription>
                Insurers can increase sales using direct quote to promote its
                offerings to prospective customers up for renewals, manage the
                claim process paperlessly and prevent frauds using data
                analytics.
              </AboutDescription>
            </AboutBox>
          </AboutBoxWrap>
        </AboutContainer>
      </About>
      <Feature>
        <FeatureContainer>
          <FeatureTitle>These are our forte.</FeatureTitle>
          <FeatureList>
            <FeatureGrid>
              <FeatureItem>
                <FeatureImage>
                  <Img fluid={data.imageEmployers.childImageSharp.fluid} />
                </FeatureImage>
                <FeatureDescription>
                  <SpanGreen>Employers</SpanGreen> can manage their employee’s
                  insurance usage as well as other details.
                </FeatureDescription>
              </FeatureItem>
            </FeatureGrid>
            <FeatureGrid>
              <FeatureItem>
                <FeatureImage>
                  <Img fluid={data.imageEmployees.childImageSharp.fluid} />
                </FeatureImage>
                <FeatureDescription>
                  Easy-to-use insurance summary and details for{" "}
                  <SpanGreen>employees</SpanGreen> alike.
                </FeatureDescription>
              </FeatureItem>
            </FeatureGrid>
            <FeatureGrid>
              <FeatureItem>
                <FeatureImage>
                  <Img fluid={data.imageInsurers.childImageSharp.fluid} />
                </FeatureImage>
                <FeatureDescription>
                  Ultimately, <SpanGreen>insurers</SpanGreen> can easily monitor
                  their clients’ insurance details and quotations.
                </FeatureDescription>
              </FeatureItem>
            </FeatureGrid>
          </FeatureList>
        </FeatureContainer>
      </Feature>
      <Contact>
        <ContactContainer>
          <ContactTitle>Let us keep you updated.</ContactTitle>
          <ContactSubtitle>
            We would like to know you more just as you want to know more about
            us. We will keep you updated once you have submitted your contact
            information below.
          </ContactSubtitle>
          <ContactForm name="contact" method="POST" data-netlify="true">
            <ContactFormRow>
              <ContactFormLabel>Full Name</ContactFormLabel>
              <ContactFormInput type="text" name="name" />
            </ContactFormRow>
            <ContactFormRow>
              <ContactFormLabel>Company Name</ContactFormLabel>
              <ContactFormInput type="text" name="company" />
            </ContactFormRow>
            <ContactFormRow hasColumn>
              <ContactFormColumn>
                <ContactFormLabel>E-Mail</ContactFormLabel>
                <ContactFormInput type="email" name="email" />
              </ContactFormColumn>
              <ContactFormColumn>
                <ContactFormLabel>Phone Number</ContactFormLabel>
                <ContactFormInput type="text" name="phone" />
              </ContactFormColumn>
            </ContactFormRow>
            <ContactFormAction>
              <ContactFormButton type="submit">Submit</ContactFormButton>
            </ContactFormAction>
          </ContactForm>
        </ContactContainer>
      </Contact>
      <Footer></Footer>
    </Layout>
  )
}

export default IndexPage
