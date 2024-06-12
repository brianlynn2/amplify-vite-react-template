
import './App.css'
import BrianSite from './components/BrianSite.jsx';

import {   Routes, Route, useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import  {  useEffect  } from "react";

import { createBrowserHistory } from "history";
import doScroll from './components/Scroller.jsx'

import { generateClient } from "aws-amplify/data";



function App() {

/*
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
*/

let history = createBrowserHistory();

  function renderBrianSite() {

      var ret =  routeSite();

        useEffect(() => {
          // Update the document title using the browser API
          doScroll();
        });

      return <main>{ret}</main>
  }


function routeSite() {


 // let auth = <AuthToDoList/>;

   return (
            <Routes>
                {createRoute("/", "" )}
                {createRoute("/bio", "Bio")}
                {createRoute("/bio?topic=*", "Bio")}
                {createRoute("/port", "Portfolio")}
                {createRoute("/news", "News")}
                {createRoute("/book", "Book")}
                { /* <Route path="/todo" element={auth}/>  */ }
            </Routes>
        );
}


function createRoute (path :string, sel: string  ) {
  const nav = useNavigate();
  let [searchParams] = useSearchParams();
    const location = useLocation();
    const { hash, pathname, sp } = location;
    const myloc = pathname + (searchParams?  "?" + searchParams : "");
//    alert("loc = "+myloc + ", sp ="+searchParams);

  const url = window.location.href;
   var elem = <BrianSite sel={sel} hist={history} nav={nav} searchParams={searchParams} location={myloc} />;
    return (
        <Route path={path} element={elem} />
        );
}



//return ( ret );

  return (renderBrianSite());
    //return ( renderAuthToDoList());
  // return <main><BrianSite /></main>;
  // return <main><h1>test</h1></main>;

}

export default App;

