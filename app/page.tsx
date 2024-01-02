import React from "react";
import "../src/scss/App.scss";
import Navbar from "@/src/Components/Navbar";
import Carousel from "@/src/Components/Widget/Carousel";
import { Home_Text } from "@/src/ListText/Home_Text";
export default function page() {
  return (
    <>
      <Navbar />
      <div className="Home_Container">
        <div className="title">
          <h1>{Home_Text[0].explo}</h1>
        </div>
      </div>
      <div className="Section-Two">
        <Carousel />

        </div>
      <div className="Section-Three">
        <div className="why">
          <div className="content">
            <h1>{Home_Text[1].why}</h1>
            <div className="list">
              <ul>
              {Home_Text.slice(2, 6).map((text, index) => (
                <li key={index}>{text.list}</li>
              ))}
              </ul>
              <ul>
              {Home_Text.slice(6, 9).map((text, index) => (
                <li key={index}>{text.list}</li>
              ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
