import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import types from './types';
import initials from './initials';
import uab from 'unique-array-objects';

function repositories(state = initials.REPO_INITIAL, action) {
    switch (action.type) {
        case types.FETCH_REPO:{
            let courses = uab([...state.data, ...action.data])
            return {
                ...state,
                data: courses,
                page: state.page
            };
        }
        case types.SET_PAGE:
            return {
                ...state,
                page: action.data
            };
        default: return state;
    }
}

const store = createStore(repositories, applyMiddleware(thunk));


export default store;