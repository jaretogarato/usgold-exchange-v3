import React, { Component } from 'react';
import { Header, Grid, Container } from 'semantic-ui-react';
import TopBg from '../assets/images/us-gold-header-bg.jpg';
import {
    HeroHeader, HhInnerContainer, HhTextContainer,
    HhImageContainer, HhH1, HhH2, HhH3, HhH4,
    OpenH3, OpenH4, OpenP, OpenPSmall, OpenSpanGreen, OpenSpanRed,
    FullWidthDiv, FullWidthBgDiv
} from '../css/styledComponents';
import WalkingLiberty from '../assets/images/walking-liberty-coin.png';
import USGoldToken from '../assets/images/usg-token.png';

// import SubmitForm from './partials/SubmitForm';
import Footer from './partials/Footer';
import MainLinks from './partials/MainLinks';
import Fade from 'react-reveal/Fade';
// import { inlineStyles } from '../css/inlineStyles.js';

class PurchaseSuccess extends Component {
    render() {
        return (
            <div>
            <Container fluid>

        <HeroHeader bgImage={TopBg}>
            <Container>
            <HhInnerContainer>
            <HhTextContainer>
            <HhH1>
            Thank you!
        </HhH1>
                <HhH3>
                    Your order is being processed.
                </HhH3>
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

                    Your USG has been sent for redemption, please allow time for the transaction to process on the Ethereum blockchain, wait for your balance to reflect this transaction.
                Someone will be in touch with you shortly.



        </OpenH3>
        <OpenH4>

        </OpenH4>
        <OpenH4>
        <a href='/' alt='Home Page'>Return to the home page</a>
        </OpenH4>
        </Container>
        </FullWidthDiv>
        </Container>

        <Footer />
        </div>
    );
    }
}

export default PurchaseSuccess;
