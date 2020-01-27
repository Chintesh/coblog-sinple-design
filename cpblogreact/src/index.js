import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import Header from "./Header";
import Home from "./Home";
import Posts from "./Posts";
import Post from "./Post";
import Footer from "./Footer";


ReactDOM.render(<BrowserRouter>
    <Header />
    <Switch>
    <Route exact={false} path="/single" component={Post} />
        <Route exact={false} path="/blog" component={Posts} />
        <Route exact={false} path="/" component={Home} />
      </Switch>
    <Footer />
  </BrowserRouter>, document.getElementById('root'));
