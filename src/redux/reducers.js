import { combineReducers } from 'redux';

import counter from './reducers/counter'
import userInfo from './reducers/userInfo'

export default combineReducers({
    counter,
    userInfo,
    global(state = {}, action ){
        if(action.type == 'a'){
            return {
                a: 2
            }
        }

        return {
            a: 0
        }
    }
});