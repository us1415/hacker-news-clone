import React, { Component } from 'react';
import '../App.css';
import Header from '../containers/Header';
// import Search from './Search';
import Content from '../containers/Content';
import { Route } from "react-router-dom";
import Footer from '../containers/Footer';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <Header />
        {/* <Search handleArticleSearch={this.handleArticleSearch} articles={store.getState().articles} /> */}
        <Route exact path="/" component={Content} />
        <Route path="/:id" component={Content} />
        <Footer />
      </div>
    );
  }
}

export default App;