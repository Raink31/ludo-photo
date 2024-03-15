import React, { useState } from "react";
import {usePathname} from "next/navigation";
import LinkComponent from "../components/LinkComponentDesktop";

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
        <div className={"lg:bg-transparent"}>
            <div className={"menuBody"}>
                <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={"nav"}>
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
            </div>
        </div>
    )
}