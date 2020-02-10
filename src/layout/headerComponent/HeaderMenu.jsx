import React from 'react';
import { Menu } from 'antd';
import LockResetIcon from 'mdi-react/LockResetIcon';
import PropTypes from 'prop-types';

const HeaderMenu = ({ onClick }) => (
  <Menu
    className="custom-header-menu"
    onClick={onClick}
    mode="inline"
  >
    <Menu.Item
      className="change-password"
      key="changePassword"
    >
      <span>Alterar senha</span>
      <LockResetIcon />
    </Menu.Item>
    <Menu.Item
      className="logout"
      key="logout"
    >
      Sair
    </Menu.Item>
  </Menu>
);

HeaderMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default HeaderMenu;
