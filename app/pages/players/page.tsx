"use client";
import React from "react";
import { useRouter } from "next/navigation";

const PlayersPage: React.FC = () => {
  const router = useRouter();

  const handleCreateSlugAndRedirect = () => {
    const generatedSlug = "nouveau-slug";
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
