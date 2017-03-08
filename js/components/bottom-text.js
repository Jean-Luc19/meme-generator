import React from 'react';

export default function Bottomtext (props) {
    return (
        <div className="bottom-input">
            <label>Top Text: </label>
            <input type="text" onChange={props.bottomText}/>
        </div>
    );
}
