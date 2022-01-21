import { server } from '../../../config/utils';
import Meta from '../../../components/Meta';
import Bookdetails from '../../../components/Bookdetails';

const book = ({ book }) => {
  return (
    <>
      <Meta title={book.title} />
      <Bookdetails book={book} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`${server}/api/books/${context.params.id}`);

  const book = await res.json();

  return {
    props: {
      book,
    },
  };
};



export default book;
