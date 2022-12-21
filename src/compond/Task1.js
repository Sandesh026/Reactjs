import React from 'react';

function Task1(props) {
    console.log(props);
    console.log(props.firstname);
    return (
        <div>
            <p> {props.data.title}</p>
        </div>
    );
}

export default Task1;