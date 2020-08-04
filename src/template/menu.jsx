import React from 'react'

export default props => (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a className='navbar-brand' href="#">TodoApp</a>

        <div className="navbar-collapse collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className='nav-item'>
                    <a className="nav-link" href="#/todos">Tasks</a>
                </li>
                <li className='nav-item'>
                    <a className="nav-link" href="#/about">About</a>
                </li>
            </ul>
        </div>
    </nav>
)