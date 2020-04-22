import React,{Component} from 'react'

const Ninjas = ({ninjas})=> {
    
    const ninjasList = ninjas.map(ninja=>{
        return (
            <div className="App" key={ ninja._id }>
                <div>Name:{ninja.name}</div>
                <div>Age:{ninja.age}</div>
            </div>
        )
    })
    return(
        <div className="ninja-list">
            { ninjasList  }
        </div>
    );

}

export default Ninjas