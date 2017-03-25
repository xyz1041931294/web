import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Li from './comm/li.js';

class App extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      arr:this.props.arr,
      num:0
    }
    
    this.fnClick = this.fn1.bind(this);
  }
  
  fn1(){
    console.log(this)
    let {num,arr} = this.state;
    
    let newArr = Object.assign([],arr);
    num++;
    let newData = {
      h:'妙味'+(num),
      s:'miaov',
      t:'(热死啦)'
    }
    
    
    newArr.push(newData);
    
    this.setState({
      arr:newArr,
      num:num
    });
  }
  
  render(){
    //let arr = Object.assign([],this.props.arr);
    let arr = Object.assign([],this.state.arr);
    
    let list = null;
    
    list = arr.map((ele,i)=>{
      let datas = {
        h:ele.h,
        s:ele.s,
        t:ele.t,
        key:i+(new Date().getTime())
      }
      return <Li {...datas}/>
    })
    
    return (
      <div>
        <input type="button" value="点击创建" onClick={this.fnClick}/>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}
let data = {
  arr:[{h:'你你',s:'nini',t:'(晴)'},{h:'我我',s:'wowo',t:'(多云转霾)'}]
}
ReactDOM.render(
  <App {...data}/>,
  document.getElementById('box')
)



