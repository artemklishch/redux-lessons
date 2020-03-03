import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Users from './users/Users';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(<Provider store={store}><Users /></Provider>, document.querySelector('#root'));


