"use client"

import facebook from "../../public/facebook.svg"
import instagram from "../../public/instagram.svg"
import placeholderMariage from "../../public/placeholderMariage.jpg"
import placeholderPortrait from "../../public/placeholderPortrait.jpg"

import Image from "next/image";
import React from "react";
import Character from "../components/Character"
import Link from "next/link";
import Header from "../components/Header"

export default function Home() {

    const paragraph = "Laissez-vous captiver par Ludovic Fieret, photographe de mariage et portrait. Emotions authentiques garanties."

    return (
        <main className={`px-8 py-8 relative flex flex-col h-max 2xl:px-40`}>
            <Header/>
            <Character value={paragraph}/>
            <section className="flex justify-center my-6 text-2xl">
                <button
                    className="h-14 justify-center rounded-md bg-[#e65f5c] px-6 transition hover:scale-110">
                    <span className="text-[#EEE0D3]"><Link href="/contact">Contactez moi</Link></span>
                </button>
            </section>
            <section className="flex flex-col items-center gap-10 mb-10 mt-20">
                <h2 className="text-center text-2xl">Prestation Mariage :</h2>
                <div className={"flex gap-10 flex-row flex-wrap justify-center"}>
                    <Image
                        src={placeholderMariage}
                        alt="mariage1"
                        width={350}
                        height={200}
                        className="rounded-2xl clampSizeHomeMariage"
                        priority
                    />
                    <Image
                        src={placeholderMariage}
                        alt="mariage1"
                        width={350}
                        height={200}
                        className="rounded-2xl clampSizeHomeMariage"
                        priority
                    />
                    <Image
                        src={placeholderMariage}
                        alt="mariage1"
                        width={350}
                        height={200}
                        className="rounded-2xl clampSizeHomeMariage"
                        priority
                    />
                    <Image
                        src={placeholderMariage}
                        alt="mariage1"
                        width={350}
                        height={200}
                        className="rounded-2xl clampSizeHomeMariage"
                        priority
                    />
                    <Image
                        src={placeholderMariage}
                        alt="mariage1"
                        width={350}
                        height={200}
                        className="rounded-2xl clampSizeHomeMariage"
                        priority
                    />
                    <Image
                        src={placeholderMariage}
                        alt="mariage1"
                        width={350}
                        height={200}
                        className="rounded-2xl clampSizeHomeMariage"
                        priority
                    />
                </div>
            </section>
            <section className="flex flex-col gap-10 mt-10 mb-20 items-center">
                <h2 className="text-center text-2xl">Prestation Portrait :</h2>
                <div className={"flex gap-10 flex-row flex-wrap justify-center"}>
                    <Image
                        src={placeholderPortrait}
                        alt="mariage1"
                        width={350}
                        height={200}
                        className="rounded-2xl clampSizePort"
                        priority
                    />
                    <Image
                        src={placeholderPortrait}
                        alt="mariage1"
                        width={350}
                        height={200}
                        className="rounded-2xl clampSizePort"
                        priority
                    />
                    <Image
                        src={placeholderPortrait}
                        alt="mariage1"
                        width={350}
                        height={200}
                        className="rounded-2xl clampSizePort"
                        priority
                    />
                    <Image
                        src={placeholderPortrait}
                        alt="mariage1"
                        width={350}
                        height={200}
                        className="rounded-2xl clampSizePort"
                        priority
                    />
                    <Image
                        src={placeholderPortrait}
                        alt="mariage1"
                        width={350}
                        height={200}
                        className="rounded-2xl clampSizePort"
                        priority
                    />
                    <Image
                        src={placeholderPortrait}
                        alt="mariage1"
                        width={350}
                        height={200}
                        className="rounded-2xl clampSizePort"
                        priority
                    />
                </div>
            </section>
            <section className="flex justify-center mb-10 text-2xl">
                <button
                    className="h-14 justify-center rounded-md bg-[#e65f5c] px-6 transition hover:scale-110">
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
