import express from 'express';

import {allBooks,checkBook,addBooks,deleteBook,updateBook} from '../working/books.js';

const router = express.Router();

router.get('/books', allBooks);

router.get('/books/:id',checkBook)

router.post('/books',addBooks);

router.delete('/books/:id',deleteBook);

router.patch('/books/:id',updateBook);

export default router;