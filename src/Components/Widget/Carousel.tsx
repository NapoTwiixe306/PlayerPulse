"use client"
import React from "react";
import alpha from "@/src/img/players/alpha.jpg";
import rado from "@/src/img/players/rado.jpg";
import zen from "@/src/img/players/zen.jpg";
import vati from "@/src/img/players/vatigoat.jpg";
import exo from "@/src/img/players/exo.jpg";
import extra from '@/src/img/players/extra.jpg'
import kaydop from '@/src/img/players/kaydop.jpg'
import Image from "next/image";
import { useRouter } from "next/navigation"; 

export default function Carousel() {
  const router = useRouter();

  const handleCreateSlugAndRedirect = (playerName: string) => {
    const generatedSlug = playerName.toLowerCase().replace(/\s+/g, "-");
    router.push(`/pages/players/${generatedSlug}`);
  };

  return (
    <>
      <div className="logos">
        <div className="logos-slide">
          <Image src={alpha} alt="rocket league icons" onClick={() => handleCreateSlugAndRedirect("Alpha")} />
          <Image src={rado} alt="rocket league icons" onClick={() => handleCreateSlugAndRedirect("Rado")} />
          <Image src={zen} alt="rocket league icons" onClick={() => handleCreateSlugAndRedirect("Zen")} />
          <Image src={vati} alt="rocket league icons" onClick={() => handleCreateSlugAndRedirect("Vatigoat")} />
          <Image src={exo} alt="rocket league icons" onClick={() => handleCreateSlugAndRedirect("Exo")} />
          <Image src={extra} alt="rocket league icons" onClick={() => handleCreateSlugAndRedirect("Extra")} />
          <Image src={kaydop} alt="rocket league icons" onClick={() => handleCreateSlugAndRedirect("Kaydop")} />
        </div>
        <div className="logos-slide">
          <Image src={alpha} alt="rocket league icons" onClick={() => handleCreateSlugAndRedirect("Alpha")} />
          <Image src={rado} alt="rocket league icons" onClick={() => handleCreateSlugAndRedirect("Rado")} />
          <Image src={zen} alt="rocket league icons" onClick={() => handleCreateSlugAndRedirect("Zen")} />
          <Image src={vati} alt="rocket league icons" onClick={() => handleCreateSlugAndRedirect("Vatigoat")} />
          <Image src={exo} alt="rocket league icons" onClick={() => handleCreateSlugAndRedirect("Exo")} />
          <Image src={extra} alt="rocket league icons" onClick={() => handleCreateSlugAndRedirect("Extra")} />
          <Image src={kaydop} alt="rocket league icons" onClick={() => handleCreateSlugAndRedirect("Kaydop")} />
        </div>
      </div>
    </>
  );
}
