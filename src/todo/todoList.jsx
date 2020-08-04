import React from 'react'
import { render } from 'react-dom'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td>{todo.description}</td>
                <IconButton style='danger' icon='trash-o' 
                    onClick={() => props.handleRemove(todo)}/>
            </tr>
        ))
    }

    return (
        <table className='table mt-2'>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}