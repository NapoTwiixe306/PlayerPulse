"use client";
import React, { useState } from "react";
import { List_Navbar } from "../ListText/List_Navbar";
import search from "../img/icons/searc.svg";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <>
      <header className={`Navbar_Container ${showMenu ? "open" : ""}`}>
        <nav className="content">
          <div className="title">
            <h1>{List_Navbar[0].title}</h1>
          </div>
          <div className="burgerButton" onClick={toggleMenu}>
            ☰
          </div>

          <div className={`items ${showMenu ? "open" : ""}`}>
            <Link href="/pages/players">{List_Navbar[1].items}</Link>
            <Link href="/pages/team">{List_Navbar[2].items}</Link>
            <Link href="/pages/events">{List_Navbar[3].items}</Link>
            <Link href="/pages/contact">{List_Navbar[4].items}</Link>
          </div>
          <div className="icons">
            <Link href="/auth/login">Login</Link>
            <Link href="/auth/register">Register</Link>
            {showSearch && (
              <div className="input ">
                <input type="search" name="" id="" placeholder="Search" />
              </div>
            )}
            <div onClick={toggleSearch}>
              <Image src={search} alt="Search Icons" className="img" />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
