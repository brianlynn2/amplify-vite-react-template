import './App.css';
import BrianSite from './components/BrianSite.jsx';

import {   Routes, Route, useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import  {  useEffect  } from "react";

import { createBrowserHistory } from "history";
import doScroll from './components/Scroller.jsx'




function App() {


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
    const {  pathname } = location;

    const myloc = pathname + (searchParams?  "?" + searchParams : "");
//    alert("loc = "+myloc + ", sp ="+searchParams);

 // const url = window.location.href;
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

