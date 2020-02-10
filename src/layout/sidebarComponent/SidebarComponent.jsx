import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import { menuItens } from './MenuItens';
import { getUserRole } from '../../utils/users';
import './SidebarComponent.scss';
import logo from '../../assets/images/logo-full.png';
import logoCollapsed from '../../assets/images/logo-collapsed.png';
import { VERSION } from '../../utils/constants';
import { toggleMenuCollapsed, changeHeaderTitle } from '../../redux/actions/app';

const { Sider } = Layout;

class SidebarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathName: '', // URL path
    };
  }

  componentDidMount() {
    // update selector when the page is refreshed
    if (this.state.pathName !== this.props.location.pathname) {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({
        pathName: this.props.location.pathname, // Refresh URL path name
      });
      this.props.changeHeaderTitle(this.getHeaderTitle());
    }
  }


  componentDidUpdate() {
    // update selector when the page is refreshed
    if (this.state.pathName !== this.props.location.pathname) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        pathName: this.props.location.pathname, // Refresh URL path name
      });
      this.props.changeHeaderTitle(this.getHeaderTitle());
    }
  }

  getHeaderTitle = () => {
    // Return the first page title that contains the current browser URL path name
    for (let i = 0; i < menuItens.length; i += 1) {
      const found = menuItens[i].subMenu.find(
        item => this.props.location.pathname === item.url,
      );
      if (found !== undefined) {
        return found.headerTitle;
      }
    }
    return '';
  };

  getOpenKeys = () => (
    // Return open menu keys for a URL path name
    menuItens.map((v, i) => {
      const foundUrl = v.subMenu.reduce(
        (prev, elem) => prev || (this.props.location.pathname.startsWith(elem.url)), false);
      return foundUrl ? `menu${i}` : '';
    })
  );

  changePage = (url, headerTitle, toggleMenu) => {
    if (window.innerWidth <= 425) {
      toggleMenu();
    }
    this.props.history.push(url);
    this.props.changeHeaderTitle(headerTitle);
  };

  render() {
    const { SubMenu } = Menu;
    const { collapsed, toggleMenu } = this.props;
    const userRole = getUserRole();

    const displayStyle = (window.innerWidth <= 425 && collapsed) ? 'none' : 'block';
    return (
      <Sider
        id="SidebarComponent"
        trigger={null}
        style={{ display: displayStyle }}
        collapsible
        collapsed={collapsed}
        width={(window.innerWidth <= 425) ? window.innerWidth * 0.8 : 220}
      >
        <div className={`sidebar-logo-section${this.props.collapsed ? '-collapsed' : ''}`}>
          <img src={this.props.collapsed ? logoCollapsed : logo} alt="" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultOpenKeys={this.getOpenKeys()}
          selectedKeys={[this.state.pathName]}
        >
          {menuItens.map((item, index) => {
            if (item.visibility.indexOf(userRole) === -1) {
              return null;
            }
            return (
              <SubMenu
                key={`menu${index}`}
                className="submenu-container"
                title={
                  <div className="submenu-container-text">
                    <span className="menu-icon">{item.icon}</span>
                    <div className={this.props.collapsed ? 'ivisible' : ''}> {item.name}</div>
                  </div>}
              >
                {item.subMenu.map((subItem) => {
                  if (subItem.visibility.indexOf(userRole) === -1) {
                    return null;
                  }
                  return (
                    <Menu.Item
                      key={subItem.url}
                      onClick={() => this.changePage(subItem.url, subItem.headerTitle, toggleMenu)}
                    >
                      {subItem.name}
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            );
          })}
        </Menu>
        <div className="version-container">
          <div className="version">{VERSION}</div>
        </div>
      </Sider>
    );
  }
}

SidebarComponent.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  changeHeaderTitle: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  collapsed: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    collapsed: state.app.collapsed,
  };
}

const mapDispatchToProps = {
  toggleMenu: toggleMenuCollapsed,
  changeHeaderTitle,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SidebarComponent));
