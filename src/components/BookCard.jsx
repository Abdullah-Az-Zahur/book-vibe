import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa";

const BookCard = ({ book }) => {
    const { bookName, author, image, category, tags, rating, bookId } = book;
    
    return (
        <div className='border-2 rounded-lg p-6 hover:scale-105 hover:border-secondary border-opacity-30'>
            <Link to={`/book/${bookId}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 ">
                <div className='bg-gray-100 p-4 rounded-lg'>
                    <img role="presentation" className="object-cover w-32 h-40 rounded  dark:bg-gray-500 items-center justify-center mx-auto" src={image} />
                </div>

                <div className='mt-6'>
                    {
                        tags.map((tag, idx) => <span className='px-2' key={idx}><span className='rounded-full bg-gray-100 text-green-400 p-2 font-bold'>{tag}</span></span>)
                    }
                </div>
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{bookName}</h3>
                    <p>by: {author}</p>
                    <hr></hr>
                    <div className='flex justify-between'>
                        <p>{category}</p>
                        <div className='flex justify-center items-center gap-2'>
                            <p >{rating} </p>
                            <FaRegStar />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BookCard;