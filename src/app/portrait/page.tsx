"use client"

import facebook from "../../../public/facebook.svg"
import instagram from "../../../public/instagram.svg"

import Image from "next/image";
import React from "react";
import Link from "next/link";
import Header from "../../components/Header"
import placeholderPortrait from "../../../public/placeholderPortrait.jpg";

export default function Home() {

    return (
        <main className={`px-8 py-8 relative h-max lg:px-40`}>
            <Header/>
            <h1 className="text-center text-3xl my-12 lg:text-4xl">Prestation Portrait</h1>
            <section className="flex flex-col items-center gap-10 my-10">
                <p className={"text-center text-xl leading-10 lg:text-3xl lg:leading-normal lg:opacity-60"}>{"Tout portrait « réussi » nait d’abord de la confiance entre le modèle et le photographe. Dès lors que cette relation de confiance s’installe, la séance photo sera bonne. Le plus important pour moi est de réussir à rester fidèle à ce que le/la modèle me donne au moment où j’appuie sur le déclencheur."}</p>
                <div className={"flex flex-col gap-10 lg:flex-row flex-wrap justify-center"}>
                    <Image
                        src={placeholderPortrait}
                        alt="mariage1"
                        width={350}
                        height={200}
                        className="rounded-2xl shadow-md shadow-slate-950 lg:w-[500px] lg:shadow-none"
                        priority
                    />
                    <Image
                        src={placeholderPortrait}
                        alt="mariage1"
                        width={350}
                        height={200}
                        className="rounded-2xl shadow-md shadow-slate-950 lg:w-[500px] lg:shadow-none"
                        priority
                    />
                    <Image
                        src={placeholderPortrait}
                        alt="mariage1"
                        width={350}
                        height={200}
                        className="rounded-2xl shadow-md shadow-slate-950 lg:w-[500px] lg:shadow-none"
                        priority
                    />
                    <Image
                        src={placeholderPortrait}
                        alt="mariage1"
                        width={350}
                        height={200}
                        className="rounded-2xl shadow-md shadow-slate-950 lg:w-[500px] lg:shadow-none"
                        priority
                    />
                    <Image
                        src={placeholderPortrait}
                        alt="mariage1"
                        width={350}
                        height={200}
                        className="rounded-2xl shadow-md shadow-slate-950 lg:w-[500px] lg:shadow-none"
                        priority
                    />
                    <Image
                        src={placeholderPortrait}
                        alt="mariage1"
                        width={350}
                        height={200}
                        className="rounded-2xl shadow-md shadow-slate-950 lg:w-[500px] lg:shadow-none"
                        priority
                    />
                </div>
            </section>
            <section className="flex justify-center mb-10 text-2xl">
                <button
                    className="h-12 justify-center rounded-md bg-[#323232] px-6 transition hover:scale-110 lg:px-8 lg:h-16">
                    <span className="text-[#FAFAFA]"><Link href="/contact">Contactez moi</Link></span>
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
