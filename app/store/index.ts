import { createStore, applyMiddleware, combineReducers } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';

import stock from './stock/reducer';
import profile from './profile/reducer';

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const combinedReducer = combineReducers({
  stock,
  profile,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    // preserve count value on client side navigation
    if (state.stock) nextState.stock = state.stock;
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const store = createStore(reducer, bindMiddleware([thunkMiddleware]));

export type AllState = ReturnType<typeof store.getState>;

export const wrapper = createWrapper(() => store);
