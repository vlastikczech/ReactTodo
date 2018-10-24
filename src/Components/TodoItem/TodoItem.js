import React from 'react';

const todoList = props => {
    return (
        <div>
            <ul>
                {props.list.map((items, index) => (
                    <li key={index}>{items}</li>
                ))}
            </ul>
        </div>
    )

}

export default todoList