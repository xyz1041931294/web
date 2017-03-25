import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Li from './comm/li.js';
/*
  表单：
    1.受限组件
      当表单元素通过原生的方式设置默认值时，那么这个值是不可以修改的。
      受限组件中交互属性的值不能改变
      value  checked
      
      解除受限：
        绑定事件函数并且去修改数据,给默认数据定义一个状态，通过操作表单元素去更新
        状态，从而达到渲染的目的。
    2.
 */
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      arr:this.props.arr,
      num:0,
      val:''
    }
    
    this.fnClick = this.click.bind(this);
    this.onchagehandle = this.onchagehandle.bind(this);
  }
  
  click(){
    // console.log(this)
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
  
  onchagehandle(ev){
    
    this.setState({
      val:ev.target.value
    })
    
    
    console.log(ev.nativeEvent.target.value);
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
        <input type="button" value="点击创建" onClick={this.fnClick} />
        <select value="上海" onChange={this.onchagehandle}>
          <option>上海</option>
          <option>北京</option>
          <option>广州</option>
        </select>
        <input type="checkbox" checked onChange={this.onchagehandle}/>
        <input type="text" value={this.state.val} onChange={this.onchagehandle}/>
        <div>{this.state.val}</div>
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



