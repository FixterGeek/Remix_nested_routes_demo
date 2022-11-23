import { Link } from '@remix-run/react';
import { type ReactNode } from 'react';

interface NavButtonProps {
  children: ReactNode;
  to?: string;
  isActive?: boolean;
}
const NavButton = ({ isActive, children, to = '' }: NavButtonProps) => {
  return (
    <Link to={to}>
      <button
        className={`text-left hover:bg-indigo-200 py-2 px-5 w-full text-indigo-100 hover:text-indigo-500 ${
          isActive ? 'text-indigo-500 bg-indigo-200' : ''
        }`}
      >
        {children}
      </button>
    </Link>
  );
};

export default NavButton;
