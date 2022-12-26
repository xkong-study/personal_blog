import './App.css';
import * as echarts from 'echarts'
import $ from "jquery"
import React from "react";
import file_kong from "./xkong_skill.json"
import {useState, useEffect} from "react";

export default function Map_() {
    let [main, setMain] = useState('')
    const editJsonFile = require("edit-json-file");
    let file = editJsonFile(file_kong);
    var graph = file.path
    const option = {
        tooltip: {},
        legend: [
            {
                data: graph.categories.map(function (a) {
                    return a.name;
                })
            }
        ],
        series: [
            {
                name: 'Les Miserables',
                type: 'graph',
                layout: 'none',
                data: graph.nodes,
                links: graph.links,
                categories: graph.categories,
                roam: true,
                label: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                },
                labelLayout: {
                    hideOverlap: true
                },
                scaleLimit: {
                    min: 0.4,
                    max: 2
                },
                lineStyle: {
                    color: 'source',
                    curveness: 0.3
                }
            }
        ]
    }
    useEffect(() => {
        var dom = document.getElementById("chart-container");
        setMain(dom)
    }, [main])
    if (main !== "") {
        var myChart = echarts.init(main);
        myChart.setOption(option);
    }
    return (
        <div>
            <div>
                <header className="App-header">
                    <div id="chart-container"></div>
                </header>
            </div>
        </div>
    )
}
