/**
 * @description             Create Store and apply Middlewares. 
 *                          Here is reponsibly for combine stores.
 */
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import types from './types';
import initials from './initials';
import uab from 'unique-array-objects';

function repositories(state = initials.REPO_INITIAL, action) {
    switch (action.type) {
        case types.FETCH_REPO: {
            let courses = uab([...state.data, ...action.data])
            return {
                pulls: state.pulls,
                data: courses,
                page: state.page
            };
        }
        case types.FETCH_ONE_REPO: {
            return {
                ...state,
                pulls: action.data
            };
        }
        case types.CLEAR_PULL: {
            return {
                ...state,
                pulls: []
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