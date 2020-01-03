import React from 'react';
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

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>

        <Navbar />
        <div className="wrapper">
          <SideBar />
          <div className="container-fluid">
            <Switch>
              <PrivateRoute exact path='/' component={Home} />
              <PrivateRoute exact path='/profile/:user_name' component={Profile} />
              <PrivateRoute exact path='/channel/:channelName' component={Channel} />
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

export default App;
