import React from "react";
import "../src/scss/App.scss";
import Navbar from "@/src/Components/Navbar";
import Carousel from "@/src/Components/Widget/Carousel";
export default function page() {
  return (
    <>
      <Navbar />
      <div className="Home_Container">
        <div className="title">
          <h1>
            Explorez les performances de vos joueurs préférés, quels que soient
            les jeux, et concrétisez vos rêves avec l&#39;achat des
            périphériques ultimes.
          </h1>
        </div>
      </div>
      <div className="Section-Two">
        <Carousel />
      </div>
    </>
  );
}
