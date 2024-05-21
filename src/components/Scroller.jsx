

var scrollElem = null;
var scrollId = null;

export default function setScrollTo(elem) {
   // alert("set scroll to "+ elem);
    scrollElem = elem;
}

export  function setScrollId(id) {
    scrollId = id;
}

export function doScroll(label)  {
 //       alert("do scroll with "+scrollElem);
        if (!scrollElem) {
            if (!scrollId) return;
            scrollElem = document.getElementById(scrollId);
            if (!scrollElem) return;
 //           alert("scrolling to id "+scrollId);
        }
        if (label) alert("do scroll, label is "+label);
        scrollElem.scrollIntoView({ behavior: 'instant', block: 'start' })
 }