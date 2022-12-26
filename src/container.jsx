import './App.css';
import {useState, useEffect} from "react";
import Table from "./Table"
import React from "react";

export default function Container() {
    const [state1, setState1] = useState('shake')
    const [state, setState] = useState('box')
    const [state4, setState4] = useState('shake4')
    const [state_card, setState_card] = useState('box_static')

    function handleScroll() {
        if (document.documentElement.scrollTop < 300) {
            let alpha = 100;
            let imgObj = document.querySelectorAll('img')[0];
            let p_opacity1 = document.querySelectorAll('p')[1];
            let p_opacity2 = document.querySelectorAll('p')[2];
            let p_opacity = document.querySelectorAll('p')[0];
            let imgObj1 = document.querySelectorAll('img')[1];
            imgObj1.style.opacity = 100;
            alpha -= (document.documentElement.scrollTop) / 2;
            imgObj.style.opacity = alpha / 100;
            p_opacity.style.opacity = alpha / 100;
            p_opacity1.style.opacity = 100;
            p_opacity2.style.opacity = 100;
            setState('box')
            setState1('shake')
            setState4('shake4')
            setState_card('box_static')
        } else if (document.documentElement.scrollTop > 300 && document.documentElement.scrollTop < 530) {
            let alpha = 100;
            let p_opacity1 = document.querySelectorAll('p')[1];
            let p_opacity2 = document.querySelectorAll('p')[2];
            let imgObj1 = document.querySelectorAll('img')[1];
            alpha -= document.documentElement.scrollTop / 5;
            imgObj1.style.opacity = alpha / 100;
            p_opacity1.style.opacity = alpha / 100;
            p_opacity2.style.opacity = alpha / 100;
            setState('show_box')
            setState1('shake')
            setState4('shake4')
            setState_card('box_static')
            if (document.documentElement.scrollTop > 530) {
                setState_card('card_box')
            }
            ;
        } else if (document.documentElement.scrollTop > 530 && document.documentElement.scrollTop < 640) {
            setState('show_box')
            setState4('card4')
            setState1('card1')
            setState_card('card_box')
        } else if (document.documentElement.scrollTop > 640) {
            let p_opacity3 = document.querySelectorAll('p')[7];
            setState('box')
            setState4('card4')
            setState1('card1')
            setState_card('box_static')

        }
        ;
    }

    window.onscroll = () => handleScroll()

    return (
        <div>
            <div>
                <header className="App-header">
                    <div className="flex_row" style={{height: "200px"}}>
                        <div className={state1}>
                            <img src="https://s1.ax1x.com/2022/12/23/zjT4JI.jpg" className="App-logo-school" alt="logo"
                                 border="10"/>
                        </div>
                        <div className="card2">
                            <p>Hi interviewers!</p>
                        </div>
                    </div>
                    <div className="flex_row">
                        <div className="card3">
                            <p>My name is Xiangrui Kong</p>
                            <p>English name is Kelley</p>
                        </div>
                        <div className={state4}>
                            <img src="https://s1.ax1x.com/2022/12/23/zjHX2q.jpg" className="App-logo-school" alt="logo"
                                 border="10"/>
                        </div>
                    </div>
                    <p className={state}>In the university, I tried to learn a lot of things from the front end to the
                        back end, etc.</p>
                    <Table myProp={state_card}/>
                </header>
            </div>
        </div>
    );
}

