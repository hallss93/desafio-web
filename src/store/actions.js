import types from './types';

const getRepo = (value) => {
    return {
        type: types.FETCH_REPO,
        value,
    }
}
export default {
    getRepo
}