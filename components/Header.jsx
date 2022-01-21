import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  return (
    <header>
      <div className='logo'>
        <i className='fas fa-book-reader'></i>
        <div>
          <span>Book</span>List
        </div>
      </div>
      <ul className='navbar'>
        <li  className={router.pathname === '/' ? 'active-link' : ''}>
          <Link
            href='/'
          >
            Home
          </Link>
        </li>
        <li  className={router.pathname === '/about' ? 'active-link' : ''}>
          <Link
            href='/about'
          >
            About
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
