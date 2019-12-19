/**
 * @description             Actions modules for reduce code
 */
import types from './types';

const getRepo = (data) => {
    return {
        type: types.FETCH_REPO,
        data,
    }
}
const getOneRepo = (data) => {
    return {
        type: types.FETCH_ONE_REPO,
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
    getOneRepo,
    setPage,
}