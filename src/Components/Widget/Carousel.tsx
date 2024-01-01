import React from "react";
import rl from "@/src/img/Carousel/rl.svg";
import lol from "@/src/img/Carousel/lol.svg";
import valo from "@/src/img/Carousel/Valorant.svg";
import cs from "@/src/img/Carousel/cs.svg";
import smash from "@/src/img/Carousel/smash.svg";
import Image from "next/image";

export default function Carousel() {
  return (
    <>
      <div className="logos">
        <div className="logos-slide">
          <Image src={rl} alt="rocket league icons" />
          <Image src={lol} alt="rocket league icons" />
          <Image src={valo} alt="rocket league icons" />
          <Image src={cs} alt="rocket league icons" />
          <Image src={smash} alt="rocket league icons" />
        </div>
        <div className="logos-slide">
          <Image src={rl} alt="rocket league icons" />
          <Image src={lol} alt="rocket league icons" />
          <Image src={valo} alt="rocket league icons" />
          <Image src={cs} alt="rocket league icons" />
          <Image src={smash} alt="rocket league icons" />
        </div>
      </div>
    </>
  );
}
