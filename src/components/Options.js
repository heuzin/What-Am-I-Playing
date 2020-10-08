import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeletOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((option) => <Option handleDeleteOption={props.handleDeleteOption} key={option} optionText={option}/>)
            }
        </div>
    )
}

export default Options;