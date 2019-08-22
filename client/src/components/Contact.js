import React, { Component } from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import TopBg from '../assets/images/us-gold-header-bg.jpg';
import Footer from './partials/Footer';
import SubmitForm from './partials/SubmitForm';
import Fade from 'react-reveal/Fade';
// import WalkingLiberty from '../assets/images/walking-liberty-coin.png';
import USGoldToken from '../assets/images/usg-token.png';
import {
  HeroHeader, HhInnerContainer, HhTextContainer,
  HhImageContainer, HhH1, HhH2,
  FullWidthDiv, FullWidthBgDiv,
  FlexRowContainer,
  OpenH3, OpenH4, OpenP, OpenPSmall, OpenSpanGreen, OpenSpanRed,
  BorderedDiv, BorderedDivHead, BorderedDivBody,
  HoverCenterDiv, HoverCenterDivWrap,
  DividerGrayGrad, VerticalSpacer,
  HrOrange,
  USGButton,
} from '../css/styledComponents';

class Contact extends Component {
  render() {
    return (
      <Container fluid>
        <HeroHeader bgImage={TopBg}>
          <Container>
            <HhInnerContainer>
              <HhTextContainer>
                <HhH1>
                  Contact Us
                </HhH1>
                <HhH2>
                  We'd love to hear from you.
                </HhH2>
              </HhTextContainer>
              <Fade>
                <HhImageContainer bgImage={USGoldToken} />
              </Fade>
            </HhInnerContainer>
          </Container>
        </HeroHeader>

        <SubmitForm />

        {/* <Container>

          <Header as='h1' />
          <Header as='h1' textAlign='center'>
            We'd love to hear from you.
          </Header>
          <Container fluid>
            <Grid>
              <Grid.Row>
                <Grid.Column width={16}>
                  <SubmitForm />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>

        </Container> */}
        <Footer />
      </Container>
    );
  }
}

export default Contact;
