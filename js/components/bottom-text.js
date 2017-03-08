import React from 'react';

export default function Bottomtext (props) {
    return (
        <div className="bottom-input">
            <label>Bottom Text: </label>
            <input type="text" value={props.bottomText} onChange={props.bottomChangeHandler}/>
        </div>
    );
}
