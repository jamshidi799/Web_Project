import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import Home from './components/'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Notifications from './components/notification/Notification'
import PostPage from './components/Post/PostPage';
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp';
import Channel from './components/channel/Channel'
import NewPost from './components/Post/NewPost'

import PrivateRoute from "./components/common/PrivateRoute";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <PrivateRoute exact path='/' component={Home} />
            <PrivateRoute exact path='/profile' component={Profile} />
            <PrivateRoute exact path='/channel/:channelName' component={Channel} />
            <PrivateRoute exact path='/newPost/:channel_id' component={NewPost} />
            <PrivateRoute exact path='/post/:post_id' component={PostPage} />
            {/* <Route exact path='/notifications' component={Notifications} /> */}

            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />

          </Switch>
        </div>


      </BrowserRouter>
    </Provider>
  );
}

export default App;
