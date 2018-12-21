import React, {Component} from 'react';
import {Header, Container, Grid, Icon, Button, Image, Segment} from 'semantic-ui-react';
import TopBg from '../assets/images/us-gold-header-bg.jpg';
// import WalkingLiberty from '../assets/images/walking-liberty-coin.png';
import USGoldToken from '../assets/images/usg-token.png';
import CubesFiveGold from '../assets/images/cubes-five-gold.png';
import GoldCoinBgWide from '../assets/images/gold-coin-bg-wide-2.jpg';
import SineWaves from '../assets/images/sine-waves.png';
import VaultBlue from '../assets/images/vault-color-med.png';
import RowOfBlocks from '../assets/images/row-of-blocks.png';
import Footer from './partials/Footer';
import MainLinks from './partials/MainLinks';
import Fade from 'react-reveal/Fade';
import USGLogoSymbol from '../assets/images/us-gold-currency-logo-symbol.png';
import USGLogo from '../assets/images/us-gold-currency-logo-vert.png';
import USGLogoHz from '../assets/images/usg-currency-logo-horizontal.png';
import USGToken from '../assets/images/usg-token.png';
import USGSingleCube from '../assets/images/usg-single-cube.png';
import Download from '../assets/images/USG_Branding_Guide.zip';

import {
  HeroHeader, HhInnerContainer, HhTextContainer,
  HhImageContainer, HhH1, HhH2,
  FullWidthDiv, FullWidthBgDiv,
  FlexRowContainer,
  OpenH3, OpenH4, OpenP, OpenPSmall, OpenSpanGreen, OpenSpanRed,
  BorderedDiv, BorderedDivHead, BorderedDivBody,
  HoverCenterDiv, HoverCenterDivWrap,
  DividerGrayGrad, VerticalSpacer,
  HrOrange, HrGrey, Img2,
  USGButton,
} from '../css/styledComponents';
import Img from './partials/Img';

class MediaKit extends Component {
  render() {
    return (
      <Container fluid>
        <HeroHeader bgImage={TopBg}>
          <Container>
            <HhInnerContainer>
              <HhTextContainer>
                <HhH1>Brand Guide.</HhH1>
                <div>
                  <HhH2>Proper use of the logos, icons and token images.</HhH2>

                </div>
              </HhTextContainer>
              <Fade>
                <HhImageContainer bgImage={USGoldToken}/>
              </Fade>
            </HhInnerContainer>
          </Container>
        </HeroHeader>

        <FullWidthDiv topColor='#eaebee' bottomColor='#eaebee' id={1}>
          <Container>
            <OpenH4>
              These brand guidelines demonstrate the correct way for partners and organizations to apply the USG brand.
              Proper use of the USG brand across all platforms, results in greater trust and clarity.
            </OpenH4>

          </Container>
        </FullWidthDiv>

        <FullWidthDiv topColor='#fff' bottomColor='#fff' id={4}>
          <Container>
            <Grid verticalAlign='middle'>
              <Grid.Row stretched>
                <Grid.Column width={8} style={{textAlign: "center"}}>
                  <div>
                    <Button href={Download}>DOWNLOAD LOGOS</Button>
                  </div>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Image src={USGSingleCube} alt="USG Logo Symbol" style={{margin: "0 auto", height: "150px"}}/>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row stretched>
                <Grid.Column width={8}>
                  <HrGrey/>
                </Grid.Column>
                <Grid.Column width={8}>
                  <HrGrey/>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row stretched>
                <Grid.Column width={8}>

                  <Image src={USGLogoHz} alt="USG Logo Symbol" style={{margin: "0 auto", height: "130px"}}/>


                </Grid.Column>
                <Grid.Column width={8}>
                  <Image src={USGLogoSymbol} alt="USG Logo Symbol" style={{margin: "0 auto", height: "200px"}}/>

                </Grid.Column>
              </Grid.Row>

              <Grid.Row stretched>
                <Grid.Column width={8}>
                  <HrGrey/>
                </Grid.Column>
                <Grid.Column width={8}>
                  <HrGrey/>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row stretched>
                <Grid.Column width={8}>
                  <Image src={USGLogo} alt="USG Logo Symbol" style={{margin: "0 auto", height: "200px"}}/>

                </Grid.Column>
                <Grid.Column width={8}>
                  <Image src={USGToken} alt="USG Logo Symbol" style={{margin: "0 auto", height: "200px"}}/>

                </Grid.Column>
              </Grid.Row>
              <Grid.Row stretched>
                <Grid.Column width={8}>
                  <HrGrey/>
                </Grid.Column>
                <Grid.Column width={8}>
                  <HrGrey/>
                </Grid.Column>
              </Grid.Row>
              {/* <Grid.Row>
                <Grid.Column width={6}>
                  <Image src={USGLogoSymbol} size='small' alt="USG Logo Symbol" />
                </Grid.Column>
                <Grid.Column width={8}>
                  <OpenH3 textAlign='left'>One Color Applications</OpenH3>
                  <OpenP textAlign='left'>
                  Te eum quot illum molestiae, reque nusquam ad nam, at vim mentitum eligendi. Ei utroque scribentur ius, novum fierent in per, ad offendit quaestio pri.
                </OpenP>
                </Grid.Column>
              </Grid.Row> */}


            </Grid>
          </Container>
        </FullWidthDiv>

        {/* <FullWidthDiv topColor='#ebebeb' bottomColor='#fff' id={4}>
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column width={16}>
                  <OpenH3 textAlign='left'>It's Stable</OpenH3>
                  <HrOrange />
                  <Grid stackable>
                    <Grid.Row columns='equal'>
                      <Grid.Column>
                        <OpenP textAlign='left'>
                          Is the value of your cryptocurrency wallet the same right now as it was an hour ago? The odds are, it isn't. While the gains are always welcomed, the losses never are.
                        </OpenP>
                      </Grid.Column>
                      <Grid.Column>
                        <OpenP textAlign='left'>
                          Create some stability with USG tokens, which are always tied to the current price set by the U.S. Mint for a gold American Eagle one ounce coin.
                        </OpenP>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  &nbsp;
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
          <Img src={RowOfBlocks} width='100%' height={200} mode='fill' />
        </FullWidthDiv> */}

        {/* <FullWidthDiv topColor='#222' bottomColor='#000' height={400}>
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column width={1} />
                <Grid.Column width={14}>
                  <OpenH3 color='white'>
                    It's Flexible
                  </OpenH3>
                  <VerticalSpacer height={50} />
                  <OpenH4 color='white'>
                    Ready to buy USG tokens? We make it easy by accepting Ethereum for payment. Don't have Ethereum? No problem -- just go to <a href='https://shapeshift.io' >ShapeShift</a> to easily convert your crypto, and you're in business!
                  </OpenH4>
                  <OpenH4 color='white'>
                    Ready to redeem USG tokens? We give you the added benefit of the option to redeem your USG tokens with us directly at any time for gold American Eagle one ounce coins, any time, at a 1-to-1 token-to-coin ratio.
                  </OpenH4>
                </Grid.Column>
                <Grid.Column width={1} />
              </Grid.Row>
            </Grid>
          </Container>
        </FullWidthDiv> */}

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

export default MediaKit;
