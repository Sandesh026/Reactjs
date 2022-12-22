import React from 'react';

function Comments(props) {
    return (
        <div>
            <p>{props.comment.title}</p>
        </div>
    );
}

export default Comments;