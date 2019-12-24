import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Notifications from './components/Notifications'
import PostPage from './components/Post/PostPage';
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp';
import Channel from './components/channel/Channel'
import NewPost from './components/Post/NewPost'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/channel/:channelName' component={Channel} />
          <Route exact path='/newPost' component={NewPost} />
          <Route exact path='/notifications' component={Notifications} />
          <Route exact path='/post/:post_id' component={PostPage} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />

        </Switch>
      </div>


    </BrowserRouter>
  );
}

export default App;
