
import  {Schema} from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Component, createElement, useState, useEffect } from 'react';

const client = generateClient<Schema>();

export function persistTrackingInfo(location, cumTime) {

    if (location && cumTime) {
        const msg = "persist tracking info: "+location +" for "+ cumTime;
        alert(msg);
        createTodo(msg);
    }
            return (<p>{msg}</p>);
}


  function createTodo(myContent) {
    client.models.Todo.create({ content:myContent  });
  }

  function deleteTodo(id) {
    client.models.Todo.delete({ id })
  }

export function Persister () {

    const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);


		  useEffect(() => {
            client.models.Todo.observeQuery().subscribe({
              next: (data) => setTodos([...data.items]),
            });
          }, []);

  //  return (<p>tracking info</p>);

        return(
                      <ul>
                                 {todos.map((todo) => (
                                   <li
                                   onClick={() => deleteTodo(todo.id)}
                                   key={todo.id}>{todo.content}</li>
                                 ))}
                               </ul>
        );

  }



