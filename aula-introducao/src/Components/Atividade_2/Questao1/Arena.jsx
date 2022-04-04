import React from "react";
import ArenaImg from "./IMG/main-qimg-049c3478f9cf0c9002f68b8dc1d40a45.gif"

const Arena = (props) => {
    const {ArenaName} = props;
    return (
        <div >
            <img className="ArenaDeBatalha" src={ArenaImg}/>
            <h1>We are fighting in {ArenaName}</h1>

            {React.Children.map(props.children, arena=> {
                return React.cloneElement(arena,{...props});
            })}

        </div>
    )
}

export default Arena;