import React from 'react'
import {Link} from 'react-router-dom'

export default function DropDown() {
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                menu
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link to='/' className="dropdown-item">home</Link>
                <Link to='/todo' className="dropdown-item">ToDos</Link>
                <Link to='/add' className="dropdown-item">Add ToDos</Link>
                <Link to='/previous' className="dropdown-item">Previous ToDos</Link>
            </div>
        </div>
        
    )
}
