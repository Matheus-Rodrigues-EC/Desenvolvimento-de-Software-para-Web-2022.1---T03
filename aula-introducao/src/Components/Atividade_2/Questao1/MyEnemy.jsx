import React from "react";
import Gyutaro from "./IMG/quem-e-gyutaro-em-demon-slayer-personagem-e-dublador-explicados.jpg"
import SFJF from "./IMG/"

const MyEnemy = (props) =>{
    const {EnemyName} = props;
    return(
        <div>
            <img className="Fighters" src={Gyutaro}/>
            <h2>My name is {EnemyName}</h2>
        </div>
    )
}

export default MyEnemy;