import React from 'react'

const Names = ({ names }) => {

    return (
        <>
            {names.map(name => (
                <p key={name.name}>
                    {name.name} {name.amount} &nbsp;
                </p>
            ))}
        </>
    );
}


export default Names;