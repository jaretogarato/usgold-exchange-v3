import React, {Component} from 'react';
import {Header, Container, Grid, Icon} from 'semantic-ui-react';
import TopBg from '../assets/images/us-gold-header-bg.jpg';
// import WalkingLiberty from '../assets/images/walking-liberty-coin.png';
import USGoldToken from '../assets/images/usg-token.png';
import CubesFiveGold from '../assets/images/cubes-five-gold.png';
import GoldCoinBgWide from '../assets/images/gold-coin-bg-wide-grey.jpg';
import CubesGold02 from '../assets/images/cubes-gold-02.png';
import Flexibility from '../assets/images/flexibility.png';

import IconGoldBacked from '../assets/images/icon-panel-gold-backed.png';

import Footer from './partials/Footer';
import MainLinks from './partials/MainLinks';
import Fade from 'react-reveal/Fade';
// USGInUSD in is master value for entire application
import {USGInUSD} from './partials/USGInUSD';
import {
  HeroHeader, HhInnerContainer, HhTextContainer,
  HhImageContainer, HhH1, HhH2,
  FullWidthDiv, FullWidthBgDiv,
  FlexRowContainer,
  OpenH3, OpenH4, OpenP, OpenPSmall, OpenSpanGreen, OpenSpanRed,
  OpenH5,
  BorderedDiv, BorderedDivHead, BorderedDivBody,
  HoverCenterDiv, HoverCenterDivWrap,
  DividerGrayGrad, VerticalSpacer,
  HrOrange,
  USGButton,
} from '../css/styledComponents';
import Img from './partials/Img';

class About extends Component {
  render() {
    return (
      <Container fluid>
        <HeroHeader bgImage={TopBg}>
          <Container>
            <HhInnerContainer>
              <HhTextContainer>
                <HhH1>
                  About US GOLD
                </HhH1>
                <HhH2>
                  We only do one thing – Sell US Monetary Gold
                </HhH2>
              </HhTextContainer>
              <Fade>
                <HhImageContainer bgImage={USGoldToken}/>
              </Fade>
            </HhInnerContainer>
          </Container>
        </HeroHeader>

        {/*<FullWidthDiv topColor='#fff' bottomColor='#fff' id={1}>*/}
        {/*<Container>*/}
        {/*<OpenH3>*/}
        {/*/!* US Gold Currency is committed to providing a safe, stable-value cryptocurrency with all of the benefits of the best digital currencies, but without the peaks and valleys in value experienced by many cryptocurrencies. *!/*/}
        {/*/!* With over 30 years of experience in monetary gold, US Gold in 2016 expanded into the cryptocurrency sector with the US Gold Currency brand, and created the US Gold blockchain currency token <b>USG</b>. *!/*/}
        {/*Make gold money again*/}
        {/*</OpenH3>*/}
        {/*</Container>*/}
        {/*</FullWidthDiv>*/}

        <FullWidthDiv topColor='#eaebee' bottomColor='#eaebee' id={4}>
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                <OpenH3 textAlign='center'>US GOLD is your perfect choice for Monetary Gold Currency</OpenH3>
                <HrOrange/>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <OpenH4 textAlign='left'>
                    With over 39 years of expertise in transacting gold purchases for clients where privacy and discretion is at the forefront, US GOLD has established it role and responsibility as the premier provider of gold products, specialized delivery and private vault storage services for the most demanding cliental.
                  </OpenH4>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </FullWidthDiv>

        <FullWidthBgDiv bgImage={GoldCoinBgWide} height={400}>
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column width={1}/>
                <Grid.Column width={14}>
                  <OpenH3 color='white'>
                    Based in Salt Lake City Utah – US GOLD only accepts payment for gold products through bank wire transfer in USD, and in cash (USD) at one of our convenient locations throughout the United States.
                  </OpenH3>
                  <VerticalSpacer height={150}/>
                  <OpenH4 color='white'>
                   Salt Lake City{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}Portland{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}Seattle{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}Denver{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}Phoenix{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}Las Vegas
                  </OpenH4>
                  <OpenH4 color='white'>
                  San Francisco{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}Los Angeles{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}San Diego
                  </OpenH4>
                </Grid.Column>
                <Grid.Column width={1}/>
              </Grid.Row>
            </Grid>
          </Container>
        </FullWidthBgDiv>




        <Footer/>
      </Container>
    );
  }
}

const styles = {
  padTop: {
    paddingTop: '30px',
  },
}

export default About;
