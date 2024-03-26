import { Link, useLoaderData } from "react-router-dom";
import Nav from "../components/Nav";
import BookCard from "../components/BookCard";

const Home = () => {

    const books = useLoaderData();

    return (
        <div>
            {/* banner */}
            <section className="dark:bg-gray-100 dark:text-gray-800 bg-gray-100 rounded-xl border-2 container mx-auto">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Books to freshen up <br />
                            your bookshelf
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
                            <br className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a  className="px-8 py-3 text-lg font-semibold  dark:bg-violet-600 dark:text-gray-50 btn bg-green-500 text-white rounded-lg mt-2">View The List</a>
                            
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="https://i.ibb.co/rFJRBw1/The-Great-Gatsby.webp" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>

            <h2 className="max-w-fit justify-center items-center mx-auto text-6xl font-bold">Books</h2>

            {/* books card */}
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container  p-6 mx-auto space-y-6 sm:space-y-12">
                    
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                     {
                        books.map((book)=><BookCard key={books.bookId} book={book}></BookCard>)
                     }
                    </div>
                    <div className="flex justify-center">
                        <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">Load more posts...</button>
                    </div>
                </div>
            </section>
            <h1>Home Page</h1>
        </div>
    );
};

export default Home;