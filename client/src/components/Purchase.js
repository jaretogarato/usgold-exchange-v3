import React, {Component} from 'react';
import {Header, Container, Grid, Card, Button, Image} from 'semantic-ui-react';
import TopBg from '../assets/images/us-gold-header-bg.jpg';
import Footer from './partials/Footer';
import SubmitForm from './partials/SubmitForm';
import Fade from 'react-reveal/Fade';
import WalletBalance from './partials/WalletBalance';
// import WalkingLiberty from '../assets/images/walking-liberty-coin.png';
import USGoldToken from '../assets/images/usg-token.png';

import LogoMedium from '../assets/images/logo-medium.png';
import LogoShapeshift from '../assets/images/logo-shapeshift.png';
import LogoCoinbase from '../assets/images/logo-coinbase.png';
import LogoUSMint from '../assets/images/logo-usmint.png';
import LogoBittrex from '../assets/images/logo-bittrex.png';
import LogoBinance from '../assets/images/logo-binance.png';
import LogoPoloniex from '../assets/images/logo-poloniex.png';
import LogoNebbex from '../assets/images/logo-nebbex.png';

import {
  HeroHeader, HhInnerContainer, HhTextContainer,
  HhImageContainer, HhH1, HhH2, HhH3, HhH4,
  FullWidthDiv, FullWidthBgDiv,
  FlexRowContainer,
  OpenH2, OpenH3, OpenH4, OpenP, OpenPSmall, OpenSpanGreen, OpenSpanRed,
  BorderedDiv, BorderedDivHead, BorderedDivBody,
  HoverCenterDiv, HoverCenterDivWrap,
  DividerGrayGrad, VerticalSpacer,
  HrOrange,
  USGButton,
} from '../css/styledComponents';
import PurchaseForm from "./partials/PurchaseForm";

class Contact extends Component {
  render() {
    return (
      <Container fluid>
        <HeroHeader bgImage={TopBg}>
          <Container>
            <WalletBalance title='Purchase USG'/>
            <div style={{position: "absolute", bottom: "0px", paddingBottom: "20px"}}>


            </div>
          </Container>
        </HeroHeader>

        {/*<FullWidthDiv topColor='#eaebee' bottomColor='#eaebee' id={4}>*/}
          {/*<Grid padded>*/}
            {/*<Grid.Row>*/}
              {/*<Grid.Column width={2}></Grid.Column>*/}
              {/*<Grid.Column width={12}>*/}
                {/*<OpenH3>Call +1.800.673.5800 or fill out the information below</OpenH3>*/}
                {/*<OpenH3>*/}
                  {/*Purchase USG*/}
                {/*</OpenH3>*/}
                {/*<OpenH4>*/}
                  {/*Fill out the following information and we will provide you with further instructions*/}
                {/*</OpenH4>*/}
              {/*</Grid.Column>*/}
              {/*<Grid.Column width={2}></Grid.Column>*/}
            {/*</Grid.Row>*/}
          {/*</Grid>*/}

          {/*<PurchaseForm/>*/}
        {/*</FullWidthDiv>*/}

        <FullWidthDiv topColor='#eaebee' bottomColor='#eaebee' minHeight='800px' id={3}>
          <Container>
            <Grid stackable padded centered>
              {/*<Grid.Row columns='equal'>*/}

                {/*<Grid.Column>*/}
                  {/*<Fade bottom>*/}
                    {/*<Card>*/}
                      {/*<Image src={LogoShapeshift} />*/}
                      {/*<Card.Content>*/}
                        {/*<Card.Header>Conversion</Card.Header>*/}
                        {/*<Card.Meta>*/}
                          {/*<a href="https://shapeshift.io/#/coins" target="_blank" rel="noopener noreferrer">*/}
                            {/*shapeshift.io*/}
                          {/*</a>*/}
                        {/*</Card.Meta>*/}
                        {/*<Card.Description>*/}
                          {/*Shapeshift is the go-to site when you want to convert your other forms of cryptocurrency to Ethereum. <br /><br />*/}

                          {/*It's fast, it's easy, the rates are reasonable, and they support an impressive slew of cryptocurrencies.*/}
                        {/*</Card.Description>*/}
                      {/*</Card.Content>*/}
                    {/*</Card>*/}
                  {/*</Fade>*/}
                {/*</Grid.Column>*/}
                {/*<Grid.Column>*/}
                  {/*<Fade bottom delay={200}>*/}
                    {/*<Card>*/}
                      {/*<Image src={LogoCoinbase} />*/}
                      {/*<Card.Content>*/}
                        {/*<Card.Header>Exchange</Card.Header>*/}
                        {/*<Card.Meta>*/}
                          {/*<a href="https://www.coinbase.com/" target="_blank" rel="noopener noreferrer">*/}
                            {/*coinbase.com*/}
                          {/*</a>*/}
                        {/*</Card.Meta>*/}
                        {/*<Card.Description>*/}
                          {/*A solid exchange for Bitcoin, Ethereum, and Litecoin. Always on the right side of U.S. regulations, and their cryptocurrencies are FDIC insured.*/}
                        {/*</Card.Description>*/}
                      {/*</Card.Content>*/}
                    {/*</Card>*/}
                  {/*</Fade>*/}
                {/*</Grid.Column>*/}
                {/*<Grid.Column>*/}
                  {/*<Fade bottom delay={400}>*/}
                    {/*<Card>*/}
                      {/*<Image src={LogoMedium} />*/}
                      {/*<Card.Content>*/}
                        {/*<Card.Header>Articles & Info</Card.Header>*/}
                        {/*<Card.Meta>*/}
                          {/*<a href="https://medium.com/topic/cryptocurrency" target="_blank" rel="noopener noreferrer">*/}
                            {/*medium.com*/}
                          {/*</a>*/}
                        {/*</Card.Meta>*/}
                        {/*<Card.Description>*/}
                          {/*When you're ready for a deep dive...<br /><br />*/}
                          {/*Medium has a huge library of great articles, it's updated frequently, and there's an entire channel dedicated to blockchain currencies.*/}
                        {/*</Card.Description>*/}
                      {/*</Card.Content>*/}
                    {/*</Card>*/}
                  {/*</Fade>*/}
                {/*</Grid.Column>*/}
              {/*</Grid.Row>*/}

              <Grid.Row>
              <Grid.Column width={2}></Grid.Column>
              <Grid.Column width={12}>
              <OpenH3>Coming to Exchanges Dec 2018</OpenH3>

              {/*<OpenH4>*/}
              {/*Fill out the following information and we will provide you with further instructions*/}
              {/*</OpenH4>*/}
              </Grid.Column>
              <Grid.Column width={2}></Grid.Column>
              </Grid.Row>

              <Grid.Row columns='equal'>
                <Grid.Column>
                  <Fade bottom>
                    <Card fluid>
                      <Image src={LogoBittrex} />
                      <Card.Content>
                        <Card.Header>Exchange</Card.Header>
                        <Card.Meta>
                          <a href="https://www.bittrex.com/" target="_blank" rel="noopener noreferrer">
                            bittrex
                          </a>
                        </Card.Meta>
                        <Card.Description style={{minHeight: 150}}>
                          A simply massive crypto exchange with a wide array of currencies, and a low percentage fee per transaction.
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Fade>
                </Grid.Column>
                <Grid.Column>
                  <Fade bottom delay={200}>
                    <Card fluid>
                      <Image style={{padding: "75px 0 49px"}} src={LogoPoloniex} />
                      <Card.Content>
                        <Card.Header>Exchange</Card.Header>
                        <Card.Meta>
                          <a href="https://poloniex.com/" target="_blank" rel="noopener noreferrer">
                            poloniex
                          </a>
                        </Card.Meta>
                        <Card.Description style={{minHeight: 150}}>
                          One of the most active crypto exchanges in the world.  Take advantage of dozens of technical indicators and a robust API to inform and execute your trading strategy.
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Fade>
                </Grid.Column>
                <Grid.Column>
                  <Fade bottom delay={400}>
                    <Card fluid>
                      <Image style={{padding: "57px 0 37px"}} src={LogoNebbex} />
                      <Card.Content>
                        <Card.Header>Exchange</Card.Header>
                        <Card.Meta>
                          <a href="https://www.nebbex.com/" target="_blank" rel="noopener noreferrer">
                            nebbex
                          </a>
                        </Card.Meta>
                        <Card.Description style={{minHeight: 150}}>
                          The Nebbex Protocol will end asset losses from trading platforms and exchanges as we know it today. It is the first institutional standard, safe and scalable digital assets custody solution. A New paradigm of digital asset adoption, for users, SMEs and Governments.
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


        <Footer/>
      </Container>
    );
  }
}

export default Contact;
