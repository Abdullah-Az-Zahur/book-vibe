import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookName, author, tags, publisher, totalPages, category, rating, image, yearOfPublishing, bookId } = book;
    return (
        <div>
            <div className="hero justify-start rounded-lg mb-6 container w-full">
                <div className="hero-content flex-col lg:flex-row">
                    <img className="object-cover  bg-base-200 p-6 w-32 h-40 rounded-lg  dark:bg-gray-500 items-center justify-center mx-auto" src={image} />
                    <div>
                        <h1 className="text-3xl font-bold">{bookName}</h1>
                        <p className='my-2'>By: {author}</p>
                        <div className=' flex '>
                            <p className='font-bold'>Tag</p>
                            {
                                tags.map((tag, idx) => <span className='px-2' key={idx}><span className='rounded-full bg-gray-100 text-green-400 p-2 font-bold'> {tag}</span></span>)
                            }
                            <p className='flex '><IoLocationOutline className='items-center justify-center my-auto mx-2'/> Year of Publishing: <span>{yearOfPublishing}</span></p>
                        </div>
                        <div className='flex my-2'>
                            <p className='flex justify-center items-center gap-2'><IoPeopleOutline /> Publisher: <span>{publisher}</span></p>
                            <p className='flex justify-center items-center gap-2'><IoDocumentTextOutline /> Page: <span>{totalPages}</span></p>
                        </div>
                        <hr />
                        <div>
                            <p></p>
                            <p></p>
                        </div>

                        <div className='flex my-2 gap-3'>
                            <p className='bg-blue-200 text-blue-400 rounded-lg items-center justify-center p-1'>Category: <span>{category}</span></p>
                            <p className='bg-orange-200 text-orange-400 rounded-lg items-center justify-center p-1'>Ratting: {rating}</p>
                            <Link to={`/book/${bookId}`} className="bg-green-500 rounded-lg btn-primary p-1">View Details</Link>
                        </div>                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;