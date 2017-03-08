import React from 'react';

export default function Bottomtext (props) {
    return (
        <div className="bottom-input">
            <label>Bottom Text: </label>
            <input type="text" onChange={props.bottomChangeHandler}/>
        </div>
    );
}
