import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Layout from './../layout/Layout';
import { checkUserIsAuth, removeUserFromStorage, setUserInfoOnLocalStorage, getUserRole } from './../utils/users';


const AuthRoute = ({ component: Component, ...rest }) => {
  // >>> Query current user here
  const response = { isError: false, userData: {} };
  return (
    <Route
      {...rest}
      render={(props) => {
        if (response.isError || getUserRole() === null) {
          // Clean storage token
          removeUserFromStorage();
          return <Redirect to={{ pathname: '/login' }} />;
        }
        // Save user data in the local storage
        setUserInfoOnLocalStorage(response.userData);
        // if user has no permission
        if (rest.visibility !== undefined &&
          rest.visibility.indexOf(getUserRole()) === -1) {
          return <Redirect to={{ pathname: '/' }} />;
        }
        if (checkUserIsAuth()) {
          return (
            <Layout>
              <Component {...props} />
            </Layout>
          );
        }
        return <Redirect to={{ pathname: '/login' }} />;
      }}
    />
  );
};

AuthRoute.propTypes = {
  location: PropTypes.shape({}),
  match: PropTypes.shape({
    params: PropTypes.shape({
      contractId: PropTypes.string,
    }),
  }),
  component: PropTypes.objectOf(PropTypes.any).isRequired,
};

AuthRoute.defaultProps = {
  location: {},
  match: {
    params: {},
  },
};

export default AuthRoute;
