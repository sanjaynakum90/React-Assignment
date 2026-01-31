import { Outlet } from 'react-router-dom';
import Navigation from '../Components/UI/Navigation';

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout;