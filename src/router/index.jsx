import App from '../App'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";

const BaseRouter=()=>(
    <Router>
        <Routes>
            <Route  path="/" element={<App/>}>
            </Route>
        </Routes>
    </Router>
)
export default BaseRouter
