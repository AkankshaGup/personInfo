import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "./component/userInfoTable.js"
import {connect} from "react-redux";

class App extends React.Component {
  constructor(props){
   super(props);
  }
  save=(e)=>{
    e.preventDefault();
    let formlength=e.target.length;
    let obj={};
    for(let i=0; i<formlength-1; i++){
      obj[e.target[i].name]=e.target[i].value;
    }
    console.log(obj);
    this.props.dispatch(addTodo(obj));
  }
  render(){
  return (
    <div className="container" >
       <div className="col-8"style={{margin:"auto"}}>
         <form onSubmit={this.save}>
       <div className="form-group">
  <span>Name:</span>
  <input type="text" className="form-control" name="userName" />
</div>
<div className="form-group">
  <span>MailId:</span>
  <input type="text" className="form-control" name="mailId" />
</div>      <div className="form-group">
  <span>Contect no:</span>
  <input type="text" className="form-control" name="contect" />
</div>
<div className="form-group">
  <span>City:</span>
  <input type="text" className="form-control" name="city" />
</div>
<input type="submit" className="btn btn-danger" value="submit"/>
</form>
</div>
<Table />
    </div>
  );
}
}

const addTodo=(obj)=>{
  console.log(obj);
  return dispatch=>{
    dispatch({
      type:"save",
      payload:obj
    })
     
  }
}

export default connect(null,null)(App);
