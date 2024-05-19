import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import './App.css';
import {  BrowserRouter, Routes, Route, useNavigate, useSearchParams, useHistory } from 'react-router-dom'
import React, { useState, useEffect, useRef } from "react";
import { createBrowserHistory } from "history";
import BrianSite from './components/BrianSite.jsx';
import doScroll from './components/Scroller.jsx'

const client = generateClient<Schema>();
const history = createBrowserHistory();;
//const myNav = useNavigate();

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }

  function deleteTodo(id: string) {
    client.models.Todo.delete({ id })
  }

  function renderAuthToDoList() {

  return (

        <Authenticator>
          {({ signOut, user }) => (
                <main>
                  <h1>{user?.signInDetails?.loginId}'s todos</h1>
                  <button onClick={createTodo}>+ new</button>
                  <ul>
                    {todos.map((todo) => (
                      <li
                      onClick={() => deleteTodo(todo.id)}
                      key={todo.id}>{todo.content}</li>
                    ))}
                  </ul>
                  <div>
                    🥳 App successfully hosted. Try creating a new todo.
                    <br />
                    <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
                      Review next step of this tutorial.
                    </a>
                  </div>
                  <button onClick={signOut}>Sign out</button>
                </main>
          )}
        </Authenticator>
      );
    }


  function renderBrianSite() {

      var ret =  routeSite();

        useEffect(() => {
          // Update the document title using the browser API
          doScroll();
        });

      return <main>{ret}</main>
  }


function routeSite() {
  const nav = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

   return (
            <Routes>
                {createRoute("/", "", nav, searchParams)}
                {createRoute("/bio", "Bio", nav, searchParams)}
                {createRoute("/bio?topic=*", "Bio", nav, searchParams)}
                {createRoute("/port", "Portfolio", nav, searchParams)}
                {createRoute("/news", "News", nav, searchParams)}
                {createRoute("/book", "Book", nav, searchParams)}
            </Routes>
        );
}


function createRoute (path, sel, nav, searchParams) {

   var elem = <BrianSite sel={sel} hist={history} nav={nav} searchParams={searchParams} />;
    return (
        <Route path={path} element={elem} />
        );
}


  return (renderBrianSite());
    //return ( renderAuthToDoList());
  // return <main><BrianSite /></main>;
  // return <main><h1>test</h1></main>;
 }

export default App;
