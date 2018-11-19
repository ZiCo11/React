import {createStore} from 'redux'

// redux
// state 必须是唯一的
const store = createStore(function (state = {count: 0}, action) {
    switch (action.type) {
        case 'add':
            state.count++;
            return state;
        default:   // init 其他
            return state;
    }
});
 export default store;
