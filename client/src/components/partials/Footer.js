import React from 'react';
import {Container, Grid, Icon, Form, Button, Segment, Image} from 'semantic-ui-react';
import {inlineStyles} from '../../css/inlineStyles';
// import '../../css/inlineStyles.js';
import BBB from './BBB';
import '../../css/mailchimp.css';
import '../../css/fonts.css';
import {
    FullWidthDiv, FullWidthBgDiv,
    OpenH4, OpenP, OpenPSmall, HrWhite,
    OpenSpanWhite,
    DividerTransparent,
} from '../../css/styledComponents';
import Img from './Img';
import Fade from 'react-reveal/Fade';

import CoinAndLight from '../../assets/images/coin-and-light.png';
import SubFooterBg from '../../assets/images/sub-footer-bg.jpg';
import FincenLogo from '../../assets/images/fincen-logo.png';
import USMintLogo from '../../assets/images/usmint-logo.png';
import FacebookWhite from '../../assets/images/facebook-white.png';
import TwitterWhite from '../../assets/images/twitter-white.png';
import UsGoldCurrency from '../../assets/images/us-gold-currency-logo-white.png';

const MailChimpForm = () => (
    <div>
      <OpenH4 color='white' textAlign='left'>
        Subscribe
      </OpenH4>

      <div id="mc_embed_signup">
        <Form
          action="https://usgold.us18.list-manage.com/subscribe/post?u=198699fe84bf843f460265a53&amp;id=049fa57b81"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          // className="validate"
          target="_blank"
          rel="noopener noreferrer"
          size='small'
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <input
              onChange={this.handleChange}
              type="email"
              value=""
              name="EMAIL"
              // className="email"
              id="mce-EMAIL"
              placeholder="Email Address"
              required
            />
            <br/>
            <input
              type="text"
              value=""
              name="FNAME"
              className="firstName"
              id="mce-FNAME"
              placeholder="First Name"
              required
            />
            <br/>
            <input
              type="text"
              value=""
              name="LNAME"
              className="lastName"
              id="mce-LNAME"
              placeholder="Last Name"
              required
            />
            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
            <div style={styles.mc1}>
              <input
                type="text"
                name="b_198699fe84bf843f460265a53_049fa57b81"
                value=""
              />
            </div>
            <div style={styles.alignCenter}>
              &nbsp;<br/>
              <Button
                // as="input"
                color="green"
                inverted
                basic
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                // className="button"
              >
                Submit
              </Button>
              {/* <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              /> */}
            </div>
          </div>
        </Form>
      </div>
    </div>
)

class Footer extends React.Component {
    state = {subscribeEmail: '', subscribeFirstName: '', subscribeLastName: ''}

    // handleSubmit = (e) => {
    //   e.preventDefault();
    //   const { dispatch, course, toggleForm, editing, announcement } = this.props;
    //   if(editing) {
    //     dispatch(editAnnouncement(course.id, {...announcement, body: this.state.body } , announcement.id));
    //     this.props.toggleEdit();
    //   } else {
    //     dispatch(addAnnouncement(course.id, this.state));
    //     toggleForm();
    //   }
    // }
    handleChange = (e) => {
        this.setState({subscribeEmail: e.target.value});
        console.log(this.state.subscribeEmail);
    };

    render() {
        return (
            <div>
              <FullWidthDiv topColor='#286d8d' bottomColor='#286d8d' id={6}>
                <Container>
                  <Grid stackable>
                    <Grid.Row>
                      <Grid.Column width={4}>

                        <img src={UsGoldCurrency} style={{width: "100%", margin: "0 auto", maxWidth: "250px"}}/>
                      </Grid.Column>

                      <Grid.Column width={4}>

                        <a href="/" alt="home">
                          <OpenP color='white' deco='underline' textAlign='left' paddingBottom='0.5em'>
                            Home
                          </OpenP>
                        </a>
                        <a href="/about" alt="about">
                          <OpenP color='white' deco='underline' textAlign='left' paddingBottom='0.5em'>
                            About Us
                          </OpenP>
                        </a>
                        <a href="/contact" alt="contact">
                          <OpenP color='white' deco='underline' textAlign='left' paddingBottom='0.5em'>
                            Contact
                          </OpenP>
                        </a>
                        <a href="/privacy" alt="privacy policy">
                          <OpenP color='white' deco='underline' textAlign='left' paddingBottom='0.5em'>
                            Privacy Policy
                          </OpenP>
                        </a>
                      </Grid.Column>


                      <Grid.Column width={7}>
                        <OpenP color='white' textAlign='left'>
                          &nbsp;<Icon name='phone'/><b>1-800-607-4600</b><br />
                          &nbsp;<Icon name='mail outline'/><a
                                                           href='mailto:support@usgold.exchange'><OpenSpanWhite>support@usgold.exchange</OpenSpanWhite></a>
                        </OpenP>
                        {/* <Grid>
                          <Grid.Row columns='equal'>
                            <Grid.Column width={8} textAlign='center'>
                          <BBB/><br/>
                            </Grid.Column>
                            <Grid.Column></Grid.Column>
                          </Grid.Row>
                        </Grid> */}
                      </Grid.Column>

                      {/* <Grid.Column width={6}>
                        <MailChimpForm />
                      </Grid.Column> */}

                    </Grid.Row>
                    <Grid.Row columns='equal'>
                      <Grid.Column textAlign='center'>
                        <OpenPSmall textAlign='center' color='white'>
                          &nbsp;<br/>
                          The materials provided on the US Gold website are for informational purposes only. Neither US Gold nor its affiliates make any express or implied warranties (including without limitation, any warranty of merchantability or fitness for a particular purpose or use) regarding the information appearing on the website nor will they be liable for loss, damages or loss of profit resulting from the use of information appearing on the website. Neither US Gold nor its affiliates will be liable to any user or anyone else for any interruption, inaccuracy, error or omission, delay in or failure of transmission of information through the website regardless of cause, or for any resulting damages.
                        </OpenPSmall>
                        <OpenPSmall textAlign='center' color='white'>
                          Copyright © 2019 US Gold
                        </OpenPSmall>
                        <OpenPSmall textAlign='center' color='white'>
                          &nbsp;<br/>

                        </OpenPSmall>
                      </Grid.Column>


                    </Grid.Row>
                  </Grid>
                </Container>
              </FullWidthDiv>


            </div>
        )
    }
}

const styles = {
    mcEmbedSignup: {
        background: 'transparent',
        clear: 'left',
        font: '14px',
        fontFamily: 'Helvetica,Arial,sans-serif',
        width: '100%',
    },
    mc1: {
        position: 'absolute',
        left: '-5000px',
        ariaHidden: 'true',
    },
    alignRight: {
        textAlign: 'right',
    },
    alignCenter: {
        textAlign: 'center',
    },
    tuneTop: {
        marginTop: '20px',
    },
}

export default Footer;
