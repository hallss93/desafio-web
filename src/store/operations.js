import axios from 'axios'
import types from './types';
import utils from './utils';

function getRepositories(page) {
    return dispatch => {
        axios.get(`${utils.URL}&page=${page}`)
            .then(res => {
                dispatch({
                    type: types.FETCH_REPO,
                    data: res.data.items
                })
            }
            );
    };
}

export default {
    getRepositories
}