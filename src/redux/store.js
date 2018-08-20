// store是redux状态管理的核心对象

import {createStore, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
//  引入插件工具查看状态
import {composeWithDevTools} from 'redux-devtools-extension'

//  引入状态机函数束
import reducers from './reducers'

export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))

