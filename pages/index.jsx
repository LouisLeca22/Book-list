import Booklist from '../components/Booklist';
import Bookform from '../components/Bookform';
import { server } from '../config/utils';


export default function Home({ books }) {
  return (
    <>
      <Booklist books={books} />
      <Bookform />
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${server}/api/books`);
  const books = await res.json();
  return {
    props: {
      books,
    },
  };
};
