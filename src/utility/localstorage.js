// const getStoredBooks = () => {
//     const storedBooks = localStorage.getItem('book-readd');
//     if (storedBooks) {
//         return JSON.parse(storedBooks);
//     }
//     return [];
// }

// const saveBooks = (id) => {
//     const storedBooks = getStoredBooks();
//     const exists = storedBooks.find(bookId => bookId === id);
//     if(!exists){
//         storedBooks.push(id);
//         localStorage.setItem('book-readd', JSON.stringify(storedBooks));
//     }
// }

// export {getStoredBooks, saveBooks}

const getStoredBooks = () => {
    const storedBooks = localStorage.getItem('book-readd');
    if (storedBooks) {
        return JSON.parse(storedBooks);
    }
    return [];
}

const saveBooks = (id)=>{
    const storedBooks = getStoredBooks();
    const exists = storedBooks.find(bookId => bookId === id);
    if(!exists){
        storedBooks.push(id);
        localStorage.setItem('book-readd', JSON.stringify(storedBooks));
    }
}

export { getStoredBooks, saveBooks }