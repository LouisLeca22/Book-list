import { useRouter } from 'next/router';
import { server } from '../config/utils';

const Bookdetails = ({ book }) => {
  const router = useRouter();

  const handleClick = async () => {
    await fetch(`${server}/api/books/${book._id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    router.push('/');
  };

  return (
    <div className='book-details'>
      {book ? (
        <>
          <h1>{book.title}</h1>
          <h2>
            Written by: <span>{book.author}</span>
          </h2>
          <h3>
            Rating: <br />
            {[...Array(5)].map((e, index) =>
              index < book.rating ? (
                <i key={index} className='fas fa-star'></i>
              ) : (
                <i key={index} className='far fa-star'></i>
              )
            )}
          </h3>
          <p>
            <span>Synopsis: </span>
            {book.review}
          </p>
          <button onClick={handleClick}>Delete</button>
        </>
      ) : (
        <h1>The book you are looking for does not exist</h1>
      )}
    </div>
  );
};

export default Bookdetails;
