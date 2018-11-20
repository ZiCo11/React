import React, { Component } from 'react';
import {BrowserRouter, Router,Switch, Route, Link} from 'react-router-dom';
import Button from '@icedesign/base/lib/button';
import Img from '@icedesign/img';


import List from './List'
import Cmp from './Cmp'
import Cmp2 from './Cmp2'
import CmpRedux from './CmpRedux'
import CmpRedux2 from './CmpRedux2'
import store from './store'

import './App.css';

//icedesign
const image = 'https://img.alicdn.com/tfs/TB1saOBbYGYBuNjy0FoXXciBFXa-218-58.png';

class App extends Component {
  constructor(props){
      super(props);
      this.state ={
          count: 0
      }
  }
  fn(){
      store.dispatch({type: 'add'})
  }
  fnClick(){  {/*父传子 父通过refs引用子级*/}
      this.refs.cmp1.addCount();
  }
  addCount2(){  {/*子传父  父暴露的方法*/}
      this.setState({
          count: this.state.count+1
      })
  }
  render() {
    return (
        <BrowserRouter>
          <div className="box">
            <List arr={[1,2,3]}/>

            <input type='button' onClick={this.fnClick.bind(this)} value='父传子 父点+1'/>  {/* 父传子--父 */}
            <Cmp ref='cmp1' />   {/* 父传子--子 */}

              {/*---子传父--- */}
            {this.state.count}
            <Cmp2 add={this.addCount2.bind(this)} />  {/* 子传父--子 */}

            {/*router  redux*/}
            <div>
                <Link to='/'>组件1</Link>
                <Link to='/b/123'>组件2</Link>
                <Switch>
                    <Route exact path='/' component={CmpRedux}/>
                    <Route path='/b/:id' component={CmpRedux2}/>
                </Switch>
            </div>

              <div>
                  <input type='button' value='按钮' onClick={this.fn.bind(this)} />
                  <CmpRedux />
              </div>

              {/*//ice design*/}
              <div className='App'>
                  <Button type='primary'>button</Button>
                  <Img src={image} />
              </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
