import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import rootReducer from './modules';


function configureStore(initialState?: object) {
    const loggerMiddleware = createLogger()  
    return createStore(
        connectRouter(history)(rootReducer), 
        initialState!, 
        applyMiddleware(
            routerMiddleware(history),
            thunkMiddleware,
            loggerMiddleware
        )
    );
}

// pass an optional param to rehydrate state on app start
export const history = createBrowserHistory()
const store = configureStore();

// export store singleton instance
export default store;