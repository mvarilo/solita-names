import React from 'react'
import { Table } from 'react-bootstrap'

const Names = ({ names }) => {

    return (
        <Table striped>
            <tbody>
                {names.map(name => (
                    <tr key={name.name}>
                        <td>{name.name}</td>
                        <td>{name.amount}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}


export default Names;