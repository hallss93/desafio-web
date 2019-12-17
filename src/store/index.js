import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import types from './types';
import initials from './initials';


function repositories(state = initials.REPO_INITIAL, action) {
    switch (action.type) {
        case types.FETCH_REPO:
            return {
                ...state,
                data: action.data
            };
        default: return state;
    }
}

const store = createStore(repositories, applyMiddleware(thunk));


export default store;