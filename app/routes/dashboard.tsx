import { Outlet, useLocation } from '@remix-run/react';
import NavBar from '~/components/dashboard/NavBar';
// import NavBar from '~/components/dashboard/NavBard';
import styles from '~/styles/global.css';

export const links = () => [{ href: styles, rel: 'stylesheet' }];

export default function Dashboard() {
  const { pathname } = useLocation();
  return (
    <>
      <NavBar pathname={pathname} />
      <div className='pl-[150px]'>
        <Outlet />
      </div>
    </>
  );
}
