import React from "react";
import ReactDOM from "react-dom";

import { Display } from './App';


const App = () => {
    return (
        <div><Display></Display></div>
    )
}

ReactDOM.render(App(), document.getElementById("app"));