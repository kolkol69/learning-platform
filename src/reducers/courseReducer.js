import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducers(state = initialState.courses, action) {
    switch (action.type) {
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        case types.CREATE_COURSE_SUCCESS:
            return [...state, Object.assign({},action.state)]
        case types.UPDATE_COURSE_SUCCESS:
            return action.courses;

        default:
            return state;
    }
}
