import React from 'react'

const Filter = ({ handleSearchName }) => {

    return (
        <p>
            Filter by name: &nbsp;
            <input onChange={handleSearchName} />
        </p>
    )
}

export default Filter