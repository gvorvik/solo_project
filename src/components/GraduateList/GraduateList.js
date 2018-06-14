import React from 'react';

const GraduateTable = (props) => {
    return <div>
        <h1>I am an example of a functional component!</h1>
        <ul>{props.graduates}</ul>
    </div>
}

export default GraduateTable;