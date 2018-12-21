import PropTypes from 'prop-types'
import React, {Component} from 'react';
import {Container, Menu, Image, Button, Sidebar, Responsive, Segment, Icon, Visibility} from 'semantic-ui-react';
import {Link, withRouter, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
// import { handleLogout } from '../actions/auth';
// import { inlineStyles } from '../css/inlineStyles';
import {NavStyled, NavLinks} from '../css/styledComponents';
// import NavLink from './NavLink';
import MemberAccount from './members/MemberAccount';
import '../css/fonts.css';
import '../css/styles.css';
import '../css/semantic-ui/semantic.min.css';
import Img from "./partials/Img";
import LogoImageNew from "../assets/images/usg-currency-logo-horizontal.png";


class DesktopContainer extends Component {

  state = {transform: 0.0, navBgOpacity: 1.0, navBgHeight: 100, currentRoute: '/', showNav: false};
  hideFixedMenu = () => this.setState({fixed: false});
  showFixedMenu = () => this.setState({fixed: true});

  render() {
    const {children} = this.props
    const {fixed} = this.state

    return (
      <Responsive minWidth={Responsive.onlyTablet.maxWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          {/*<Segment*/}
            {/*textAlign='center'*/}
            {/*style={{}}*/}
            {/*vertical*/}
          {/*>*/}
            <Menu
              fixed={fixed ? 'top' : null}
              // inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item><Img src={LogoImageNew} width={240} height={60} marginTop='5px'/></Menu.Item>
                <Menu.Item position='right'>
                  <Menu.Item as={NavLink} exact name='Home' to='/' activeClassName="active"/>
                  <Menu.Item as={NavLink} name='About' to='/about' activeClassName="active"/>
                  <Menu.Item as={NavLink} name='Contact' to='/contact' activeClassName="active"/>
                </Menu.Item>
                {/* <NavLink name='Services' to='/services' isCurrent={this.isRouteCurrent('/services')} /> */}
                {/*<Menu.Item as='a' name='Wallet' href={'/wallet'} active={this.isRouteCurrent('/wallet')} />*/}
                {/*<Menu.Item as='a' name='Redeem' href={'/redeem'} active={this.isRouteCurrent('/redeem')} />*/}
                {/**/}
                {/* <NavLink name='Media' to='/mediakit' isCurrent={this.isRouteCurrent('/mediakit')} /> */}
                {/*<Menu.Item name='Resources' to='/resources' active={this.isRouteCurrent('/resources')} />*/}
                {/*<Menu.Item position='right'>*/}
                  {/*<Button as='a' >*/}
                  {/*Log in*/}
                  {/*</Button>*/}
                  {/*<Button as='a' primary={fixed} style={{ marginLeft: '0.5em' }}>*/}
                  {/*Sign Up*/}
                  {/*</Button>*/}
                {/*</Menu.Item>*/}
              </Container>
            </Menu>
          {/*</Segment>*/}
        </Visibility>
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  isRouteCurrent = (route) => {
    if (this.state.currentRoute === route) {
      return ('yes');
    } else {
      return ('no');
    }
  }
  state = {}

  handlePusherClick = () => {
    const {sidebarOpened} = this.state

    if (sidebarOpened) this.setState({sidebarOpened: false})
  }

  handleToggle = () => this.setState({sidebarOpened: !this.state.sidebarOpened})

  render() {
    const {children} = this.props
    const {sidebarOpened} = this.state

    return (
      <Responsive maxWidth={Responsive.onlyTablet.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} vertical visible={sidebarOpened}>
            <Menu.Item as={NavLink} exact name='Home' to='/' activeClassName="active"/>
            <Menu.Item as={NavLink} name='About' to='/about' activeClassName="active"/>
            <Menu.Item as={NavLink} name='Token' to='/token' activeClassName="active"/>
            <Menu.Item as={NavLink} name='Purchase' to='/purchase' activeClassName="active"/>
            <Menu.Item as={NavLink} name='Wallet' to='/wallet' activeClassName="active"/>
            <Menu.Item as={NavLink} name='Redeem' to='/redeem' activeClassName="active"/>
            <Menu.Item as={NavLink} name='Contact' to='/contact' activeClassName="active"/>
            <Menu.Item as={NavLink} name='Resources' to='/resources' activeClassName="active"/>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{minHeight: '100vh'}}
          >
            <Segment
              textAlign='center'
              style={{}}
              vertical
            >
              <Container>
                <Menu pointing secondary size='large'>
                  <Img src={LogoImageNew} width={240} height={60} marginTop='5px'/>
                  <Menu.Item position='right'>
                    <Menu.Item onClick={this.handleToggle}>
                      <Icon name='sidebar'/>
                    </Menu.Item>
                    {/*<Button as='a' >*/}
                    {/*Log in*/}
                    {/*</Button>*/}
                    {/*<Button as='a' style={{ marginLeft: '0.5em' }}>*/}
                    {/*Sign Up*/}
                    {/*</Button>*/}
                  </Menu.Item>
                </Menu>
              </Container>
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

export const ResponsiveContainer = ({children}) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

class NavBar2 extends Component {
  render() {
    return (
      <ResponsiveContainer location={this.props.location.pathname}/>
    );
  }
}

const mapStateToProps = state => {
  return {user: state.user};
};

export default withRouter(connect(mapStateToProps)(NavBar2));
