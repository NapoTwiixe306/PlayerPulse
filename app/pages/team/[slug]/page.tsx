"use client";
import { usePathname } from "next/navigation";
import { teamsStats } from "@/src/ListText/Teams_Stats";
import Image from "next/image";

const TeamPage = () => {
  const pathname = usePathname();
  const teamName = extractTeamNameFromPathname(pathname);
  const teamInfo = teamsStats[teamName];

  if (!teamInfo) {
    return <div>Équipe non trouvée</div>;
  }

  return (
    <div>
      <h1>{teamInfo.name}</h1>
      <p>{teamInfo.description}</p>
      <Image src={teamInfo.image} alt={teamInfo.name} />
    </div>
  );
};

export default TeamPage;

const extractTeamNameFromPathname = (pathname: string): string => {
  const parts = pathname.split("/");
  return parts[parts.length - 1];
};
