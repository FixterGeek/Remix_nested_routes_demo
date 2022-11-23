import { Outlet, useLocation } from '@remix-run/react';
import SimpleNav from '~/components/dashboard/SimpleNav';

export default function Invoices() {
  const { pathname } = useLocation();
  console.log('path? ', pathname);
  return (
    <section className='p-20'>
      <h2 className='text-4xl font-bold pb-6'>Sales</h2>
      <SimpleNav pathname={pathname} />
      <hr className='my-4' />
      <Outlet />
    </section>
  );
}
