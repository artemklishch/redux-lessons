import React from 'react';
import TransferList from './options/TransferList';
import store from './store';
import { Provider } from 'react-redux';

const App = () => <Provider store={store}> <TransferList /> </Provider>;

export default App;