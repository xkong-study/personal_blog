import "./App.css";
import { AnimatePresence,  motion, useScroll, useSpring, useTransform, MotionValue, Variants } from "framer-motion/dist/framer-motion"
import React from "react";
import Map_ from "./relation.jsx"
const cardVariants: Variants = {
    offscreen: {
        y: 300
    },
    onscreen: {
        y: 50,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

function Card({ emoji, hueA, hueB, word }) {
    const background = "pink";
    return (
        <motion.div
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            <div className="splash" style={{ background }}>
                dsfsdfsfsf
            </div>
            <motion.div className="card1" variants={cardVariants}>
                <div style={{fontSize:"60px"}}>{word}</div>
            </motion.div>
        </motion.div>
    );
}

const food = [
    ["🍅", 340, 10, "personal blog"],
    // ["🍊", 20, 40, "fefewfw"],
];

export default function App() {
    return food.map(([emoji, hueA, hueB,word]) => (
        <header className="App-header">
        <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} word={word}/>
        </header>
    ));
}
