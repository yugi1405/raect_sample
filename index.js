import React,{createElement} from 'react';
import ReactDOM from 'react-dom/client';
import First from './First';
/*import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/
/*document.getElementById("root").innerHTML="react";
const ele = React.createElement( "h1",{},"hello world", createElement("h5",{},"welcome" ));
console.log("ele",ele);
 
var title="react js"
var arr=["i","helo"]
const element=
<div>
  <h1 style={{color:"teal",fontsize:"10px"}}>
    hello india!{title} {10+20}{false ?"true":"false"}
    </h1>{arr.map((item,index)=>(
      <h1 key={index}>{item}
    ))}
  </h1>
</div>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(ele); */
var name = "react";
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <First 
      name ={"First Component"}  
      age={"34"} 
      feature={"name"} 
      isBool={true}
      obj={{name:'React' ,age:"56" }} 
    />
  );
