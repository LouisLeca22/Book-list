import Header from './Header';
import Meta from './Meta';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <div className='container'>{children}</div>
    </>
  );
};

export default Layout;
