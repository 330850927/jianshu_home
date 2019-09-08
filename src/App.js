import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Header from './common/header';
import {GlobalStyle} from './style';
import {IconFontStyle} from "./statics/iconfont/iconfont";

function App() {
  return (
      <Provider store={store}>
          <GlobalStyle/>
          <IconFontStyle/>
          <Header/>
      </Provider>
  );
}

export default App;
