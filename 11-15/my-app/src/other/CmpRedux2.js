import React,{Component} from 'react'

class CmpRedux2 extends Component{
    constructor(...args){
        super(...args);
    }

    render(){
        return(
            <div>
                组件2 ({this.props.match.params.id})
            </div>
        )
    }
}
export default CmpRedux2
