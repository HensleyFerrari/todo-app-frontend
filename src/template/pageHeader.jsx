import React from 'react'

export default props => (
    <header className='border-bottom mt-4'>
        <h2>{props.name} <small>{props.small}</small></h2>
    </header>
)