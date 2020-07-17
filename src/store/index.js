import { createStore, combineReducers, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './reducers/mainReducer';
import favReducer from './reducers/favReducer';
import searchReducer from './reducers/searchReducer';
import weatherReducer from './reducers/weatherReducer';

const reducer = combineReducers({ 
    mainState: mainReducer, 
    favState: favReducer, 
    searchState: searchReducer,
    weatherState: weatherReducer,
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store