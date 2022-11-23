import { Link } from '@remix-run/react';
import { type ReactNode } from 'react';

interface SimpleNavLinkProps {
  children: ReactNode;
  isActive?: boolean;
  to?: string;
}
const SimpleNavLink = ({ to = '', isActive, children }: SimpleNavLinkProps) => {
  return (
    <Link to={to}>
      <button
        className={`text-zinc-500 font-semibold ${
          isActive ? 'text-black' : ''
        }`}
      >
        {children}
      </button>
    </Link>
  );
};

export default SimpleNavLink;
