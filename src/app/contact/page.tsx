"use client"

import facebook from "../../../public/facebook.svg"
import instagram from "../../../public/instagram.svg"

import Image from "next/image";
import React, {useState} from "react";
import Header from "../../components/Header"
import Link from "next/link";

export default function Home() {

    const [mariageActive, setMariageActive] = useState(false);

    const toggleMariage = () => {
        setMariageActive(true);
    }

    const turnOffMariage = () => {
        setMariageActive(false);
    }

    return (
        <main className={`px-8 py-8 relative h-max lg:px-40`}>
            <Header />
            <h1 className="text-center text-3xl my-12 lg:text-4xl">Contact</h1>
            <section className={"my-12"}>
                <form className={"flex flex-col items-center gap-8 text-xl tracking-tighter"} action={"https://api.web3forms.com/submit"} method={"POST"}>
                    <input type={"hidden"} name={"access_key"} value={"4e83dc0d-1e30-4e6c-aa3a-470f25eb00a0"} />
                    <div className={"flex flex-col items-center justify-center gap-8 lg:flex-row"}>
                        <div className={"flex flex-col items-start justify-center gap-2"}>
                            <label htmlFor={"name"}>Nom & prénom :</label>
                            <input type={"text"} id={"name"} name={"Nom du client"} placeholder={"Nom & prénom*"}
                                   className={"border border-[#808080] rounded-md py-2 px-4"} required/>
                        </div>
                        <div className={"flex flex-col items-start justify-center gap-2"}>
                            <label htmlFor={"phone"}>Téléphone :</label>
                            <input type={"tel"} id={"phone"} name={"Téléphone"} placeholder={"Téléphone"}
                                   className={"border border-[#808080] rounded-md py-2 px-4"}/>
                        </div>
                    </div>
                    <div className={"flex flex-row items-start justify-start gap-8 w-[860px]"}>
                        <div className={"flex flex-col items-start justify-center gap-2"}>
                            <label htmlFor={"prestation"}>Type de prestation :</label>
                            <select name={"prestation"} id={"prestation"} className={"border border-[#808080] rounded-md py-3 px-4 w-[415px]"}>
                                <option value={"mariage"} selected>Mariage</option>
                                <option value={"portrait"}>Portrait</option>
                                <option value={"autre"}>Autre</option>
                            </select>
                        </div>
                        <div className={"flex flex-col items-start justify-center gap-2"}>
                            <label htmlFor={"date"}>Date de la prestation :</label>
                            <input type={"date"} id={"date"} name={"date"} placeholder={"Date de votre prestation*"}
                                   required className={"border border-[#808080] rounded-md py-2 px-4 w-[374px]"}/>
                        </div>
                    </div>
                    <div className={"flex flex-col gap-8 lg:flex-row"}>
                        <div className={"flex flex-col items-start justify-center gap-2"}>
                            <label htmlFor={"lieu"}>Lieu de la prestation :</label>
                            <input type={"text"} id={"lieu"} name={"lieu"} placeholder={"Lieu de votre prestation*"}
                                   required className={"border border-[#808080] rounded-md py-2 px-4"}/>
                        </div>
                        <div className={"flex flex-col items-start justify-center gap-2"}>
                            <label htmlFor={"service"}>Service souhaité :</label>
                            <select name={"service"} id={"service"}
                                    className={"border border-[#808080] rounded-md py-3 px-4"}>
                                <option value={"Reportage photo"} selected>Reportage photo</option>
                                <option value={"Reportage vidéo"}>Reportage vidéo</option>
                                <option value={"Reportage photo & vidéo"}>Reportage photo & vidéo</option>
                            </select>
                        </div>
                    </div>
                    <div className={"flex flex-col gap-8 lg:flex-row items-start"}>
                        <div className={"flex flex-col items-start justify-center gap-2"}>
                            <label htmlFor={"email"}>Adresse email :</label>
                            <input type={"email"} id={"email"} name={"clientMail"} placeholder={"Mail*"}
                                   className={"border border-[#808080] rounded-md py-2 px-4"} required/>
                        </div>
                        <div className={"flex flex-col items-start justify-center gap-2"}>
                            <label htmlFor={"message"}>Message :</label>
                            <textarea name={"message"} id={"message"}
                                      className={"border border-[#808080] rounded-md py-2 px-4"} rows={6}
                                      placeholder={"Message* (Précisez : heure de début et de fin de la prestation, nombre d'invités et thème si mariage, etc.)"}></textarea>
                        </div>
                    </div>
                    <button type={"submit"} className="h-12 text-[#EEE0D3] justify-center rounded-md bg-[#E65F5C] px-6 transition hover:scale-110">
                        Envoyer
                    </button>
                </form>
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
