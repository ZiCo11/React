import React, {Component} from 'react';

class ListItem extends Component{
    constructor(...args){
        super(...args);
    }
    render(){
        return(
            <li>这是来自ListItem组件的渲染{this.props.num}</li>
        )
    };
}
export default ListItem;


