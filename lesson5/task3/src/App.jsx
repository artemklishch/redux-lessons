import React from 'react';

const App = () => {
  return (
    <div>
      <div className="filter">
        <span className="filter__count">5</span>
        <input type="text" className="filter__input" />
      </div>
      <ul className="users">
        <li className="user"><span className="user__name">Tad</span><span className="user__age">18</span></li>
        <li className="user"><span className="user__name">Anna</span><span className="user__age">45</span></li>
      </ul>
    </div>
  );
};
export default App;