import {createStore} from 'redux'

// reducer，形式为（state, action）=> state的纯函数
// 描述了action如何把state转变成下一个state
function counter(state =0, action) {
    switch (action.type) {
        case 'add':
            return state + 1;
        case 'sub':
            return state -1;
        default:
            return state;
    }
}

// 创建redux store来存放应用的状态。
// API是{subscribe， dispatch， getState}
let store = createStore(counter);

// 可以手动订阅更新，也可以事件绑定到视图层
store.subscribe(() => {
   console.log(store.getState());
});

// 改变内部state的唯一方法是dispatch一个action
// action可以被序列化，用日记记录和储存下来，后期还可以回放的方式执行
store.dispatch({type: 'add'});  // 1
store.dispatch({type: 'sub'}); // 0
