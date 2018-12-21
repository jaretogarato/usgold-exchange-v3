import React, { Component } from 'react';

import {
  HeroHeader, HhInnerContainer, HhTextContainer,
  HhImageContainer, HhH1, HhH2, HhH3,  HhH4, 
  FullWidthDiv, FullWidthBgDiv,
  FlexRowContainer,
  OpenH2, OpenH3, OpenH4, OpenP, OpenPSmall, OpenSpanGreen, OpenSpanRed,
  BorderedDiv, BorderedDivHead, BorderedDivBody,
  HoverCenterDiv, HoverCenterDivWrap,
  DividerGrayGrad, VerticalSpacer,
  HrOrange,
  USGButton,
} from '../../css/styledComponents';
import Img from './Img';

import Fade from 'react-reveal/Fade';
import USGoldToken from '../../assets/images/usg-token.png';
import EthGoldLogo from '../../assets/images/ethereum-gold.svg';

import { withRouter } from 'react-router-dom';


const $ = require('jquery');
$.DataTable = require('datatables.net');


class WalletTransactions extends Component {
  state = { ethereum_address: '' }


  setWeb3 = async ()=>{



      if(!window.needsMetamask) {

          if(!window.needsAccount) {
              console.log(window.web3js);
              console.log(window.acct);

              this.setState({
                  ethereum_address: window.acct,
                  usg_balance: window.bal,
                  eth_balance: window.ethBal
              });


              let inTx = await window.usg.getPastEvents("Transfer",{
                  fromBlock: 3791815,
                  toBlock: 'latest',
                  filter: {
                      _to: window.acct
                  }
              });


              console.log(inTx[0])

              let outTx = await window.usg.getPastEvents("Transfer",{
                  fromBlock: 3791815,
                  toBlock: 'latest',
                  filter: {
                      _from: window.acct
                  }
              });

              let allTx = await Promise.all(await inTx.concat(outTx).map(async (x)=> {

                  let date = await window.web3js.eth.getBlock(x.blockNumber);

                  let to = x.returnValues._to;
                  let from = x.returnValues._from;
                  if(to === "0x0000000000000000000000000000000000000000"){
                      to = "redeemed"
                  }else if(to === window.acct){
                      to = "--"

                  }
                  else {
                      to = to.substr(0,9) + "...";
                  }

                  if(from === window.acct){
                      from = "--";
                  }
                  else {
                      from = from.substr(0,9) + "...";
                  }

                  let d = new Date(date.timestamp * 1000);

                  return [
                      d.toLocaleDateString() + " " + d.toLocaleTimeString(),
                      from,
                      to,
                      x.returnValues._value + " USG",
                      x.blockNumber,
                  ];

              }));
            allTx.sort((a,b) => {
                return a.blockNumber - b.blockNumber;

            })





              $(this.refs.main).DataTable({
                  data: allTx,
                  columns: [

                      { title: "Date" },
                      { title: "From" },
                      { title: "To" },
                      { title: "Value" },
                      { title: "Block" },
              ]
                  // "processing": true,
                  // "serverSide": true
              })

          }
          else{
          }
      }
      else {
      }
  }

    componentDidMount =  () => {

        window.addEventListener("web3Complete", this.setWeb3);
      ;
    }


    componentWillUnmount(){
        $('.data-table-wrapper')
            .find('table')
            .DataTable()
            .destroy(true);
    }
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div>
                <OpenH2 textAlign="left">Transactions</OpenH2>
                <table ref="main" />

            </div>);
    }

}

export default withRouter(WalletTransactions);