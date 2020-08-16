import React from 'react';
import { Router, routes, renderRoutes } from 'routes/index';
import './App.less';

const authed = true; // 登陆后可通过 redux 修改
const authPath = '/login';

function App() {
  return (
    <div className="App">
      <Router>{renderRoutes(routes, authed, authPath)}</Router>
    </div>
  );
}

export default App;
