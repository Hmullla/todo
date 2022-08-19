import React, { useState } from 'react';

const AddTask = ({onAdd}) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        onAdd({title, text})

        setTitle('');
        setText('');

    }
    return (
        <form className='addForm' onSubmit={onSubmit}>
            <div className='con'>
             <div className='title'>
                <h1>To Do List</h1>
                <input type="text" 
                placeholder='please edit title' 
                value={title}
                onChange={ (e) => setTitle(e.target.value)}
                />
             </div>
             <div className='text'>
                <input type="text"
                placeholder='please add to do'
                value={text}
                onChange={ (e) => setText(e.target.value)}
                />
             </div>
             <input className='button' type="submit" value="save task" />
            </div>
        </form>
    )

}


// const Form = ({input, setInput, todos, setTodos}) => {
//     const onInputChange = (event) => {
//         setInput(event.target.value);
//     };
    
//     const onFormSubmit = (event) => {
//         // event.preventDefault();
//         // props.onSubmit({
//         //     id: Math.floor(Math.random() * 10000),
//         //     text: input
//         // })
//         setInput("");
//     }
//     return (
//         <form onSubmit={onFormSubmit}>
//             <input type="text" 
//             placeholder='Add to the todo list' 
//             className='userInput' 
//             value={input} 
//             required onChange={onInputChange}/>
//             <button className='add' type='submit'>+</button>
//         </form>
//     )
// };

// export const ToDoList = ({todos, setTodos}) => {
//     return(
//         <div>
//             {todos.map((todo)=> {
//                 <li className="todo-list" key={todo.id}>
//                     <input type="text" 
//                     value={todo.title} 
//                     className="list" 
//                     onChange={(event) => 
//                     setTodos(event.currentTarget)}/>
//                 </li>
//             }
            
//             )}
//         </div>
//     )
// }


export default AddTask;
