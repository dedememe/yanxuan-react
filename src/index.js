import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import './mock/mockServer'

import './index.css';
//  引入rem适配
import './common/rem'

import Login from './pages/Login/Login'
import Cart from './pages/Cart/Cart'
import Distinguish from './pages/Distinguish/Distinguish'
import Classification from './pages/Classification/Classification'
import Msite from './pages/Msite/Msite'
import Interlayer from './pages/Interlayer/Interlayer'
import store from './redux/store'

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path ='/login' component={Login}/>
        <Route path ='/cart' component={Cart}/>
        <Route path ='/classification' component={Classification}/>
        <Route path ='/distinguish' component={Distinguish}/>
        <Route path= '/msite' component={Msite}/>
        <Route component={Interlayer}/>  //  默认路由
      </Switch>
    </HashRouter>
  </Provider>
), document.getElementById('root'));
