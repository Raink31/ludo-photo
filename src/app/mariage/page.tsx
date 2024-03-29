"use client"

import facebook from "../../../public/facebook.svg"
import instagram from "../../../public/instagram.svg"

import Image from "next/image";
import React from "react";
import Link from "next/link";
import Header from "../../components/Header"
import placeholderMariage from "../../../public/placeholderMariage.jpg";

export default function Home() {

    return (
        <main className={`px-8 py-8 relative h-max 2xl:px-40`}>
            <Header/>
            <h1 className="text-center text-3xl my-12 2xl:text-4xl">Prestation Mariage</h1>
            <section className="flex flex-col items-center gap-10 my-10">
                <p className={"text-center text-xl leading-10 2xl:text-3xl 2xl:leading-normal 2xl:opacity-60"}>{"J'accorde une grande importance à l’émotion et à la spontanéité pour chacune de mes photographies. Mon but n’est pas seulement de créer de simples supports visuels, mais de capter vos sentiments pour vous permettre de vous remémorer chaque détail de ce jour qui marque l’une des étapes les plus importantes de votre vie."}</p>
                <div className={"flex flex-col gap-10 lg:flex-row flex-wrap justify-center"}>
                    <Image
                        src={placeholderMariage}
                        alt="mariage1"
                        width={350}
                        height={200}
                        className="rounded-2xl 2xl:w-[700px]"
                        priority
                    />
                    <Image
                        src={placeholderMariage}
                        alt="mariage1"
                        width={350}
                        height={200}
                        className="rounded-2xl 2xl:w-[700px]"
                        priority
                    />
                    <Image
                        src={placeholderMariage}
                        alt="mariage1"
                        width={350}
                        height={200}
                        className="rounded-2xl 2xl:w-[700px]"
                        priority
                    />
                    <Image
                        src={placeholderMariage}
                        alt="mariage1"
                        width={350}
                        height={200}
                        className="rounded-2xl 2xl:w-[700px]"
                        priority
                    />
                    <Image
                        src={placeholderMariage}
                        alt="mariage1"
                        width={350}
                        height={200}
                        className="rounded-2xl 2xl:w-[700px]"
                        priority
                    />
                    <Image
                        src={placeholderMariage}
                        alt="mariage1"
                        width={350}
                        height={200}
                        className="rounded-2xl 2xl:w-[700px]"
                        priority
                    />
                </div>
            </section>
            <section className="flex justify-center mb-10 text-2xl">
                <button
                    className="h-12 justify-center rounded-md bg-[#E65F5C] px-6 transition hover:scale-110 2xl:px-8 2xl:h-16">
                    <span className="text-[#EEE0D3]"><Link href="/contact">Contactez moi</Link></span>
                </button>
            </section>
            <footer className="pb-2 text-lg flex flex-col items-center">
                <div className="flex gap-3 mb-2">
                    <a href="https://www.facebook.com/profile.php?id=100089336414991" target="_blank">
                        <Image
                            src={facebook}
                            alt="Facebook link"
                            width={35}
                            height={35}
                        />
                    </a>
                    <a href="https://www.instagram.com/ludovicfieret.photography/?igsh=YnFxNTltM3M0bGJm"
                       target="_blank">
                        <Image
                            src={instagram}
                            alt="Instagram link"
                            width={35}
                            height={35}
                        />
                    </a>
                </div>
                <p>06.99.38.53.94</p>
                <p>ludovicfieret.photography@gmail.com</p>
            </footer>
        </main>
    );
}
