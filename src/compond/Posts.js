import React from 'react';

function Posts(props) {
    return (
        <div>
            <p>{props.post.title}</p>
        </div>
    );
}

export default Posts;