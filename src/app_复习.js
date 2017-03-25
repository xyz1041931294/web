import Li from './comm/li.js';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
/*
  在react中，如果数据为父组件流动来的，那么不操作，只接收，只渲染。
 */
class App extends Component{
  //在react中写了constructor一定要写super，不然会报错
  // constructor(){
  //   // super();
  // }
  
  render(){
    let arr = this.props.str;
    
    let list = null;
    
    list = arr.map((ele,i)=>{
      let datas = {
        h:ele.h,
        s:ele.s,
        key:i+(new Date().getTime()),
        tq:ele.tq
      }
      return <Li {...datas}/>
    });
    
    return (
      <ul>
        {list}
      </ul>
    )
  }
}

let data = {
  str:[{h:'好好',s:'haohao',tq:'(晴)'},{h:'学习',s:'xuexi',tq:'(霾)'}]
}

ReactDOM.render(
  <App {...data}/>,
  document.getElementById('box')
)
 
