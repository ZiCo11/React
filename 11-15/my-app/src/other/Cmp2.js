import  React, {Component} from 'react'

class Cmp2 extends Component{
    constructor(...args){
        super(...args);
    }
    fnClick(){  {/* 子传父--子引用父级方法--通过props */}
        this.props.add();
    }
    render(){
        return (
            <div>
                <input type='button' onClick={this.fnClick.bind(this)} value='子传父 子点++1'/>
            </div>
        )
    }
}
export default Cmp2
