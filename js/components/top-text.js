import React from 'react';

export default function Toptext (props) {
    return (
        <div className="top-input">
            <label>Top Text: </label>
            <input type="text" value={props.topText} onChange={props.topChangeHandler}/>
        </div>
    );
}
