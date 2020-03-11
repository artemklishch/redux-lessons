import React from 'react';
import UserInfo from './users/UserInfo';
import SearchField from './users/SearchField';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <div className="page">
      <Provider store={store}>
        {
        store.getState().userData === null
        ? <SearchField />
        : (<UserInfo /> && <SearchField />)
        }
      </Provider>
    </div>
  );
};
export default App;