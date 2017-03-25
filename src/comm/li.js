import React,{Component} from 'react';
export default class Li extends Component{
  render(){
    return (
      <li>
          <h3>{this.props.h}</h3>
          <span>{this.props.s}</span>
          <span>{this.props.t}</span>
      </li>
    )
  }
}