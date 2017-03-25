import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Li from './comm/li.js';
/*
  
  1.数据的传输与获取
  2.如何设置状态，更改状态
  3.事件
  .....(ref、defaultValue、生命周期，最大的难点是如何构建这个项目)
  
  
  
  
  表单：
    1.受限组件
      当表单元素通过原生的方式设置默认值时，那么这个值是不可以修改的。
      受限组件中交互属性的值不能改变
      value  checked
      
      解除受限：
        绑定事件函数并且去修改数据,给默认数据定义一个状态，通过操作表单元素去更新
        状态，从而达到渲染的目的。
    
    2.不受限组件
      就不用原生的方式去设置默认值
        input的text设置defaultValue
		    input的checkbox设置defaultChecked
		    select的defaultValue值
 */
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      arr:this.props.arr,
      num:0,
      val:''
    }

    this.onchagehandle = this.onchagehandle.bind(this);
  }
  onchagehandle(ev){
    this.setState({
      val:ev.target.value
    })
  }
  render(){

    return (
      <div>
        <input type="button" defaultValue="点击创建" onClick={this.fnClick} />
        <select defaultValue="上海" >
          <option>上海</option>
          <option>北京</option>
          <option>广州</option>
        </select>
        <input type="checkbox" defaultChecked="true"/>
        <input type="text" defaultValue="321"/>
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



