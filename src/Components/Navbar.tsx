import React from "react";
import { List_Navbar } from "../ListText/List_Navbar";
import search from "../img/icons/searc.svg";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <header className="Navbar_Container">
        <nav className="content">
          <div className="title">
            <h1>{List_Navbar[0].title}</h1>
          </div>
          <div className="items">
            <Link href="/pages/players">{List_Navbar[1].items}</Link>
            <Link href="/pages/team">{List_Navbar[2].items}</Link>
            <Link href="/pages/events">{List_Navbar[3].items}</Link>
            <Link href="/pages/contact">{List_Navbar[4].items}</Link>
          </div>
          <div className="icons">
            <Image src={search} alt="Search Icons" className="img" />
          </div>
        </nav>
      </header>
    </>
  );
}
