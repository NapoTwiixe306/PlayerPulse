"use client"
import React, { useState, useEffect } from "react";
import { List_Navbar } from "../ListText/List_Navbar";
import search from "../img/icons/searc.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showTeamList, setShowTeamList] = useState(false);

  const teams = ["Vitality", "Karmine Corp", "BDS"]; // Liste d'équipes fictive
  const router = useRouter();
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const toggleTeamList = () => {
    setShowTeamList(!showTeamList);
  };
  const navigateToTeam = (team: string) => {
    router.push(`/pages/team/${team.toLowerCase()}`);
    setShowTeamList(false);
  };

  useEffect(() => {
    setShowTeamList(false);
  }, [showMenu]);

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
            <div
            onMouseEnter={toggleTeamList}
            onMouseLeave={toggleTeamList}
            className="team-link"
          >
            <Link href="/pages/team">{List_Navbar[2].items}</Link>
            {showTeamList && (
              <div className="team-list">
                <ul>
                  {teams.map((team, index) => (
                    <li key={index} onClick={() => navigateToTeam(team)}>
                      <a>{team}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
            <Link href="/pages/events">{List_Navbar[3].items}</Link>
            <Link href="/pages/contact">{List_Navbar[4].items}</Link>
            <Link href="/auth/login">Login</Link>
            <Link href="/auth/register">Register</Link>
          </div>
          <div className="icons">
           
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
