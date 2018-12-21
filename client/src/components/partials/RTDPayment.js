import React, { Component } from 'react';
import axios from 'axios';
import { Header, Form, Button, Segment, Dropdown, Grid, Container, TextArea } from 'semantic-ui-react';
import {FullWidthDiv, HhH1, OpenH3, OpenH2} from '../../css/styledComponents';
// import { connect } from 'react-redux';
// import { addLead } from '../../actions/leads';
// import { flash } from '../../actions/flash';
// import { setFlash } from '../../actions/flash';
import CubesGold02 from '../../assets/images/cubes-gold-02.png';
import { inlineStyles } from '../../css/inlineStyles.js';
// import { titleOptions, phoneTypeOptions, stateOptions } from './FormOptions.js';
import { titleOptions } from './FormOptions.js';
import { withRouter } from 'react-router-dom';
import Img from './Img';


import {config } from "../../configs/dev.js";

class RTDPayment extends Component {




  doTheThing(){

  }

  render(){
      return(
          <button onClick={this.doTheThing}>DO IT</button>

      )
  }

}