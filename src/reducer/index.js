import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import coursesReducer from './coursesReducer';
import selectedCourseReducer from './selectedCourseReducer';
import authorReducer from './authorReducer';
import apiReducer from './apiReducer';
import authenticationReducer from './authenticationReducer'

export default combineReducers({
    coursesReducer,
    selectedCourseReducer,
    authorReducer,
    apiReducer,
    authenticationReducer,
    form: formReducer    
});


