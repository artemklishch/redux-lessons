import React from 'react';
import Header from './Header';
import userData from './userData';

class App extends React.Component {
  state = {
    userData: userData,
  };
  render() {
    return (
      <div className="page">
        <Header />
      </div>
    );
  };
};
export default App;