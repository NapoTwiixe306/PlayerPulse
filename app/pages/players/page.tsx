"use client";
import React from "react";
import { useRouter } from "next/navigation";

const PlayersPage: React.FC = () => {
  const router = useRouter();

  const handleCreateSlugAndRedirect = () => {
    // Générez un slug de manière dynamique (peut-être en utilisant une logique spécifique à votre application)
    const generatedSlug = "nouveau-slug"; // Remplacez cela par votre logique de génération de slug

    // Redirigez vers la nouvelle page avec le slug généré
    router.push(`/pages/players/${generatedSlug}`);
  };

  return (
    <div>
      <h1>Liste de Joueurs</h1>
      <button onClick={handleCreateSlugAndRedirect}>
        Créer Slug et Rediriger
      </button>
    </div>
  );
};

export default PlayersPage;
