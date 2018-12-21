import React, {Component} from 'react';

import {
  HeroHeader, HhInnerContainer, HhTextContainer,
  HhImageContainer, HhH1, HhH2, HhH3, HhH4,
  FullWidthDiv, FullWidthBgDiv,
  FlexRowContainer,
  OpenH3, OpenH4, OpenP, OpenPSmall, OpenSpanGreen, OpenSpanRed,
  BorderedDiv, BorderedDivHead, BorderedDivBody,
  HoverCenterDiv, HoverCenterDivWrap,
  DividerGrayGrad, VerticalSpacer,
  HrOrange,
  USGButton,
} from '../../css/styledComponents';
import Img from './Img';
import WalletControls from './WalletControls';
import Fade from 'react-reveal/Fade';
import USGoldToken from '../../assets/images/usg-token.png';
import EthGoldLogo from '../../assets/images/ethereum-gold.svg';

import {withRouter} from 'react-router-dom';
import {Container, Button} from "semantic-ui-react";
let $ = require('jquery');
let jQuery = $;

class WalletBalance extends Component {
  state = {
    ethereum_address: '', usg_balance: '...', eth_balance: '...' +
      '', has_account: false,
  }

  componentDidMount = () => {
  console.log()
    if(window.acct === undefined || window.acct === null){
        window.addEventListener("web3Complete", this.setWeb3);
    }
    else {
        this.setWeb3();
    }
  }
  setWeb3 = () => {

    let hasAccount = false;
    if(localStorage.getItem("hasAccount") !== null){
      hasAccount = true;
    }

    if (!window.needsMetamask) {

      if (!window.needsAccount) {
        console.log("ABC")
        console.log(window.web3js);
        console.log(window.acct);

        this.setState({
          ethereum_address: window.acct,
          usg_balance: window.bal,
          eth_balance: window.ethBal,
            has_account: hasAccount
        });
      }
      else {


      }


    }
    else {

    }


  }


  render() {
    const {ethereum_address, usg_balance, eth_balance, has_account} = this.state;


    return (


      <HhInnerContainer>
        {ethereum_address === '' ?

          <HhTextContainer>
            <HhH1>{this.props.title}</HhH1>
          </HhTextContainer>
          :
          <HhTextContainer>

            <HhH1>{this.props.title}</HhH1>

            <HhH2>
              Your wallet balance
            </HhH2>
            <HhH3>
              <Img src={USGoldToken} width={60} height={60}/> {usg_balance} USG
            </HhH3>
           

            <HhH2>
              Your wallet address
            </HhH2>
            <HhH4>
              {ethereum_address}
            </HhH4>
          </HhTextContainer>
        }
        <Fade>
          <HhImageContainer bgImage={USGoldToken}/>
        </Fade>
      </HhInnerContainer>
    );
  }
}

export default withRouter(WalletBalance);