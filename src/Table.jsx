import './App.css';
import {useState} from "react";
import React from "react";
import {gsap, TimelineMax, TweenMax} from 'gsap';
import ScrollMagic from 'scrollmagic';

export default function Table(props) {
    var controller = new ScrollMagic.Controller();
    var revealElements = document.getElementsByClassName("digit");
    for (var i=0; i<revealElements.length; i++) { // create a scene for each element
        new ScrollMagic.Scene({
            triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
            offset: 50,												 // start a little later
            triggerHook: 0.9,
        })
            .setClassToggle(revealElements[i], "visible") // add class toggle
            .addTo(controller);
    }
    let opacity = 'hidden'
    let opacity_word = 'hidden_word_show'
    let opacity_pic = 'card_box_com'
    let document_length = document.documentElement.scrollTop
    for (let i = 17; i < document.querySelectorAll('div').length; i++) {
        let example = document.querySelectorAll('div')[i].scrollTop
        let example_document = document.querySelectorAll('div')[i]
        if (example == 0 ){
            let timer= ''
            let alpha= 0
            timer = setInterval(function () {
                alpha += 0.5;
                //判断当前透明度等于透明度时，停止定时器
                if (alpha == 1) {
                    clearInterval(timer);
                }
                example_document.style.opacity = alpha ;
                console.log(alpha)
            }, 300)
        }
    }

    if (document_length < 600 && document_length > 400) {
        opacity = 'hidden'
        opacity_pic = 'card_box_com_hidden'
        opacity_word = 'hidden_word'
    } else if (document_length > 640 && document_length < 660) {
        opacity = 'passage'
        opacity_pic = 'card_box_com'
        opacity_word = 'hidden_word'
        console.log(opacity_word,document_length)
    } else if (document_length > 660 && document_length < 700) {
        opacity = 'hidden'
        opacity_pic = 'card_box_com_hidden'
        opacity_word = 'hidden_word_show'
        console.log(opacity_word, document_length)
    }

    return (
        <div>
            <header className="App-header">
                <div className="flex_row">
                    <div className="card">
                        <img src="https://i.postimg.cc/9F8L6wG7/Picture1.png" className={props.myProp}
                             alt="logo" />
                    </div>
                    <div className="card">
                        <img src="https://i.postimg.cc/XJzy45gr/Screen-Shot-2022-12-24-at-14-57-49.png"
                             className={props.myProp}
                             alt="logo" />
                    </div>
                    <div className="card">
                        <img src="https://i.postimg.cc/rsps0wQv/Screen-Shot-2022-12-24-at-15-05-51.png"
                             className={props.myProp}
                             alt="logo" />
                    </div>
                    <div className="card">
                        <img src="https://i.postimg.cc/Y0B8MTRG/Picture1.png" className={props.myProp}
                             alt="logo" />
                    </div>
                </div>
                <div className={opacity}>In my senior year, I worked as an intern full-stack engineer at PepsiCo.</div>
                <div className={opacity}>I was mainly responsible for visualizing real-time sales data with Angular and
                    using Prometheus for alarms.
                </div>
                <div className="flex_row1" style={{height: "200px"}}>
                    <div className="card_pic">
                        <img src="https://i.postimg.cc/J4LYX8z0/20200508151345-19.png" className={opacity_pic}
                             alt="logo"/>
                    </div>
                    <div className="card_pic">
                        <img src="https://i.postimg.cc/SKndvBbb/Pizza-Hut-svg.png" className={opacity_pic}
                             alt="logo"/>
                    </div>
                    <div className="card_pic">
                        <img src="https://i.postimg.cc/6pyCWCjd/Pepsi-bi-2006-svg.png" className={opacity_pic}
                             alt="logo"/>
                    </div>
                </div>
                <div id="reveal-elements">
                    <div className="box1 digit blue"><p>After university I decided to study at Trinity College Dublin</p></div>
                    <div className="box1 digit turqoise"><p>Hoping to equip me with more skills.</p></div>
                </div>
            </header>
        </div>
    )
}
