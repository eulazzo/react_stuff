import React,{Component} from 'react'

const Ninjas = ({ninjas})=> {
  
  /*Ways to do it */


    // const ninjasList = ninjas.map(ninja=>{
    //   if(ninja.age>10015){
    //     return (
          
    //       <div className="App" key={ ninja._id }>
    //           <div>Name:{ninja.name}</div>
    //           <div>Age:{ninja.age}</div>
    //       </div>
    //     )
    //   }else{
    //     return(
    //       <div>
    //          <p>Nennhum usuario encontrado</p>
    //       </div>
    //     )
    //   }
         
    // })

    // const ninjasList = ninjas.map(ninja=>{
    //     return ninja.age<15 ? (
    //         <div className="App" key={ ninja._id }>
    //           <div>Name:{ninja.name}</div>
    //           <div>Age:{ninja.age}</div>
    //         </div>
    //   ):null;
    // })
    return(
        <div className="ninja-list">
            {/* { ninjasList  } */}
            {
                ninjas.map(ninja=>{
                  return ninja.age<15 ? (
                      <div className="App" key={ ninja._id }>
                        <div>Name:{ninja.name}</div>
                        <div>Age:{ninja.age}</div>
                      </div>
                  ):null;
                })
            }
        </div>
    );

}

export default Ninjas