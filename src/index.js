import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Hello!</h1>, document.getElementById('root'));

var h1= document.createElement("h1");
h1.innerHTML="Hi Nikhil";
document.getElementById("root").appendChild(h1);