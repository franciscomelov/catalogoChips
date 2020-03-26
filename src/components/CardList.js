import React from 'react'
import Card from './Card'

const CardList = ({robots})=>{
  // if(true){
  //   throw new Error ("Nooooo")
  // }
  return (
    <div className="tc">
    {
      robots.map((user, i) =>{
      return  (
               <Card key={i} 
                id={robots[i].id}
                codigo={robots[i].codigo} 
                año={robots[i].año} 
                 carro={robots[i].carro}
                 notas={robots[i].notas}
                />
              )
      })
    }
    </div>
  )
}

export default CardList;