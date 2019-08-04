import React from 'react';
import rebassConfig from './rebass-config';

import {
  BrowserRouter as Router
} from 'react-router-dom';
import { Routes } from "./routes.js";
export default rebassConfig(() =>
<Router>
    <div>
	    <div>
	     {/*<div><Link to="/main" target="_blank">Home</Link>{' '}</div>
	      <div><Link to="/parallax" target="_blank">React Parallax</Link></div>*/}
	     </div>
	     <div>
	       {Routes}
	    </div>
    </div>
  </Router>
);
