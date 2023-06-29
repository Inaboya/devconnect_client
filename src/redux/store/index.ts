import { createStore, applyMiddleware, Action } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkDispatch } from 'redux-thunk';
// import rootReducer from './reducer';
import rootReducer from '../reducer';
import { setAuthToken } from '../../utils/setAuthToken';
// import setAuthToken from '../utils/setAuthToken';
// import { Action } from './actions/actions';

const initialState = {};

const middleware = [thunk];


const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

let currentState = store.getState();

store.subscribe(() => {
    let previousState = currentState;
    currentState = store.getState();
    if (previousState.auth.token !== currentState.auth.token) {
        const token = currentState.auth.token;
        setAuthToken(token);
    }
});


// Persist redux state 

// export type AppDispatch = typeof store.dispatch;

export type AppDispatch = ThunkDispatch<RootState, null, Action>; // Define AppDispatch type

export type RootState = ReturnType<typeof store.getState>; // Define RootState type


export default store;