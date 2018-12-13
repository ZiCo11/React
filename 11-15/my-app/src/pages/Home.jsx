 import React from 'react';

class Home extends Component{
    componentWillMount(){
        if(!user.isLogin()) {
            this.props.history.push('/login', null);
        }
    }

    render(){
        if (user.isLogin()){
            return (
                <Row>
            )
        }
    }
}
