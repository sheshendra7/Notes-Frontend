import React from 'react'
import './ToDo.css'

const ToDo = ({text, updateMode, deleteTodo }) => {
    return (
        <div className='todo'>
             
            <div className='text'>{text}</div>
            <div className='icons'>
            <div   type='button' className='updateIcon' onClick={updateMode}>Update</div>
            <div type='button' className="deleteIcon" onClick={deleteTodo} >Delete</div>
            </div>
            
        </div>
    )
}

export default ToDo