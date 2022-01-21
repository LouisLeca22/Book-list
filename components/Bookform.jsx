import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { server } from '../config/utils';

const Bookform = ({}) => {
  const router = useRouter();

  const [form, setForm] = useState({
    title: '',
    author: '',
    date: '',
    rating: '',
    review: '',
  });

  const [alert, setAlert] = useState(null);
  const [error, setError] = useState({});


  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(error).length === 0) {
      const { title, author, date, rating, review } = form;
      const book = { title, author, date, rating, review };
      await fetch(`${server}/api/books`, {
        method: 'POST',
        body: JSON.stringify(book),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      showAlert('Book was added', 'success');
      setForm({ title: '', author: '', date: '', rating: '', review: '' });
      router.push('/');
    } else {
      showAlert(error.message, error.type)
    }
  };


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const checkForErrors = () => {
      if (
        form.title === '' ||
        form.author === '' ||
        form.date === '' ||
        form.rating === '' ||
        form.review === ''
      ) {
        setError({ message: 'Please fill in all fields', type: 'danger' });
      } else if (form.rating < 1 || form.rating > 5) {
        setError({ message: 'Rating ranges from 1 to 5', type: 'danger' });
      } else {
        setError({});
      }
    };
    checkForErrors();
  }, [form]);

  return (
    <form className='book-form'>
    <h2>Add a new book!</h2>
    {alert && <div className={'alert ' + alert.type}>{alert.message}</div>}
    <input
      type='text'
      id='title'
      name='title'
      placeholder='Add a title...'
      value={form.title}
      onChange={handleChange}
    />
    <input
      type='text'
      id='author'
      name='author'
      value={form.author}
      placeholder='Add a name for the author...'
      onChange={handleChange}
    />
    <input
      type='number'
      id='date'
      name='date'
      value={form.date}
      placeholder='Add a publication date'
      onChange={handleChange}
    />
    <input
      type='number'
      id='rating'
      name='rating'
      value={form.rating}
      placeholder='Rate this book from 1 to 5'
      onChange={handleChange}
    />

    <textarea
      name='review'
      id='review'
      value={form.review}
      onChange={handleChange}
    ></textarea>

    <input type='submit' value='ADD' onClick={handleSubmit} />
  </form>
  );
};

export default Bookform;
