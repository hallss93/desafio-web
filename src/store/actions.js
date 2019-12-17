import types from './types';

const getRepo = (data) => {
    return {
        type: types.FETCH_REPO,
        data,
    }
}
export default {
    getRepo
}