'use client'
import { usePathname } from 'next/navigation';

const TeamPage = () => {
  const pathname = usePathname();
  const PlayerName = extractTeamNameFromPathname(pathname);

  return (
    <div>
      <h1>{PlayerName}</h1>
    </div>
  );
};

export default TeamPage;

const extractTeamNameFromPathname = (pathname: string): string => {
  const parts = pathname.split('/');
  return parts[parts.length - 1];
};
