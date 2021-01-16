import {v4 as uuidv4} from 'uuid';

export let books = [];

export const allBooks = (req,res)=>{
    res.send(books); 
}

export const addBooks = (req,res)=>{
    const book=req.body;
    const Id=uuidv4();
    const newBook={...book, id:Id}
    books.push(newBook);
    res.send(`"${book.Name}" book with Id "${Id}" added successfully`);
 }

export const checkBook = (req,res)=>{
    const { id }=req.params;
    const foundBook = books.find((book)=>book.id === id);
    res.send(foundBook);
}

export const deleteBook = (req,res)=>{
    const { id } = req.params;
    const Name=req.body.Name;
    books = books.filter((book)=>book.id!==id);
    res.send(`"${Name}" book with id "${id}" is deleted! `);
 }

export const updateBook = (req,res) => {
    const { id } = req.params;
    const {Name,DateOfPublish,Author} =req.body;
    const book = books.find((book)=>book.id ===id);
    if(Name) book.Name = Name; 
    if(DateOfPublish) book.DateOfPublish= DateOfPublish;
    if(Author) book.Author = Author;
    res.send(`"${Name}" book with "${id}" has been updated`); 
} 