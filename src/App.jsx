import React from 'react';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale-provider/pt_BR';
import 'antd/dist/antd.less';
import Routes from './routes/Routes';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <ConfigProvider locale={ptBR}>
      <Routes />
    </ConfigProvider>
  </Provider>
);

export default App;

