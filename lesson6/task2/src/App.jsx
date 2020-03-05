import React from 'react';
import UserInfo from './users/UserInfo';
import Spinner from './Spinner';
import SearchField from './users/SearchField';

const App = () => {
  return (
    <div className="page">
      <UserInfo />
      <Spinner />
      <SearchField />
    </div>
  );
};
export default App;