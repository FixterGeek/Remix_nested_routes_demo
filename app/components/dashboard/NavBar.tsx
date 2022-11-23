import NavButton from './NavButton';

interface NavBarProps {
  pathname?: string;
}
const NavBar = ({ pathname }: NavBarProps) => {
  return (
    <aside className='bg-indigo-500 w-[150px] h-screen fixed flex flex-col justify-between'>
      <img src='https://i.imgur.com/eyDw5r4.png' alt='logo' className='mb-12' />
      <div className='mb-auto'>
        <NavButton>Dashboard</NavButton>
        <NavButton isActive={pathname?.includes('sales')} to='sales'>
          Sales
        </NavButton>
        <NavButton>Users</NavButton>
      </div>
    </aside>
  );
};

export default NavBar;
