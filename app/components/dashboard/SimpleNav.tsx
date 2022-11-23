import SimpleNavLink from './SimpleNavLink';

interface SimpleNavProps {
  pathname?: string;
}
const SimpleNav = ({ pathname }: SimpleNavProps) => (
  <nav className='flex gap-5'>
    <SimpleNavLink isActive={pathname?.includes('products')}>
      Products
    </SimpleNavLink>
    <SimpleNavLink to={'invoices'} isActive={pathname?.includes('invoices')}>
      Invoices
    </SimpleNavLink>
    <SimpleNavLink isActive={pathname?.includes('subscriptions')}>
      Subscriptions
    </SimpleNavLink>
    <SimpleNavLink isActive={pathname?.includes('customers')}>
      Customers
    </SimpleNavLink>
    <SimpleNavLink isActive={pathname?.includes('deposits')}>
      Deposits
    </SimpleNavLink>
  </nav>
);

export default SimpleNav;
