import './App.css';
import Container from './container.jsx'
import $ from 'jquery'
import React from "react";
import Table from './Table.jsx'
import classnames from "classnames";
import {useEffect, useState} from "react";
import Map_ from "./relation.jsx"

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="intro">
                    <Container/>
                    <Map_/>
                </div>
            </header>
        </div>
    );
}

