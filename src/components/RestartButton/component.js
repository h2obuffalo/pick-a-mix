import React from 'react';

const RestartButton = (props) => {
    return <button onClick={() => props.handleSubmit()} >Start Over</button>
};

export default RestartButton;