import Image from "next/image";
import logoBlack from "../../public/logoBlack.svg"
import {AnimatePresence} from "framer-motion";
import Nav from "./Nav";
import NavDesktop from "./NavDesktop";
import React, {useEffect, useState} from "react";
import Logo from "../components/logo"

export default function Index() {

    const [isActive, setIsActive] = useState(false);

    function scroll() {
        if (isActive) {
            // Get the current page scroll position in the vertical direction
            const scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;


            // Get the current page scroll position in the horizontal direction

            const scrollLeft =
                window.pageXOffset || document.documentElement.scrollLeft;


            // if any scroll is attempted,
            // set this to the previous value
            window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
            };
        } else {
            window.onscroll = function() {};
        }
    }

    useEffect(() => {
        scroll()
    }, []);

    const toggleActive = () => {
        setIsActive(!isActive);

        if (!isActive) {
            // Get the current page scroll position in the vertical direction
            const scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;


            // Get the current page scroll position in the horizontal direction

            const scrollLeft =
                window.pageXOffset || document.documentElement.scrollLeft;


            // if any scroll is attempted,
            // set this to the previous value
            window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
            };
        } else {
            window.onscroll = function() {};
        }
    };

    return (
        <header className="flex items-center justify-between gap-2.5">
            <div className="flex items-center justify-center gap-2.5 z-20">
                <Logo className={isActive ? "logoActive" : "logo"} />
                <p className={`text-lg ${isActive ? "logoTextActive" : "logoText"}`}>PHOTOGRAPHY</p>
            </div>
            <div onClick={toggleActive} className={`button ${isActive}`}>
                <div className={`burger ${isActive ? "burgerActive" : ""} lg:hidden`}></div>
            </div>
            <div className={"hidden lg:block"}>
                <NavDesktop />
            </div>
            <AnimatePresence mode={"wait"}>
                {isActive && <Nav/>}
            </AnimatePresence>
        </header>
    )
}