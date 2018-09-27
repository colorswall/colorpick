import React, { Component } from 'react';
import Routes from './pages/Routes';
import Layout from './components/common/Layout';
import { HashRouter as Router } from 'react-router-dom';
import { HOME_URL } from './pages/contatns';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router basename={HOME_URL}>
          <Layout >
            <Routes />
          </Layout>
        </Router>
      </div>

    );
  }
}

export default App;
