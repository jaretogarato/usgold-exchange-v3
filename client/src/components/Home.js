import React, {Component} from 'react';
import {Container, Grid, Segment, Image, Button, Responsive} from 'semantic-ui-react';
import axios from 'axios';

// ---------- images ------------
import TopBg from '../assets/images/us-gold-header-bg.jpg';
import BricksGold from '../assets/images/bricks-gold.png';
import GoldBars from '../assets/images/gold-bars.jpg';
import InfinityBlue from '../assets/images/infinity-blue.png';
import USGoldToken from '../assets/images/usg-token.png';
import USGoldTokenNoShadow from '../assets/images/usg-token-noWhite.png';
import PoweredByOpenNetwork from '../assets/images/powered-by-open-network.png';
import IconGoldBacked from '../assets/images/icon-panel-gold-backed.png';
import IconStableValue from '../assets/images/icon-panel-stable-value.png';
import IconCoin from '../assets/images/icon-panel-coin.png';
import MainGoldBG from '../assets/images/us-gold-bg.jpg';
import TokenSide from '../assets/images/coin-side.png';
import LinesColored from '../assets/images/lines-three-colored.png';
import LinesGrey from '../assets/images/lines-three-grey.png';
import LinesGold from '../assets/images/lines-three-gold.png';
import TokenEagle from '../assets/images/token-eagle.png';
import StableByDesign from '../assets/images/gold-blockchain-stable-by-design.png'
import CubeGold from '../assets/images/cube-gold.png';
import ChartBitcoin from '../assets/images/chart-bitcoin.jpg';
import ChartEthereum from '../assets/images/chart-ethereum.jpg';
import ChartUSGold from '../assets/images/chart-usgold.jpg';
import GoldOnGradient from '../assets/images/gold-bar-on-gradient.png';
import CubeColoredB from '../assets/images/cube-colored-b.png';
import PaymentsAccepted from '../assets/images/payments-accepted.png';
import FincenLogoBlack from '../assets/images/fincen-logo-black.png';
import BBBGray from '../assets/images/bbb-gray-400x.png';
import FincenGray from '../assets/images/fincen-gray-400x.png';
import WyomingGray from '../assets/images/wyoming-seal-gray-400x.png';
import GoldBarsHoriz from '../assets/images/gold-bars-horiz.jpg';
import CubesTwo from '../assets/images/us-gold-currency-logo-symbol.png';
import CookieConsent from "react-cookie-consent";
import EthereumLogo from '../assets/images/ethereum-logo.jpg';
// import USGLogoSymbol from '../assets/images/us-gold-currency-logo-symbol.png';
import USGSingleCube from '../assets/images/usg-single-cube.png';
import USGLogoSymbol from '../assets/images/us-gold-currency-logo-symbol.png';
import GoldEagle from '../assets/images/goldEaglePage.png';

// USGInUSD in is master value for entire application
import {USGInUSD} from './partials/USGInUSD';

// ---------- partials -------------
import Img from './partials/Img';
import Footer from './partials/Footer';

// ---------- styling ---------------
// import { inlineStyles } from '../css/inlineStyles';
import '../css/react-reveal.css';
import '../css/mailchimp.css';
import {
  HeroHeader, HhInnerContainer, HhTextContainer,
  HhImageContainer, HhH1, HhH2, HhH3,
  Img2,
  FullWidthDiv, FullWidthBgDiv,
  FlexRowContainer,
  OpenH2, OpenH3, OpenH4, OpenH5, OpenP, OpenPSmall, OpenSpanGreen, OpenSpanRed,
  OpenUl, OpenLi,
  BorderedDiv, BorderedDivHead, BorderedDivBody, BorderedDivInnerWrapper,
  HoverCenterDiv, HoverCenterDivWrap, HoverCenterDivCoin,
  DividerGrayGrad, VerticalSpacer,
  HrGrey, HrWhite,
  USGButton,
} from '../css/styledComponents';

// https://www.react-reveal.com/examples/
// import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
// import Flip from 'react-reveal/Flip';
// import Bounce from 'react-reveal/Bounce';
// import Slide from 'react-reveal/Slide';
// import Reveal from 'react-reveal/Reveal'; // custom css
// import Flash from 'react-reveal/Flash';
// import HeadShake from 'react-reveal/HeadShake';
// import Pulse from 'react-reveal/Pulse';

// import { Fade4 } from '../css/styledFadeDiv';
// import { EthereumChart } from './partials/EthereumChart';


class Home extends Component {

  state = {USGInUSD: 0.0, ethereumPrice: 0.0, ethereum24hrChange: 0.0, USGInEthereum: 0.0};

  componentDidMount() {
    this.getEthereumPrice();
    console.log('usginusd:');
    console.log(USGInUSD);
    this.setState({USGInUSD: USGInUSD});
  }

  getEthereumPrice = () => {
    fetch('https://api.coinmarketcap.com/v2/ticker/1027/?convert=USD')
      .then(results => {
        return results.json();
      })
      .then(data => {
        let ep = data.data.quotes.USD.price;
        let e24ch = data.data.quotes.USD.percent_change_24h.toFixed(2);
        let usgeth = (USGInUSD / ep).toFixed(7);
        console.log('usgeth');
        console.log(usgeth);
        this.setState({
          ethereumPrice: ep,
          ethereum24hrChange: e24ch,
          USGInEthereum: usgeth,
        });
      });
  };

  render() {
    return (

      <Container fluid>
        <Container>
          <div style={{position: "fixed", zIndex: "10"}}>
            <Container className={"cookie-consent-container"}>
              <CookieConsent
                location="top"
                buttonText="Yes, I agree"
                cookieName="myAwesomeCookieName3"
                style={{background: "rgba(0,0,0,.8)", position: "relative !important", float: "right", width: "400px"}}
                buttonStyle={{
                  backgroundColor: "transparent",
                  boxShadow: " 0 0 0 2px #d4d4d5 inset !important",
                  color: "#fff",
                  border: "#fff 2px solid",
                  borderRadius: "4px",
                  marginTop: "0px"
                }}
                expires={150}
              >
                <div>
                  We use cookies on this site to enhance your user experience.<br/>
                  <span style={{fontSize: "10px"}}>
              By clicking any link on this site you give your consent for us to use cookies.
              </span>
                  {" "}
                </div>

              </CookieConsent>
            </Container>

          </div>
        </Container>
        <HeroHeader bgImage={TopBg}>
          <Container>
            <HhInnerContainer>
              <HhTextContainer className={"home-hero-text"}>
                <h1>US GOLD</h1>
                <h2>Your Private Gold Bullion Dealer.</h2>
                <div className={'hero-secondary'}>
                  <h2 style={{color:'white', lineHeight:'38px'}}>We make buying, storing, and selling gold safe and convenient.</h2>

                </div>
              </HhTextContainer>
              <Fade>
                <HhImageContainer bgImage={USGoldToken}/>
              </Fade>
            </HhInnerContainer>
          </Container>
        </HeroHeader>
        <div className={"hero-spacer"}>
        </div>
        <div className={"hero-wrapper"}>
          <FullWidthDiv color className={"hero-sub-row grey-bg"}>
            <Container>
              <Grid stackable padded>
                <Grid.Row className={'top20'}>
                  <Grid.Column width={16} style={{textAlign: 'center'}}>
                    <Container>
                      <OpenH2>Providing discreet gold bullion coin sales and private vault storage.</OpenH2>
                    </Container>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row className={'top70'}>
                  <Grid.Column width={16} style={{border: "0px"}}>
                    <Img src={GoldEagle} style={{margin: "0 auto 30px", height:'200px', width:'200px'}}/>
                    <h4 style={{textAlign: 'center'}} className={"aller uppercase grey-text"}>
                      American Eagle Gold One Ounce Coin
                    </h4>
                    <p style={{textAlign: 'center', fontSize:'20px'}}>
                     American Eagle – Authorizing Legislation: Public Law 99-185
</p>
                    <p style={{textAlign: 'center', fontSize:'20px'}}>


Produced only from gold mined in the United States – authorized by the Bullion Coin Act of 1985, American Eagle Gold Bullion Coins are one of the world’s leading gold bullion investment coins.
</p>
                    <p style={{textAlign: 'center', fontSize:'20px'}}>


The American Eagle’s value is based on the market price of its metal content, plus a reasonable premium charge to cover coinage and distribution.
                    </p>
                  </Grid.Column>

                </Grid.Row>
                <Grid.Row style={{height: '10%'}}>
                  <Grid.Column style={{textAlign: 'center'}}>

                    <OpenH2>
                      Each of our representatives is dedicated to providing you with exceptional value while delivering best-in-class service.
                    </OpenH2>
                    <OpenH2>Please call us at 800-607-4600 for a no obligation gold quote today.</OpenH2>

                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </FullWidthDiv>
        </div>

        {/*<HeroHeader bgImage={TopBg}>*/}
        {/*<Container>*/}
        {/*<HhInnerContainer>*/}
        {/*<HhTextContainer>*/}
        {/*<HhH1>*/}
        {/*US Gold Currency*/}
        {/*</HhH1>*/}
        {/*<HhH3>*/}
        {/*The convenience of digital money. <br />*/}
        {/*The security of the blockchain.<br />*/}
        {/*The stability of gold.*/}
        {/*</HhH3>*/}
        {/*</HhTextContainer>*/}
        {/*<Fade>*/}
        {/*<HhImageContainer bgImage={USGoldToken} />*/}
        {/*</Fade>*/}
        {/*</HhInnerContainer>*/}
        {/*</Container>*/}
        {/*</HeroHeader>*/}






        <Footer/>
      </Container>
    );
  }
}

const styles = {
  image50tall: {
    width: 'auto',
    height: '50px',
  },
  noPadOrMargin: {
    padding: 0,
    margin: 0,
  },
  goldBorder: {
    border: '1px',
    borderStyle: 'solid',
    borderColor: '#f8da1d',
  },
  pushedDown: {
    position: 'relative',
    transform: 'translateY(300px)',
    paddingBottom: '300px',
  },
  padTop: {
    paddingTop: '30px',
  },
  padTopB: {
    paddingTop: '70px',
  },
  fullWidth: {
    width: '100%',
  },
  orangeBorder: {
    borderColor: 'orange',
    borderWidth: '0',
    borderStyle: 'solid',
  },
  greyBorder: {
    borderColor: '#bababa',
    borderWidth: '0',
    borderStyle: 'solid',
  },
  fadeFlex: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

export default Home;
