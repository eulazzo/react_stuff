import React ,{Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './addNinjas'
class App extends Component {
  state = {
    ninjas:[
      {name:'Jhon',age:12,bellt:'black',_id:0},
      {name:'Bryan',age:4,bellt:'green',_id:1},
      {name:'Luana',age:34,bellt:'red',_id:2},
      {name:'Maria',age:17,bellt:'pink',_id:3},
    ]

  }
  render(){
    return (
      <div className="app">
        <h5>Welcome to my very first app</h5>
        <Ninjas ninjas={this.state.ninjas}/>
        <AddNinja />
      </div>
       
    );
  }
}
   
export default App;
