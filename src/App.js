import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import Home from "./components/common/Home";
import SearchPage from "./components/search/SearchPage";
import Profile from "./components/profile/Profile";
import Channel from "./components/channel/Channel";
import NewChannel from "./components/channel/NewChannel";
import NewPost from "./components/Post/NewPost";
import PostPage from "./components/Post/PostPage";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Navbar from "./components/common/Navbar";
import PrivateRoute from "./components/common/PrivateRoute";
import EditProfile from './components/profile/EditProfile';
import SideBar from './components/common/SideBar';
import Trend from './components/common/assortment/Trend';
import Followed from './components/common/assortment/Followed';
import Subscription from './components/common/assortment/Subscription';
import Latest from './components/common/assortment/Latest';

import { loadUser, authenticate } from "./actions/auth";
import { getChannels } from './actions/channel'
import { getPosts } from './actions/posts'

class App extends Component {

  componentDidMount() {
    if (store.getState().auth.token) {
      store.dispatch(authenticate())
      store.dispatch(loadUser())
      store.dispatch(getChannels())
      store.dispatch(getPosts())
    }
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>

          <Navbar />
          <div className="wrapper">
            <SideBar />
            <div className="container-fluid">
              <Switch>
                <PrivateRoute exact path='/' component={Home} />
                <PrivateRoute exact path='/trending' component={Trend} />
                <PrivateRoute exact path='/followed' component={Followed} />
                <PrivateRoute exact path='/latest' component={Latest} />
                <PrivateRoute exact path='/subscriptions' component={Subscription} />

                <PrivateRoute exact path='/profile/:user_name' component={Profile} />
                <PrivateRoute exact path='/channel/:channel_id' component={Channel} />
                <PrivateRoute exact path='/newChannel' component={NewChannel} />
                <PrivateRoute exact path='/newPost/:channel_id' component={NewPost} />
                <PrivateRoute exact path='/post/:post_id' component={PostPage} />
                <PrivateRoute exact path='/edit_profile' component={EditProfile} />
                <PrivateRoute exact path='/search/:search' component={SearchPage} />

                <Route exact path='/signin' component={SignIn} />
                <Route exact path='/signup' component={SignUp} />

              </Switch>
            </div>
          </div>

        </BrowserRouter>
      </Provider>
    );
  }

}

export default App;
