import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './store';
import View from './views/view'

// eslint-disable-next-line max-len
const content = View

const paragraphs = content.map((Component,key) => ({
  id: key,
  title: Component.name,
  content: <Component key={key} />,
}));

const store = configureStore(() => paragraphs);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

