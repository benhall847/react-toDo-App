import React from 'react'

export default function AddToDo({currentValue,onChange, onSubmit}) {
    return (
        <div>
            <div className="form-group">

            <input 
                type="text" 
                className="form-control"
                onChange={(e)=>{
                    onChange(e.target.value)
                }}
                value={currentValue}
            />
            </div>
            <button 
                onClick={onSubmit}
                type="submit"
                className="btn btn-primary"
            >
                submit it!
            </button>
        
        </div>
    )
}
