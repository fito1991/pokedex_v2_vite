import React from 'react'
import ReactDOM from 'react-dom'
import { useRoutes } from 'hookrouter';
import './index.css'
import routes from './router';
import App from './App'
import Error404 from './components/Error404';

function Routes() {
  const routeResult = useRoutes(routes);
  return routeResult || <Error404/>;
}

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
)
