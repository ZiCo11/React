import React, {Component} from 'react';
import ListItem from './ListItem';

class List extends Component {
    constructor(...args){
        super(...args);
        this.state = {
            data : []
        }
    }

    async componentDidMount(){
       let data = await (await fetch('./a.txt')).json();
       this.setState({data})
    }
    render(){
        return (
            <ul>
                {this.state.data.map((num,index) =>
                    <ListItem key={index} num={num} />
                )}
            </ul>
        );
    }
}

export default List
