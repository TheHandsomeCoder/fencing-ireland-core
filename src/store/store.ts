import { createStore } from 'redux';
import rootReducer from '../reducers';

function configureStore(initialState?: object) {
   return createStore(rootReducer, initialState!);
}


// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;