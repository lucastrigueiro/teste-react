import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Avatar,
  Dropdown,
  Icon,
  Layout,
} from 'antd';
import HeaderMenu from './HeaderMenu';
import { logout } from '../../redux/actions/users';
import { changeHeaderTitle, toggleMenuCollapsed } from '../../redux/actions/app';

const { Header } = Layout;

class HeaderComponent extends Component {
  handleMenuClick = ({ key }) => {
    const { onLogout, history } = this.props;
    if (key === 'logout') {
      onLogout();
      history.push('/login');
    } else if (key === 'changePassword') {
      history.push('/change-password');
    }
  };

  render() {
    const { headerTitle, toggleMenu, collapsed } = this.props;
    return (
      <Header id="HeaderComponent">

        <div className="header-title-container">
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={toggleMenu}
          />
          <div className="header-title">{headerTitle}</div>
        </div>

        <div className="header-info">
          <span>
            <Avatar icon="user" />
          </span>
          <div className="custom-header-menu-user-info">
            <Dropdown
              overlay={() => (
                <HeaderMenu
                  onClick={this.handleMenuClick}
                />
              )}
              trigger={['click']}
            >
              <div className="dropdown-logout-container">
                <div className="dropdown-logout-info">
                  <div className="username">
                    Usuário 1
                  </div>
                  <div className="secondary-text">
                    Lorem Ipsum
                  </div>
                </div>
                <Icon type="down" className="dropdown-logout" />
              </div>
            </Dropdown>
          </div>
        </div>

      </Header>
    );
  }
}

HeaderComponent.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  onLogout: PropTypes.func,
  headerTitle: PropTypes.string,
  toggleMenu: PropTypes.func.isRequired,
  collapsed: PropTypes.bool,
};

HeaderComponent.defaultProps = {
  onLogout: () => {},
  headerTitle: '',
  collapsed: false,
};

function mapStateToProps(state) {
  return {
    collapsed: state.app.collapsed,
    headerTitle: state.app.headerTitle,
  };
}

const mapDispatchToProps = {
  onLogout: logout,
  toggleMenu: toggleMenuCollapsed,
  changeHeaderTitle,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderComponent));
