// import React, { useState } from 'react'
// import { useTodo } from '../context';

// function TodoForm() {
    
//     const [todo, setTodo] = useState("");

//     const {addTodo}=useTodo()

//     const add = (e)=>{
//         if(!todo) return

//         addTodo({id:Date.now(), todo:todo, completed:false})
//         // setTodo("")
//     }

//     return (
//         <form  onSubmit={add}
//         className="flex">
//             <input
//                 value={todo} //wiring
//                 onChange={(e)=>setTodo(e.target.value)}
//                 type="text"
//                 placeholder="Write Todo..."
//                 className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
//             />
//             <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
//                 Add
//             </button>
//         </form>
//     );
// }

// export default TodoForm;

import React, { useState } from 'react';
import { useTodo } from '../context';

function TodoForm() {
  const [text, setText] = useState('');
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault(); // prevent page refresh
    if (!text.trim()) return;

    addTodo({ text, completed: false });
    setText('');
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
