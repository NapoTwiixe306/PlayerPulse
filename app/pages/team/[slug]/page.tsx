'use client'
import { usePathname } from 'next/navigation';

const TeamPage = () => {
  const pathname = usePathname();
  const teamName = extractTeamNameFromPathname(pathname);

  return (
    <div>
      <h1>{teamName}</h1>
    </div>
  );
};

export default TeamPage;

const extractTeamNameFromPathname = (pathname: string): string => {
  const parts = pathname.split('/');
  return parts[parts.length - 1];
};
