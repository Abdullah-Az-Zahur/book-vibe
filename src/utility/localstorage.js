import { toast } from "react-toastify";

// Get
const getStoredBooks = () => {
    let book = [];
    const storedBooks = localStorage.getItem('book-readd');
    if (storedBooks) {
        return JSON.parse(storedBooks);
    }
    return book;
}

// save
const saveBooks = (id) => {
    const storedBooks = getStoredBooks();
    const exists = storedBooks.find(bookId => bookId === id);
    if (!exists) {
        storedBooks.push(id);
        localStorage.setItem('book-readd', JSON.stringify(storedBooks));
        // localStorage.setItem('book-wished', JSON.stringify(storedBooks));
        saveBooksWishlist(id)
        toast.success('Book Bookmarked Successfully')
    }
    else {
        return toast.error('Already Bookmarked')
    }
}

// delete
const deleteBooks = (id) => {
    const storedBooks = getStoredBooks();
    const remaining = storedBooks.filter(bookId => bookId !== id)
    localStorage.setItem('book-readd', JSON.stringify(remaining))
    toast.success('Book Removed From Listed Book')
}

// get wished
const getStoredWishedBooks = () => {
    let book = [];
    const storedBooks = localStorage.getItem('book-wished');
    if (storedBooks) {
        return JSON.parse(storedBooks);
    }
    return book;
}


// save wishlist
const saveBooksWishlist = (id) => {
    const storedBooks = getStoredWishedBooks();
    const exists = storedBooks.find(bookId => bookId === id);
    
    if (!exists) {
        storedBooks.push(id);
        localStorage.setItem('book-wished', JSON.stringify(storedBooks));
        toast.success('Book Bookmarked Successfully')
    }
    else {
        return toast.error('Already Bookmarked')
    }
    
}

// delete wishlist
const deleteBookswislist = (id) => {
    const storedBooks = getStoredBooks();
    const remaining = storedBooks.filter(bookId => bookId !== id)
    localStorage.setItem('book-readd', JSON.stringify(remaining))
    toast.success('Book Removed From Listed Book')
}

export { getStoredBooks, saveBooks, deleteBooks, saveBooksWishlist, deleteBookswislist, getStoredWishedBooks }