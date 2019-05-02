import React from 'react'

export default function ToDos({currentToDos, deleteToDo}) {
    return (
        <div className="list-group">
        {currentToDos.map((eaToDo)=>(
            <div 
                className="list-group-item list-group-item-action list-group-item-dark"
            >
                {eaToDo}
                
                <button 
                    onClick={(e)=>{
                        deleteToDo(e.target.value)
                    }} 
                    value={eaToDo}
                >
                    X
                </button>
            </div>
        ))}
        </div>
    )
}
