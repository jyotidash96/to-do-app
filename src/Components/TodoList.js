import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, setTodos }) =>{
//console.log(todos);
    return(
<div className="todo-container">
    <ul className="todo-list">
{todos.map(todo =>(

 <Todo
 todo={todo}
 key={todo.id} 
 setTodos={setTodos}
 todos={todos}

  text={todo.text}
  />
))}

    </ul>
  
</div>

    )
}

export default TodoList;