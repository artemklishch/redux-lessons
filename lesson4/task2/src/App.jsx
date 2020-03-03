import React from 'react';
import { Provider } from 'react-redux';
import Users from './users/Users';

const App = () => {
  return (
    <Provider>
      <Users />
    </Provider>
  );
};
export default App;