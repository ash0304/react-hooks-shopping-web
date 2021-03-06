import './App.scss';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import PromotionPage from './pages/PromotionPage';
import PromotionDetailPage from './pages/PromotionDetailPage';

// Components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      {/* Navbar */}
      <Navbar click={() => setSideToggle(true)} />
      {/* SideDrawer */}
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      {/* Backdrop */}
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main
        style={{
          minHeight: '800px',
        }}
      >
        <ScrollToTop>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/product/:id' component={ProductPage} />
            <Route exact path='/cart' component={CartPage} />
            <Route exact path='/promotion' component={PromotionPage} />
            <Route
              exact
              path='/promotion/:id'
              component={PromotionDetailPage}
            />
          </Switch>
        </ScrollToTop>
      </main>
      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
