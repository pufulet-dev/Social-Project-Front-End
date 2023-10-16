import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import reducer from './store/reducer.js';

import useGlobalState from './store/useGlobalState.js';
import Context from './store/context.js';

// import { BrowserRouter } from 'react-router-dom';

const Index = () => {
  const store = useGlobalState();
  return (
    <Context.Provider value={store}>
      <App />
    </Context.Provider>
  )
}

// const store = createStore(reducer);

// const app = (
//   <Provider>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>
// );

ReactDOM.render(
  // <React.StrictMode>
  //   <Provider store={store} >
  //     <App />
  //   </Provider>
  // </React.StrictMode>,
  <Index />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
