import { combineReducers } from 'redux';
import counter from './counter';
import test from './test';


const reducers = combineReducers({
    counter, test
});

export default reducers;