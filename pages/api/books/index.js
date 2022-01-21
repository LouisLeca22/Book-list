import connectDB from '../../../config/connectDB';
import Book from '../../../models/Book';

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      try {
        const books = await Book.find();
        res.status(200).json(books);
      } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
      }
      break;
    case 'POST':
      try {
        let { title, author, date, rating, review } = req.body;
        const book = new Book({ title, author, date, rating, review });
        await book.save();
        res.status(201).json(book);
      } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
      }
      break;
    default:
      res.status(500).send('Server error');
  }
};
