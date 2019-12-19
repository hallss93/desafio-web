/**
 * @description             Operations using or not Axios
 */

import axios from 'axios'
import utils from './utils';
import actions from './actions';

function getRepositories(page) {
    return dispatch => {
        axios.get(`${utils.URL_SEARCH_REPOSITORIES}&page=${page}`)
            .then(res => {
                dispatch(actions.getRepo(res.data.items))
            });
    };
}
function getRepository(url) {
    return dispatch => {
        axios.get(`${url}`)
            .then(res => {
                dispatch(actions.getOneRepo(res.data))
            });
    };
}

function setPage(page) {
    return dispatch => {
        dispatch(actions.setPage(page))
    };
}

function clearPull() {
    return dispatch => {
        dispatch(actions.clearPull())
    };
}

export default {
    getRepositories,
    getRepository,
    setPage,
    clearPull
}