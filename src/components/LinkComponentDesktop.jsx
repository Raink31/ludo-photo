import Link from 'next/link';

import { motion } from 'framer-motion';

import { slide, scale } from "../app/anim";

export default function Index({data, isActive, setSelectedIndicator}) {

    const { title, href, index} = data;

    return (
        <div onMouseEnter={() => setSelectedIndicator(href)} className={"link"}>
            <motion.div
                variants={scale}
                animate={isActive ? "open" : "closed"}
                className={"indicator"}>
            </motion.div>
            <Link href={href}>{title}</Link>
        </div>
    )
}