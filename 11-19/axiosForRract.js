// React 实现前后端通信，使用axios
//传输数据格式描述使用JSON
//安装模块 npm install axios --save

import React, {Compoent} from 'react'
import axios from 'axios';

export default class extends Component {
    componnetDidMount(){
        //使用axios获取数据
        axios(remoteURL).then((response) => {
            const {body} =response;
            this.setState({
                data: body,
            });
        });
    }
}

render(){
    //...
}
