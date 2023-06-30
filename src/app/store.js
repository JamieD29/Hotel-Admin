import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authenReudcer from '../dataProvider/slice';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  authenData: authenReudcer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);
export default store;
