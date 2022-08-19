import React, { useState } from "react";
import {MdDeleteForever} from 'react-icons/md'
import {MdOutlineDone} from 'react-icons/md'

const Form2 = ({removeTodo, completeTodo}) => {
    return(
        <div className='icons'>
            <MdDeleteForever onClick={() => removeTodo}/>
            <MdOutlineDone onClick={() => completeTodo}/>
        </div>
    )
}

export default Form2;