import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from '../app/components/App';
// import todoApp from './app.reducers';

const dest = document.getElementById('app');
// const store = createStore(todoApp);

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>
//   , dest
// );

render(<App />, dest);
