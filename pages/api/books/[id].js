import connectDB from '../../../config/connectDB';
import Book from '../../../models/Book';

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      try {
        const id = req.query.id;
        const book = await Book.findById(id);
        res.status(200).json(book);
      } catch (error) {
        console.log(error);
      }
      break;
    case 'DELETE':
      try {
        const id = req.query.id;
        await Book.findByIdAndDelete(id);
        res.status(200).send('Deleted');
      } catch (error) {
        console.log(error);
      }
      break;
    default:
      res.status(500).send('Server error');
  }
};
