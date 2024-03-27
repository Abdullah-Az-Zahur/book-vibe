import React from 'react';

const Book = ({ book }) => {
    const { bookName, author, tags, publisher, totalPages, category, rating, image } = book;
    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img className="object-cover w-32 h-40 rounded  dark:bg-gray-500 items-center justify-center mx-auto" src={image} />
                    <div>
                        <h1 className="text-5xl font-bold">{bookName}</h1>
                        <p>By: {author}</p>
                        <div className='mt-6 flex font-bold'>
                            <p>Tag</p>
                            {
                                tags.map((tag, idx) => <span className='px-2' key={idx}><span className='rounded-full bg-gray-100 text-green-400 p-2 font-bold'> {tag}</span></span>)
                            }
                        </div>
                        
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;