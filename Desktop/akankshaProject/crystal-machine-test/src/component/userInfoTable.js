import React from "react";
import {connect} from "react-redux";

class Table extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.info)
        return(
            <div>
                 <table>
                     <thead>
                        <tr>
                        <th>name</th> <th>mailid</th> <th>contect</th> <th>city</th>
                        </tr>
                        </thead>
                        <tbody>
             {   this.props.info.map((val,index)=>{
                    return<tr key={index}>
                        <td>{val.userName}</td><td>{val.mailId}</td><td>{val.contect}</td><td>{val.city}</td>
                    </tr>
                  
                })}
                </tbody>
                  </table>
            </div>
        )
    }
}

const mapStateToProp=(state, props)=>{
    return{
        info:state,
    }
}
export default connect(mapStateToProp) (Table);