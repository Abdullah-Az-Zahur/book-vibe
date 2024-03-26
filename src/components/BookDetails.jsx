import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    // console.log(books, id)
    const idInt = parseInt(id);
    const book = books.find(book => book.bookId === idInt);
    console.log(book)
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800 container mx-auto">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between items-center">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-full xl:h-112 2xl:h-128 w-1/2 bg-gray-100 rounded-lg border-2">
                    <img src={book.image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left w-full h-full">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">{book.bookName}
                    </h1>
                    <p className='my-4'>By: {book.author}</p>
                    <hr />
                    <p className='my-4'>{book.category}</p>
                    <hr />
                    <p className='my-4'><span className='font-bold'>Review: </span>{book.review}</p>
                    <p className='my-4'><span className='font-bold'>Tag </span>
                        {
                            book.tags.map((tag, idx) => <span className='px-2' key={idx}><span className='rounded-full bg-gray-100 text-green-400 p-2 font-bold'>{tag}</span></span>)
                        }
                    </p>
                    <hr />
                    <div className='my-4'>
                        <p><span>Number of Pages:</span>{book.totalPages}</p>
                        <p><span>Publisher:</span>{book.publisher}</p>
                        <p><span>Year of Publishing:</span>{book.yearOfPublishing}</p>
                        <p><span>Rating:</span>{book.rating}</p>
                    </div>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Read</a>
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Wish list</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookDetails;