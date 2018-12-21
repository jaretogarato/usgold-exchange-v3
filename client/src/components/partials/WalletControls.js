import React, {Component} from 'react';

import {
  HeroHeader,
  HhInnerContainer,
  HhTextContainer,
  HhImageContainer,
  HhH1,
  HhH2,
  HhH3,
  OpenH2,
  HhH4,
  FullWidthDiv,
  FullWidthBgDiv,
  FlexRowContainer,
  OpenH3,
  OpenH4,
  OpenP,
  OpenPSmall,
  OpenSpanGreen,
  OpenSpanRed,
  BorderedDiv,
  BorderedDivHead,
  BorderedDivBody,
  HoverCenterDiv,
  HoverCenterDivWrap,
  DividerGrayGrad,
  VerticalSpacer,
  HrOrange,
  USGButton
} from '../../css/styledComponents';
import Img from './Img';


import LogoImage from '../../assets/images/us-gold-logo.png';
import {
  Header,
  Form,
  Button,
  Segment,
  Dropdown,
  Grid,
  Container,
  TextArea,
  Modal
} from 'semantic-ui-react';
import Fade from 'react-reveal/Fade';
import USGoldToken from '../../assets/images/usg-token.png';

import {withRouter} from 'react-router-dom';

let $ = require('jquery');
let jQuery = $;
let QRCode = require('qrcode')

//Returns true if it is a DOM element
window.isElement = (o) => {
  return (
    typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
      o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
  );
}


class WalletControls extends Component {
  state = {
    pw: '',
    words: '',
    pk: ''
  };

  readSingleFile(e) {

    let f = e.target.files[0];
    if (!f) {
      return;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
      var contents = e.target.result;
      // this.displayContents(contents);

      var element = document.getElementById('file');
      //element.textContent = contents;

      window.file = contents;
    };
    reader.readAsText(f);
  }

  componentDidMount = () => {
    window.addEventListener("web3Complete", this.setWeb3);
    /*document.getElementById('file')
            .addEventListener('change', this.readSingleFile, false);*/
  }

  lockWallet() {
    window.localStorage.removeItem('hasPW');
    window.localStorage.removeItem('pw');
    window.location.reload();
  }

  unlockWallet() {
    if (localStorage.getItem('hasAccount')) {
      let pw = window.prompt("input your password to unlock your wallet");
      window.wallet = window.web3js.eth.accounts.wallet.load(pw);
      window.localStorage.setItem('hasPW', true);
      window.localStorage.setItem('pw', pw);
      window.location.reload();
    }

  }

  forgetWallet() {

    if (window.wallet != undefined && window.wallet != null) {
      localStorage.removeItem('hasAccount');
      window.wallet.remove();
      if (!window.confirm("Are you sure you want to forget this wallet? This cannot be undone (your USG will be safe) but you will have to recover the wallet later.")) {
        return;
      }
      window.wallet = null;

      window.location.reload();
    }
  }

  backupWallet() {
    let encryptedKeystore = window.wallet.encrypt(window.prompt("Password to encrypt the backup with: "));
    var a = window.document.createElement('a');
    let stringKetstore = JSON.stringify(encryptedKeystore);
    var blob = new Blob([stringKetstore], {type: 'text/csv'});
    a.href = window.URL.createObjectURL(blob);
    a.download = 'test.usg';

    // Append anchor to body.
    document.body.appendChild(a);
    a.click();

    // Remove anchor from body
    document.body.removeChild(a);

  }

  createPaperWalletSubmit = async (event) => {
    event.preventDefault();

  }
  restoreWalletSubmit = async (event) => {
    event.preventDefault();
    const {pw, words, pk} = this.state;

    let file = null;


    //return;
    if (localStorage.getItem('hasAccount')) {

      if (!window.confirm("Are you sure you want to restore a wallet? this will overwrite your currently loaded wallet (your USG will be safe) but you will have to recover the wallet later.")) {
        return;
      }

      window.wallet.clear();
      window.localStorage.removeItem('hasPW');
      window.localStorage.removeItem('pw');
      window.localStorage.removeItem('hasAccount');
      window.wallet = null;
    }

    if (window.file === null || window.file === undefined || window.isElement(window.file)) {
      console.log(this.state.pk)
      let account = window.web3js.eth.accounts.privateKeyToAccount(this.state.pk);
      window.web3js.eth.accounts.wallet.add(account);
      window.wallet = window.web3js.eth.accounts.wallet;

    }
    else {
      file = JSON.parse(window.file);
      window.wallet = window.web3js.eth.accounts.wallet.decrypt(file, this.state.pw);
    }


    window.acct = window.wallet.address;

    window.wallet.save(this.state.pw);

    //let decryptedKeystore = window.wallet.decrypt(file, this.state.pw);

    // console.log(decryptedKeystore);

    window.localStorage.setItem('hasAccount', true);
    window.pw = this.state.pw;
    window.localStorage.setItem('hasPW', true);
    window.localStorage.setItem('pw', this.state.pw);

    window.location.reload();
  }

  createWalletSubmit = async (event) => {

    event.preventDefault();

    if (window.wallet != undefined && window.wallet != null) {

      if (!window.confirm("Are you sure you want to make a new wallet? This will overwrite your currently loaded wallet (your funds will be safe, but you will have to recover the wallet later)")) {
        return;
      }

      window.wallet.clear();

      window.wallet = null;
    }

    let entropy = this.state.words + Date.now() + this.state.pw;
    window.wallet = window.web3js.eth.accounts.wallet.create(1, entropy);
    console.log(window.wallet)
    window.acct = window.wallet[0].address;

    window.wallet.save(this.state.pw);

    let encryptedKeystore = window.wallet.encrypt(this.state.pw);
    var a = window.document.createElement('a');
    let stringKetstore = JSON.stringify(encryptedKeystore);
    var blob = new Blob([stringKetstore], {type: 'text/csv'});
    a.href = window.URL.createObjectURL(blob);
    a.download = 'usg_wallet_backup.usg';

    // Append anchor to body.
    document.body.appendChild(a);
    a.click();

    // Remove anchor from body
    document.body.removeChild(a);
    //set has account = true;
    window.localStorage.setItem('hasAccount', true);
    window.pw = this.state.pw;
    window.localStorage.setItem('hasPW', true);
    window.localStorage.setItem('pw', this.state.pw);
    window.location.reload();
  }
  handleChange = event => {
    // use 'event' to grab the id off the element also the value and set state
    // const { id, value } = event.target;
    const id = event.target.id;
    const value = event.target.value;
    this.setState({[id]: value});
    console.log(this.state);
  }


  async loadQrs() {


    console.log(window.wallet[0].privateKey);
    console.log(window.wallet[0].address);

    // $("#paperWalletPAQR").QRCode()

    let pk = await QRCode.toDataURL(window.wallet[0].privateKey);
    let pub = await QRCode.toDataURL(window.wallet[0].address);

    console.log(pk);
    console.log(pub);


    $("#paperWalletPKQR").append("<img src='" + pk + "'>");
    $("#paperWalletPKQR").append("<p>" + window.wallet[0].privateKey + "</p><br/><br/>");

    $("#paperWalletPAQR").append("<img src='" + pub + "'>");
    $("#paperWalletPAQR").append("<p>" + window.wallet[0].address + "</p><br/><br/>");

    $('body > :not(#paperWalletModal)').hide(); //hide all nodes directly under the body
    $('#instructions').hide();

    $('#paperWalletModal').css('width', "100%");
    $('#paperWalletModal').css('height', "100%");


  }

  render() {


    const {pw, words, file} = this.state;

    let inlineStyle = {
      modal: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto'
      },
      header: {},
      content: {},
      input: {
        margin: '5px'
      },
      buttonStyle: {
        width: "120px"
      }
    };

    let styles = {
      Q : {
        fontWeight:"bolder",
          fontSize:"15px",
          marginTop:"15px"
      },
        A:{
          marginLeft:"10px",

        }
    }

    return (
      <Grid padded="padded">
        <Grid.Row>
          <Grid.Column>
            <OpenH2 textAlign="left">USG Wallet Settings</OpenH2>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row id="noWallet">
          <Grid.Column width={4}>
            <Modal style={inlineStyle.modal} className={"modal-dialog-centered"}
                   trigger={<Button id={"create-wallet"} style={
                     inlineStyle.buttonStyle
                   }
                                    onClick={
                                      this.createWallet
                                    }> Create</Button>}>

              <Modal.Content style={inlineStyle.content}>
                <Modal.Description>
                  <Header>Disclaimer</Header>
                  <p>Information provided by you and the private keys generated from the information will never be
                    transmitted to us, it will only be done on your device. Any password you create when creating or
                    returning to use your wallet containing a US Gold Currency – USG Token is solely the responsible of
                    the creator (you) of the wallet. We are unable to assist in the recovery of any passwords or private
                    keys in the event they become lost, and strongly recommend that you select a compliant provider of
                    Cold-Storage services to hold a copy of your passwords and/or private keys in the event of such a
                    loss.</p>
                  <p>When you Click “Create”, you do not need save your password at the browser’s request.</p>

                  <Header>Create Wallet</Header>
                  <Form onSubmit={this.createWalletSubmit}>
                    <input value={pw} id={"pw"} name={"pw"} type={'password'} placeholder={"Password"}
                           onChange={this.handleChange}/>
                    <br/>
                    <input id={"words"} name={"words"} value={words}
                           placeholder={"Enter three words: Any three – you do not need to retain the three words, you will never need to use them again."}
                           onChange={this.handleChange}/>
                    <h3>IMPORTANT: Save your downloaded Wallet to your device when prompted</h3>
                      <h4>NOTE:</h4>
                    <p>

                        IN THE EVENT YOU NEED TO RESTORE YOUR USG WALLET – THIS IS YOUR “PRIVATE KEY”.
                        PLEASE REMEMBER – TO NEVER GIVE YOUR PRIVATE KEY TO ANYONE – WE ENCOURAGE YOU TO PRINT-OUT YOUR WALLET INFORMATION USING THE PAPER WALLET FEATURE (HERE) AND PLACE THAT DOCUMENT IN SAFE PLACE! PERSONAL VAULT OR A COLD STORAGE VAULT – A THIRD-PARTY PAID SERVICE.

                        ONLY YOU SHOULD HAVE ACCESS TO YOUR PRIVATE KEY.
                    </p>

                      <p>
                          By clicking the "Create My USG Wallet" button below, you agree to the terms of <a  target="_blank"  href='/user-agreement'>User Agreement, Terms of Use,</a> and <a  target="_blank"  href='/privacy'>Privacy Policy</a>
                      </p>

                      <Button type='submit'>Create My USG Wallet</Button>
                  </Form>
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </Grid.Column>
          <Grid.Column>
            <Modal style={inlineStyle.modal} className={"modal-dialog-centered"} trigger={<Button style={
              inlineStyle.buttonStyle
            }> Restore</Button>}>

              <Modal.Content style={inlineStyle.content}>
                <Modal.Description>
                  <Header>Disclaimer</Header>
                  <p>Information provided by you and the private keys generated from the information will never be
                    transmitted to us, it will only be done on your device. Any password you create when creating or
                    returning to use your wallet containing a US Gold Currency – USG Token is solely the responsible of
                    the creator (you) of the wallet. We are unable to assist in the recovery of any passwords or private
                    keys in the event they become lost, and strongly recommend that you select a compliant provider of
                    Cold-Storage services to hold a copy of your passwords and/or private keys in the event of such a
                    loss.</p>
                  <Header>Restore Wallet</Header>
                  <Form onSubmit={this.restoreWalletSubmit}>
                      Please enter your USG website password:
                    <input value={pw} id={"pw"} name={"pw"} type={'password'} placeholder={"Password"}
                           onChange={this.handleChange}/>
                    <br/>
                    <br/>

                      Wallet Restoration File Look for (usg_wallet_backup.usg) in you download folder.
                    <input onChange={this.readSingleFile} id={"file"} name={"file"} type={"file"}/>
                    <br/>
                    OR
                      <br/>
                      <br/>
                      You may also restore your USG using your “Private Key” found on your Paper Wallet or provided by a third-party wallet.
                    <input onChange={this.handleChange} id={"pk"} name={"pk"} type={"password"}/>

                    <p>
                        By clicking the "Restore My USG Wallet" button below, you agree to the terms of <a  target="_blank"  href='/user-agreement'>User Agreement, Terms of Use,</a> and <a  target="_blank"  href='/privacy'>Privacy Policy</a>
                    </p>

                    <Button type='submit'>Restore My USG Wallet</Button>
                  </Form>
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row id="walletLock">
          <Grid.Column width={4}>
            <Button onClick={this.lockWallet} style={inlineStyle.buttonStyle}>Lock</Button>
          </Grid.Column>
          <Grid.Column>
            <Button onClick={this.unlockWallet} style={inlineStyle.buttonStyle}>Unlock</Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row id="walletUnlocked">
          <Grid.Column width={4}>
            <Button onClick={this.forgetWallet} style={inlineStyle.buttonStyle}>Forget</Button>
          </Grid.Column>
          <Grid.Column>
            <Button onClick={this.backupWallet} style={inlineStyle.buttonStyle}>Backup</Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row id="walletUnlocked">
          <Grid.Column width={4}>
            <Modal id="paperWalletModal" style={inlineStyle.modal} className={"modal-dialog-centered"}
                   trigger={<Button style={
                     inlineStyle.buttonStyle
                   }> USG Paper Wallet</Button>}>

              <Modal.Content style={inlineStyle.content}>
                <Modal.Description>
                  <h1><Img src={LogoImage} width={240} height={60}/> US Gold Currency Paper Wallet</h1>
                  <Header>Disclaimer</Header>
                  <p>Keep this safe, this is everything necessary to control this wallet</p>
                </Modal.Description>


                <Form onSubmit={this.createPaperWalletSubmit}>
                  <div id="instructions">
                    <p>If you are sure, press: </p>
                    <Button onClick={this.loadQrs}>Generate Paper Wallet</Button>
                  </div>
                  <div id="public">
                    <h3>Public Address</h3>
                    <p>Give this to anyone who might want to send you tokens</p>
                    <div id='paperWalletPAQR'></div>
                  </div>


                  <div id="private">
                    <h3>Private Key</h3>
                    <p>Keep this safe from prying eyes</p>
                    <div id='paperWalletPKQR'></div>
                  </div>

                  <h4>Please print this page, then refresh your browser</h4>

                </Form>
              </Modal.Content>
            </Modal>
          </Grid.Column>
              <Grid.Column>
                  <Modal id="walletFAQModal" style={inlineStyle.modal} className={"modal-dialog-centered"}
                         trigger={<Button style={
                             inlineStyle.buttonStyle
                         }>USG Wallet FAQ</Button>}>

                      <Modal.Content style={inlineStyle.content}>
                          <Modal.Description>
                              <h1><Img src={LogoImage} width={240} height={60}/> US Gold Currency Wallet FAQ</h1>
                          </Modal.Description>
                          <ul>
                              <li style={styles.Q}>Q: What is a Wallet?</li>
                              <li style={styles.A}>A: A Wallet is a holder of stored  tokens purchased.  </li>
                              <li style={styles.Q}>Q: Does anyone control or administer my wallet? </li>
                              <li style={styles.A}>A1: The quick answer is no.</li>
                              <li style={styles.A}>A2: Wallets and private keys are created locally on your device and are never transmitted to us or anyone else.</li>
                              <li style={styles.A}>A3: You are the one who controls your wallet.  No other person has access to your wallet.</li>
                              <li style={styles.Q}>Q: What does it mean to “Forget” my wallet?</li>
                              <li style={styles.A}>A: Forgetting your wallet will remove it from the browser’s memory so that it cannot be accessed until you restore it at a later time.</li>
                              <li style={styles.Q}>Q: What happens to my Tokens in my wallet if I “Forget” my wallet?</li>
                              <li style={styles.A}>A: Forgetting your wallet has no effect on the data stored on the blockchain and all tokens associated with that wallet will remain there until you decide to restore it later.</li>
                              <li style={styles.Q}>Q: What happens when I backup my wallet?</li>
                              <li style={styles.A}>A: When you backup your wallet, you are asked to download a password-encrypted file that contains everything necessary to restore a previously created wallet.</li>
                              <li style={styles.Q}>Q: When I create a wallet is my information stored and accessible by others?</li>
                              <li style={styles.A}>A: Your wallet is created by you on your device, this means that only those with direct access to your device or your private key or backup file are able to access any tokens in that wallet.</li>
                              <li style={styles.Q}>Q: Do I need to create a wallet before I purchase USG Tokens?</li>
                              <li style={styles.A}>A1: Yes. You will need a wallet to store your Tokens before you purchase.</li>
                              <li style={styles.A}>A2: You can create a USG wallet here using your device or bring an Ethereum-compatible wallet from a third party wallet.  </li>
                              <li style={styles.Q}>Q: Do I need Ethereum to purchase USG Tokens?</li>
                              <li style={styles.A}>A: No, but you will need Ethereum to move the USG from your wallet to another wallet.</li>
                              <li style={styles.Q}>Q: What happens when I lock my wallet?</li>
                              <li style={styles.A}>A: Locking your wallet removes your ability to access the tokens in the wallet until you use your password to unlock the wallet later.</li>
                              <li style={styles.Q}>Q: Can my wallet be hacked?  </li>
                              <li style={styles.A}>A: So long as you keep control of your wallet (including backups) it is a mathematical near impossibility that someone could “guess” your private key. Without access to a private key, you cannot access the USG tokens, so hacking isn’t a real threat. (keep your keys and backups safe!)</li>
                              <li style={styles.Q}>Q: What if my password is lost or I’ve forgotten how to access my wallet?</li>
                              <li style={styles.A}>A: You may restore your wallet or access your wallet utilizing the Password and Private Key information contained in your paper wallet.</li>
                              <li style={styles.Q}>Q: Is there a record or history of my transactions?</li>
                              <li style={styles.A}>A1: A history of your transactions will appear on your wallet page detailing purchases and redemptions of your tokens.</li>
                              <li style={styles.A}>A2: Your transactions will be permanently part of the Ethereum blockchain.</li>
                              <li style={styles.Q}>Q: Does US Gold store my Password or Private Key?”</li>
                              <li style={styles.A}>A1: No. Only you will possess these and you must take extreme measures to protect and store them in a safe and secure manner.</li>
                              <li style={styles.A}>A2: Please create and safely store a paper wallet to ensure future access to your tokens.</li>
                              <li style={styles.A}>A3: You can also utilize 3rd party key-storage/management tools and services. </li>
                              <li style={styles.Q}>Q: What is a “Paper Wallet?” </li>
                              <li style={styles.A}>A1: A paper wallet is a printable page containing the private key associated with your wallet.</li>
                              <li style={styles.A}>A2: This private key can be used to restore access to your wallet on any device with access to the website.</li>
                              <li style={styles.A}>A3: ANYONE WITH ACCESS TO YOUR PRIVATE KEY AND PASSWORD WHICH APPEARS ON THE PRINTABLE COPY  OF THE PAPER WALLET YOU CREATED MAY USE THAT INFORMATION TO GAIN ACCESS TO CONTROL YOUR WALLET.  USE EXTREME CARE AND CAUTION TO PROTECT YOUR PRIVATE KEY AND PASSWORD.</li>
                          </ul>


                      </Modal.Content>
                  </Modal>
              </Grid.Column>
          </Grid.Row>
      </Grid>);
  }
}

export default withRouter(WalletControls);
