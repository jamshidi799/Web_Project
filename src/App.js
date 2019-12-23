import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Channels from './components/channel/Channels'
import NewPost from './components/Post/NewPost'
import Notifications from './components/Notifications'
import PostPage from './components/Post/PostPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route exact path='/profile' component={Profile} /> */}
          <Route exact path='/channels/:channelName' component={Channels} />
          <Route exact path='/newPost' component={NewPost} />
          <Route exact path='/notifications' component={Notifications} />
          <Route exact path='/post/:post_id' component={PostPage} />

        </Switch>
      </div>


    </BrowserRouter>
  );
}

export default App;
