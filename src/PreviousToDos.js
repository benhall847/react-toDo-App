import React from 'react'

export default function PreviousToDos({previousToDos}) {
    return (
        <div  className="list-group">
            {previousToDos.map((eaToDo)=>(
                <div 
                    className="list-group-item list-group-item-action list-group-item-dark"
                >
                {eaToDo}
                </div>
            ))}
        </div>
    )
}
