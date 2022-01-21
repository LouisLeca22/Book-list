import Bookrow from './Bookrow';

const Booklist = ({ books }) => {
  return (
    <ul className='book-list'>
      <li className='head-row'>
        <div className='title'>Title</div>
        <div className='author'>Author</div>
        <div className='date'>Date</div>
        <div className='rating'>Rating</div>
        <div></div>
      </li>
      {books.map((book) => (
        <Bookrow key={book._id} book={book} />
      ))}
    </ul>
  );
};

export default Booklist;
