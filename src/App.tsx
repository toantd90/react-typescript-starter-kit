import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import './App.css';

const App = () => {
  let routes = useRoutes([{ path: '/', element: <HomePage /> }]);

  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
