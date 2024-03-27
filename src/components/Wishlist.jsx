import React, { useEffect, useState } from 'react';
import { getStoredWishedBooks } from '../utility/localstorage';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';

const Wishlist = () => {
    // load data
    const bookmarks = useLoaderData();

    const [booksList, setBookList] = useState([]);
    console.log(booksList)

    useEffect(() => {
        const booksId = getStoredWishedBooks();

        if (bookmarks) {
            // const storedBooks = bookmark.filter(book => booksId.includes(book.bookId))
            const markedBooks = [];
            for (const id of booksId) {
                const book = bookmarks.find(book => book.bookId === id);
                if (book) {
                    markedBooks.push(book)
                }
            }
            setBookList(markedBooks);
        }
    }, [bookmarks])
    return (
        <div>
            <div>
                {
                    booksList.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Wishlist;