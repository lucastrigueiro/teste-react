import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input } from 'antd';
import { withRouter, Link } from 'react-router-dom';
import { encrypty } from '../../../utils/helpers';
import './LoginComponent.scss';
import { removeUserFromStorage, setUserInfoOnLocalStorage } from '../../../utils/users';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { form, history } = this.props;
    const { validateFields, setFields } = form;
    validateFields(async (err, values) => {
      console.log('values', values);
      if (!err) {
        // >>> call Login here

        const response = {
          data: {
            authToken: 'teste',
            id: '1',
            role: 'admin',
            userData: {},
          },
          isError: false,
        };

        if (!response.isError) {
          // Encrypty and save token in local storage
          localStorage.setItem('token', encrypty(response.data.authToken));

          // Encrypty and save user ID in local storage
          localStorage.setItem('user_id', encrypty(response.data.id));

          // Save user data in the local storage
          setUserInfoOnLocalStorage(response.data.userData);

          // Encrypty and save user data in local storage
          localStorage.setItem('user_role', encrypty(response.data.role));

          // Change page
          history.push('/');
        } else {
          setFields({
            password: {
              value: '',
              errors: [
                new Error('Erro teste'),
              ],
            },
          });
          // Clean storage info
          removeUserFromStorage();
        }
      }
    });
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <div className="LoginComponent">
        <Form className="LoginComponent-form" onSubmit={this.handleSubmit}>
          <Form.Item className="login-form">
            {getFieldDecorator('email', {
              rules: [
                {
                  required: true,
                  message: 'Por favor, insira seu email',
                },
              ],
            })(
              <Input
                className="login-input"
                type="email"
                placeholder="Login"
              />,
            )}
          </Form.Item>
          <Form.Item
            className="LoginComponent-form__item"
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true,
                message: 'Por favor, insira sua senha',
              }],
            })(
              <Input
                name="password"
                className="login-input"
                type="password"
                placeholder="Senha"
              />,
            )}
          </Form.Item>
          <Form.Item
            className="LoginComponent-form__item"
          >
            <Button
              type="primary"
              htmlType="submit"
              className="btn-login"
              loading={this.state.loading}
            >
              ENTRAR
            </Button>
          </Form.Item>
          <div className="link-forgot-password">
            <Link href="forgot-password" to="forgot-password"><span>esqueci a senha</span></Link>
          </div>
        </Form>
      </div>
    );
  }
}

LoginComponent.propTypes = {
  form: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

LoginComponent.defaultProps = {
  history: {},
};

const WrappedLoginComponentForm = Form.create()(LoginComponent);
export default withRouter(WrappedLoginComponentForm);
