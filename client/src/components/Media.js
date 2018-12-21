import React, { Component } from 'react';
import { Header, Container, Grid,Card, Icon, Image } from 'semantic-ui-react';
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
import LogoMedium from '../assets/images/logo-medium.png';
import LogoShapeshift from '../assets/images/logo-shapeshift.png';
import LogoCoinbase from '../assets/images/logo-coinbase.png';
import LogoUSMint from '../assets/images/logo-usmint.png';
import LogoBittrex from '../assets/images/logo-bittrex.png';
import LogoBinance from '../assets/images/logo-binance.png';

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

class Media extends Component {
  render() {
    return (
      <Container fluid>
        <HeroHeader bgImage={TopBg}>
          <Container>
            <HhInnerContainer>
              <HhTextContainer>
                <HhH1>
                  Media
                </HhH1>

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
              If you have a story to tell about US Gold Currency, all we can say is thank you, and that we want to help you with what you need to tell that story. Here are some logo assets you can use — and please let us know if there's anything else you need from us.
            </OpenH3>

          </Container>
        </FullWidthDiv>

        <FullWidthDiv topColor='#eaebee' bottomColor='#eaebee' minHeight='800px' id={3}>
          <Container>
              { /*
            <Grid stackable padded centered>
              <Grid.Row columns='equal'>

                <Grid.Column>
                  <Fade bottom>
                    <Card>
                      <Image src={LogoShapeshift} />
                      <Card.Content>
                        <Card.Header>Article 1</Card.Header>
                        <Card.Meta>
                          <a href="https://shapeshift.io/#/coins" target="_blank" rel="noopener noreferrer">
                            shapeshift.io
                          </a>
                        </Card.Meta>
                        <Card.Description>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Fade>
                </Grid.Column>
                <Grid.Column>
                  <Fade bottom delay={200}>
                    <Card>
                      <Image src={LogoCoinbase} />
                      <Card.Content>
                        <Card.Header>Article 2</Card.Header>
                        <Card.Meta>
                          <a href="https://www.coinbase.com/" target="_blank" rel="noopener noreferrer">
                            coinbase.com
                          </a>
                        </Card.Meta>
                        <Card.Description>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Fade>
                </Grid.Column>
                <Grid.Column>
                  <Fade bottom delay={400}>
                    <Card>
                      <Image src={LogoMedium} />
                      <Card.Content>
                        <Card.Header>Article 3</Card.Header>
                        <Card.Meta>
                          <a href="https://medium.com/topic/cryptocurrency" target="_blank" rel="noopener noreferrer">
                            medium.com
                          </a>
                        </Card.Meta>
                        <Card.Description>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Fade>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns='equal'>
                <Grid.Column>
                  <Fade bottom>
                    <Card>
                      <Image src={LogoBittrex} />
                      <Card.Content>
                        <Card.Header>Article 4</Card.Header>
                        <Card.Meta>
                          <a href="https://www.bittrex.com/" target="_blank" rel="noopener noreferrer">
                            bittrex
                          </a>
                        </Card.Meta>
                        <Card.Description>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Fade>
                </Grid.Column>
                <Grid.Column>
                  <Fade bottom delay={200}>
                    <Card>
                      <Image src={LogoUSMint} />
                      <Card.Content>
                        <Card.Header>Article 5</Card.Header>
                        <Card.Meta>
                          <a href="https://catalog.usmint.gov/american-eagle-2016-one-ounce-gold-proof-coin-16EB.html?cgid=gold-coins" target="_blank" rel="noopener noreferrer">
                            usmint.gov
                          </a>
                        </Card.Meta>
                        <Card.Description>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Fade>
                </Grid.Column>
                <Grid.Column>
                  <Fade bottom delay={400}>
                    <Card>
                      <Image src={LogoBinance} />
                      <Card.Content>
                        <Card.Header>Article 6</Card.Header>
                        <Card.Meta>
                          <a href="https://www.binance.com/">
                            binance.com
                          </a>
                        </Card.Meta>
                        <Card.Description>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Fade>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            {/* <Grid padded stackable>
              <Grid.Row columns='equal'>
                <Grid.Column textAlign='center'>
                  <Fade bottom>
                    <BorderedDiv>
                      <BorderedDivBody>
                        <Img src={LogoShapeshift} width={200} height={150} mode='fill' />
                      </BorderedDivBody>
                      <BorderedDivHead>
                        Crypto Conversion
                      </BorderedDivHead>
                      <BorderedDivBody>
                        Shapeshift is the go-to site when you want to convert your other forms of cryptocurrency to Ethereum. <br /><br />

                        It's fast, it's easy, the rates are reasonable, and they support an impressive slew of cryptocurrencies.
                      </BorderedDivBody>
                    </BorderedDiv>
                  </Fade>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <Fade bottom delay={200}>
                    <BorderedDiv>
                      <BorderedDivBody>
                        <Img src={LogoCoinbase} width={200} height={150} mode='fill' />
                      </BorderedDivBody>
                      <BorderedDivHead>
                        Exchange
                      </BorderedDivHead>
                      <BorderedDivBody>
                        A solid exchange for Bitcoin, Ethereum, and Litecoin. Always on the right side of U.S. regulations, and their cryptocurrencies are FDIC insured.
                      </BorderedDivBody>
                    </BorderedDiv>
                  </Fade>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <Fade bottom delay={400}>
                    <BorderedDiv>
                      <BorderedDivBody>
                        <Img src={IconPerfectExit} width={120} height={77} mode='fill' />
                      </BorderedDivBody>
                      <BorderedDivHead>
                        100% Perfect Exit
                      </BorderedDivHead>
                      <BorderedDivBody>
                        USG tokens are always redeemable for physical 1 oz American Gold Eagle coins:<br /><br />
                        Plan your hedge play or exit from cryptocurrencies that aren't asset-backed.
                      </BorderedDivBody>
                    </BorderedDiv>
                  </Fade>
                </Grid.Column>
              </Grid.Row>
            </Grid> */}
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

export default Media;
