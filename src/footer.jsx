import Logo from "./Logo";
import React from "react";
import "./App.css";
export default function Footer() {
    return (
        <footer>
            <a href="https://www.framer.com/motion/" target="_blank" rel="noreferrer">
                <Logo />
            </a>
            <a
                href="https://www.framer.com/docs/scroll-animations/"
                target="_blank"
                rel="noreferrer"
            >
                <code>xkong's introduction</code>
            </a>
        </footer>
    );
}
