import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Form } from 'antd';
import Login from './Login';

const initialState = {};

describe('<Login />', () => {
  let wrapper;
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const WrappedComponent = Form.create()(Login);
  beforeEach(() => {
    wrapper = mount(
      <Router>
        <WrappedComponent store={store} />
      </Router>,
    );
  });
  it('should render properly', () => {
    expect(wrapper).toHaveLength(1);
  });
});

