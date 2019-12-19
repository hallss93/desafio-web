import types from './types';

const getRepo = (data) => {
    return {
        type: types.FETCH_REPO,
        data,
    }
}
const setPage = (data) => {
    return {
        type: types.SET_PAGE,
        data,
    }
}
export default {
    getRepo,
    setPage
}