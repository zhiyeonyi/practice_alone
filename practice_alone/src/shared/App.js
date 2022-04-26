import './App.css';
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';
import PostList from '../pages/PostList';
import PostDetail from '../pages/PostDetail';
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PostWrite from '../pages/PostWrite';

import Header from "./Header";
import {Grid} from "../elements";

function App() {
  return (
    <React.Fragment>
      <Grid>
        <Header></Header>
        <ConnectedRouter history={history}>
          <Route path="/" exact component={PostList} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup}/>
          <Route path="/postdetail" exact component={PostDetail} />
          <Route path="/postwrite" exact component={PostWrite} />
        </ConnectedRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
