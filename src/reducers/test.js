import { combineReducers } from 'redux';
import counter from './counter';

const initialState = {
    number: 0,
    dummy: 'dumbdumb',
    dumbObject: {
        d: 0,
        u: 1,
        m: 2,
        b: 3
    }
};

const reducers = combineReducers({
    counter
});

export default reducers;