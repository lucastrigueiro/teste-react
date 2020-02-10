import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout as LayoutComponent } from 'antd';
import connect from 'react-redux/es/connect/connect';
import Header from './headerComponent/HeaderComponent';
import Sidebar from './sidebarComponent/SidebarComponent';
import { toggleMenuCollapsed } from '../redux/actions/app';

const { Content } = LayoutComponent;
class Layout extends Component {
  state = {
  };

  componentDidMount() {
    if (window.innerWidth < 664) {
      this.props.toggleMenu();
    }
  }

  render() {
    const { children, collapsed } = this.props;
    return (
      <LayoutComponent style={{ minHeight: '100vh' }}>
        <Sidebar />
        <LayoutComponent>
          <Header />
          <Content >
            <div id="main-content">
              {window.innerWidth <= 425 && !collapsed ? null : children}
            </div>
          </Content>
        </LayoutComponent>
      </LayoutComponent>
    );
  }
}


Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
