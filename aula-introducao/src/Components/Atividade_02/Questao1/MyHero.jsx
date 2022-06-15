import React from "react";
import Tengen from "./IMG/tengen-uzui-esposas-demon-slayer_cqvg.jpg"

const MyHero = (props) => {
    const {HeroName} = props;
    return (
        <div>
            <img className="Fighters" src={Tengen}/>
            <h2>My name is {HeroName}</h2>
        </div>
    )
}

export default MyHero;