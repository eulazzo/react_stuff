import React,{Component} from 'react'

const Ninjas = ({ninjas, deleteNinja})=> {
  
  /*Ways to do it */

    const ninjasList = ninjas.map(ninja=>{
        return ninja.age<15 ? (
            <div className="App" key={ ninja._id }>
              <div>Name:{ninja.name}</div>
              <div>Age:{ninja.age}</div>
              <div>Belt:{ninja.belt}</div>
              <button onClick={ ()=> deleteNinja(ninja._id)}>Delete ninjas</button>
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