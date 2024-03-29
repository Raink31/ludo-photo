import React, { useState } from "react";
import { motion } from "framer-motion";
import {usePathname} from "next/navigation";
import {menuSlide} from "@/app/anim";
import LinkComponent from "../components/LinkComponent";
import Curve from '../components/Curve'

import FacebookJSX from "../components/facebook"
import InstagramJSX from "../components/instagram"

const navItems = [
    {
        title: "Accueil",
        href: "/",
    },
    {
        title: "Mariage",
        href: "/mariage",
    },
    {
        title: "Portait",
        href: "/portrait",
    },
    {
        title: "Contact",
        href: "/contact",
    },
]

export default function Index() {

    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    return (
        <motion.div
            variants={menuSlide}
            initial={"initial"}
            animate={"enter"}
            exit={"exit"}
            className={"menu 2xl:bg-transparent"}
            >
            <div className={"menuBody"}>
                <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={"nav"}>
                    <div className={"navHeader 2xl:hidden"}>
                        <p>Navigation</p>
                    </div>
                    {
                        navItems.map((data, index) => {
                            return <LinkComponent
                            key={index}
                            data={{...data, index}}
                            isActive={selectedIndicator === data.href}
                            setSelectedIndicator={setSelectedIndicator}
                            href={data.href}
                            >
                                {data.title}
                            </LinkComponent>
                        })
                    }
                </div>
                <div className={"navFooter 2xl:hidden"}>
                    <div className="flex gap-3 mb-2">
                        <a href="https://www.facebook.com/profile.php?id=100089336414991" target="_blank">
                            <FacebookJSX />
                        </a>
                        <a href="https://www.instagram.com/ludovicfieret.photography/?igsh=YnFxNTltM3M0bGJm" target="_blank">
                            <InstagramJSX />
                        </a>
                    </div>
                    <p>06.99.38.53.94</p>
                    <p>ludovicfieret.photography@gmail.com</p>
                </div>
            </div>
        </motion.div>
    )
}