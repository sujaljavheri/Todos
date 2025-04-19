// import { useContext,createContext } from "react";

// export const TodoContext = createContext({
//     todos:[
//         {
//             id:1,
//             title:"Learn React",
//             completed:false,
//         }
// ],

// addTodo:(id)=>{},
// updateTodo:(id,todo) => {},
// deleteTodo:(id)=> {},
// toggleComplete:(id)=>{}
// });

// export const useTodo =()=>{
//     return useContext(TodoContext);
// }

// export const TodoProvider = TodoContext.Provider; 

import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      text: "Learn React",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
