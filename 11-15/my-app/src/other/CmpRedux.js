import React,{Component} from 'react'

import store from '../store/index'

class CmpRedux extends Component{
    constructor(...args){
        super(...args);
        this.state = {count: store.getState().count};
        store.subscribe(() => {
            this.setState({
                count: store.getState().count
            })
        })
    }

    render(){
        return(
            <div>
                {this.state.count}
            </div>
        )
    }
}
export default CmpRedux
