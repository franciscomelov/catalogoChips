import React from 'react';


const Card = (props) =>{
  const {codigo, carro, id,año, notas}= props;
    return(
      <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc ">
        <img alt="RoBoTa" src={`https://robohash.org/${id}?size=200x200`} />
        <div >
          <h2>{codigo}</h2>
          <h3>{carro}</h3>
          <p>{año}</p>
          <p>{notas}</p>
        </div>
      </div>
      
    );
}

export default Card;