import React,{Component} from 'react'

const Ninjas = ({ninjas})=> {
  
  /*Ways to do it */

    const ninjasList = ninjas.map(ninja=>{
        return ninja.age<15 ? (
            <div className="App" key={ ninja._id }>
              <div>Name:{ninja.name}</div>
              <div>Age:{ninja.age}</div>
            </div>
      ):null;
    })
    return(
        <div className="ninja-list">
            { ninjasList  }
             
        </div>
    );

}

export default Ninjas