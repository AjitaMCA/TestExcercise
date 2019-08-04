import React from 'react';
import Parallaxes from './components/Parallax/index';
import Navbar from './components/Navbar';
import Content from './components/Content';
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';
export const Routes = (
  <Switch>
        <Route path="/app" render={() => <div><Navbar /> <Content /></div>} />
        <Route path="/parallax" component={Parallaxes} />
        //   render={() => <h1>Contact Us</h1>} />
        // }
        <Route path="/blog" children={({match}) => (
          <li className={match ? 'active' : ''}>
            <Link to="/blog">Blog</Link>
          </li>)} />
         <Route render={() => <div><div><Link to="/app" target="_blank">Home</Link>{' '}</div>
        <div><Link to="/parallax" target="_blank">React Parallax</Link></div></div>} />
        
      </Switch>
);