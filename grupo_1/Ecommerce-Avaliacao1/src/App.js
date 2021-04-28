import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from '../src/components/Navbar/Navbar';
import Footer from '../src/components/Footer/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ProductManagement from './screens/ProductManagement';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/produtos" exact component={ProductScreen} />
            <Route path="/criarproduto" exact component={ProductManagement} />
            <Route path="/criarproduto/:id" exact component={ProductManagement} />
            <Route path="/sobre" exact component={AboutScreen} />
            <Route path="/contato" exact component={ContactScreen} />
          </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
