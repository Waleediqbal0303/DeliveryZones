import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from '../redux/reducers/authReducer';


const AppReducers = combineReducers({
  AuthReducer: AuthReducer,
});

const rootReducer = (state, action) => {
  return AppReducers(state, action);
}

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
export {
  store,
};