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

function setPage(page) {
    return dispatch => {
        dispatch(actions.setPage(page))
    };
}

export default {
    getRepositories,
    setPage
}