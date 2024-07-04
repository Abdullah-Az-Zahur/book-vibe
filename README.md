# Book Vibe

Welcome to Book Vibe, a comprehensive platform to discover and manage your favorite books. This project features a dynamic book listing, detailed book pages, and interactive elements for reading and wishlisting books.

## Features

### Navbar
- **Logo/Name**: Displayed on the left side.
- **Menu Items**: Home, Listed Books, and Pages to Read.
- **Buttons**: Sign In and Sign Up (non-functional).
- **Active Route**: Applied to the navbar, displayed on all pages.

### Banner
- **Title and Button**: "View The List" button takes you to the Listed Books page.
- **Image**: Related to the website theme, displayed on the right side.

### Books Section
- **Section Heading**: At the top.
- **Books Card**: Contains at least 6 cards of books.

### Book Details Page (Dynamic Route)
- **Left Side**: Book image.
- **Details**: Book name, author, category, review, tags, total pages, publisher, year of publishing, rating.
- **Buttons**: Read and Wishlist.
  - Clicking "Read" or "Wishlist" shows a toast/sweet alert with a message.
  - Adds the book to local storage.
  - Prevents duplicate additions with appropriate alerts.
  - Prevents adding a book to both Read and Wishlist.

### Listed Books Page
- **Header**: Title at the top.
- **Sort Dropdown**: By Rating, Number of Pages, Published Year.
- **Book Lists**: Shows read and wishlist books from local storage.
- **Tabs**: Separate tabs for read books and wishlist books.

### List Books Card
- **Information**: Image, book name, author, category, tags, total pages, publisher, year of publishing, rating.
- **Button**: View Details, redirects to the book details page.

### Pages to Read Page
- **Custom Shape Bar Chart**: Displays read-list book names against total pages.

### 404 Page
- **Route**: Displays a not found page for invalid routes.

## Technologies Used
- **Frontend**: React.js, Tailwind CSS
- **Backend**: [Specify if used]
- **Database**: [Specify if used]
- **State Management**: [Specify if used, e.g., Redux]

## Live Site
Check out the live site: [Book Vibe](https://playful-gingersnap-532cbd.netlify.app/)

## Getting Started
To get a local copy up and running, follow these simple steps:

### Prerequisites
- Node.js

### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/Abdullah-Az-Zahur/book-vibe.git
