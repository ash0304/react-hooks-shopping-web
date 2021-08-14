import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

// Components
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />
      {/* SideDrawer */}
      {/* Backdrop */}
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product/:id" component={ProductPage} />
          <Route exact path="/cart" component={CartPage} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
