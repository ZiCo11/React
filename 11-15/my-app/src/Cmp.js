import  React, {Component} from 'react'

class Cmp extends Component{
    constructor(...args){
        super(...args);
        this.state = {
            count: 0
        }
    }
    addCount(){  {/* 父传子--子暴露方法 */}
        this.setState({
            count: this.state.count +1
        })
    }
    render(){
        return (
            <div>
                {this.state.count}
            </div>
        )
    }
}
 export default Cmp;   {/*default 表示输出整个组件*/}
