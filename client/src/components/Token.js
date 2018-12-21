import React, { Component } from 'react';
import { Header, Container, Grid, Icon } from 'semantic-ui-react';
import TopBg from '../assets/images/us-gold-header-bg.jpg';
import Stability from '../assets/images/stable.png';

// import WalkingLiberty from '../assets/images/walking-liberty-coin.png';
import USGoldToken from '../assets/images/usg-token.png';
import VaultBlue from '../assets/images/vault-color-med.png';
import Footer from './partials/Footer';
import Fade from 'react-reveal/Fade';
import {
  HeroHeader, HhInnerContainer, HhTextContainer,
  HhImageContainer, HhH1, HhH2,
  FullWidthDiv, FullWidthBgDiv,
  FlexRowContainer,
  OpenH3, OpenH4, OpenP, OpenPSmall, OpenSpanGreen, OpenSpanRed,
  BorderedDiv, BorderedDivHead, BorderedDivBody,
  HoverCenterDiv, HoverCenterDivWrap,
  DividerGrayGrad, VerticalSpacer,
  HrOrange, Img2,
  USGButton,
} from '../css/styledComponents';
import Img from './partials/Img';

class Token extends Component {
  render() {
    return (
      <Container fluid>
        <HeroHeader bgImage={TopBg}>
          <Container>
            <HhInnerContainer>
              <HhTextContainer>
                <HhH1>
                  The USG Token
                </HhH1>
                <HhH2>
                  As Solid As The Gold That Backs It.
                </HhH2>
              </HhTextContainer>
              <Fade>
                <HhImageContainer bgImage={USGoldToken} />
              </Fade>
            </HhInnerContainer>
          </Container>
        </HeroHeader>

        <FullWidthDiv topColor='#f9f9f9' bottomColor='#f9f9f9' id={1}>
          <Container>
            <OpenH3>
              We are proud to introduce the USG Token.
            </OpenH3>
            <OpenH4>
              It's a new blockchain currency which functions as a true digital currency — one which provides stable-value and is backed by American Eagle one-ounce gold-coins.
            </OpenH4>
            <OpenH4>
              The USG provides a unique set of benefits, including liquidity through a simple redemption process.
            </OpenH4>

          </Container>
        </FullWidthDiv>

        <FullWidthDiv topColor='#eaebee' bottomColor='#eaebee' id={4}>
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column width={6}>
                  <h1>&nbsp;</h1>
                  <Fade bottom>
                    {/* <Img src={VaultBlue} width={400} height={404} marginTop='-230px' top='230px' /> */}
                    {/* <Img2 src={VaultBlue} width='60%' minHeight='350px' marginTop='-230px' top='230px' /> */}
                    <Img2 src={VaultBlue} width='60%' minHeight='350px' />
                  </Fade>
                </Grid.Column>
                <Grid.Column width={10}>
                  <OpenH3 textAlign='left'>It's Dependable</OpenH3>
                  <HrOrange />
                  <OpenH4 textAlign='left'>
                    Because every USG token is backed by a gold American Eagle one ounce coin, you know that the value in your token is tangible and real.
                  </OpenH4>
                  <OpenH4 textAlign='left'>
                    Security is of the highest priority to us: all of our gold is secured in state-of-the-art vaults and fully insured.
                  </OpenH4>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </FullWidthDiv>

        <FullWidthBgDiv bgImage={Stability} id={4}>
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column width={16}>
                  <OpenH3 color="white" textAlign='left'>It's Stable</OpenH3>
                  <HrOrange />
                  <Grid stackable>
                    <Grid.Row columns='equal'>
                      <Grid.Column>
                        <OpenP color="white" textAlign='left'>
                          Is the value of your cryptocurrency wallet the same right now as it was an hour ago? The odds are, it isn't. While the gains are always welcomed, the losses never are.
                        </OpenP>
                      </Grid.Column>
                      <Grid.Column>
                        <OpenP color="white" textAlign='left'>
                          Create some stability with USG tokens, which are always tied to the current price set by the U.S. Mint for a gold American Eagle one ounce coin.
                        </OpenP>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
              </Grid.Row>

            </Grid>
          </Container>
        </FullWidthBgDiv>

        <FullWidthDiv topColor='#f9f9f9' bottomColor='#f9f9f9' height={400}>
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column width={1} />
                <Grid.Column width={14}>
                  <OpenH3>
                    It's Flexible
                  </OpenH3>
                  <VerticalSpacer height={50} />
                  <OpenH4>
                    Ready to buy USG token? We make it easy to buy using one of the following payment options!
                  </OpenH4>

                  <OpenH4>
                    You may purchase them on the following exchanges of <a href="https://www.bittrex.com">Bittrex</a> / <a href="https://www.poloniex.com">Poloniex</a> / <a href="https://www.nebbex.com">Nebbex</a>.
                  </OpenH4>

                </Grid.Column>
                <Grid.Column width={1} />
              </Grid.Row>
            </Grid>
          </Container>
        </FullWidthDiv>

        <Footer />
      </Container>
    );
  }
}

const styles = {
  padTop: {
    paddingTop: '30px',
  },
}

export default Token;
