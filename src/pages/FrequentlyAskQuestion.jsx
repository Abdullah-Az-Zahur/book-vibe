import React from 'react';

const FrequentlyAskQuestion = () => {
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800 md:mt-40 border-2 rounded-lg">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                        <div>
                            <h3 className="font-semibold">Introduction</h3>
                            <p className="mt-1 dark:text-gray-600">Welcome to the Frequently Asked Questions (FAQ) section for our book, "[Book Title]". Below, we've compiled answers to common queries to assist you in your journey with our book. If you don't find the answer you're looking for, feel free to reach out to us directly for further assistance.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">About the Book</h3>
                            <p className="mt-1 dark:text-gray-600">"[Book Title]" is a captivating tale of [brief description of the book's theme or plot]. Authored by [Author's Name], this book has garnered praise for its [mention any notable features or awards]. Dive into the pages of "[Book Title]" and embark on an unforgettable adventure.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Purchasing and Availability</h3>
                            <p className="mt-1 dark:text-gray-600">Curious about where to get your hands on a copy of "[Book Title]"? Look no further! You can purchase our book from leading bookstores, both online and in-store. Additionally, you can find it available for purchase on our website's dedicated book page. We offer multiple formats, including paperback and ebook, to cater to your preferences.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Shipping and Delivery</h3>
                            <p className="mt-1 dark:text-gray-600">Once you've placed your order, our dedicated team ensures prompt processing and delivery. For physical copies, shipping times may vary depending on your location. Rest assured, we offer reliable shipping options with tracking capabilities, allowing you to monitor your package every step of the way.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FrequentlyAskQuestion;