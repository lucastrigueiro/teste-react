import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Tabs } from 'antd';
import { withRouter } from 'react-router-dom';
import Background from '../sharedComponents/Background/Background';
import logo from '../../assets/images/logo-full.png';
import './Login.scss';
import LoginComponent from './LoginComponent/LoginComponent';
import RegisterComponent from './RegisterComponent/RegisterComponent';
import { getUserRole, checkUserIsAuth } from '../../utils/users';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    if (checkUserIsAuth() && getUserRole() !== null) {
      this.props.history.push('/');
    }
  }

  render() {
    const { TabPane } = Tabs;

    return (
      <div className="Login">
        <Col xs={{ span: 0 }} md={{ span: 14 }} className="login-background">
          <Background />
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 10 }} className="login-content">
          <div className="login-container">
            <img className="logo-image" src={logo} alt="" />
            <Tabs defaultActiveKey="1">
              <TabPane tab="Fazer login" key="1">
                <LoginComponent />
              </TabPane>
              <TabPane tab="Cadastre-se" key="2">
                <RegisterComponent />
              </TabPane>
            </Tabs>
          </div>
        </Col>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

Login.defaultProps = {
  history: {},
};

export default withRouter(Login);
