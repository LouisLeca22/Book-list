import Link from 'next/link';
import { useRouter } from 'next/router';
import { server } from '../config/utils';

const Bookrow = ({ book }) => {
  const router = useRouter();

  const handleDelete = async () => {
    await fetch(`${server}/api/books/${book._id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    router.push('/');
  };

  return (
    <li className='row'>
      <div className='title'>
        <Link href={`/book/${book._id}`}>{book.title}</Link>
      </div>
      <div className='autor'>{book.author}</div>
      <div className='date'>{book.date}</div>
      <div className='rating'>
        {[...Array(5)].map((e, index) =>
          index < book.rating ? (
            <i key={index} className='fas fa-star'></i>
          ) : (
            <i key={index} className='far fa-star'></i>
          )
        )}
      </div>
      <div>
        <i onClick={handleDelete} className='fas fa-trash-alt delete'></i>
      </div>
    </li>
  );
};

export default Bookrow;
