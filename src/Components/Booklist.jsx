// import React from 'react'
// import books from './Data/books'
// import "./Booklist.css"; // Import the CSS file
// import { Link } from "react-router-dom";
// import Navber from './Navber';
// import Footer from './Footer';


// function Booklist() {
//   return (
//     <div>
// <Navber/>
// <header>
//         <h1>Book Collection</h1>
//       </header>
//       <div className="book-container">
//         {books.map((book) => (
//           <div key={book.id} className="book-card">
//             <img src={book.image} alt={book.name} className="book-image" />
//             <div className="book-info">
//               <h2>{book.name}</h2>
//               <p>{book.description.substring(0, 100)}...</p>
//               {/* Link to Single Book Page */}
//               <Link to={`/book/${book.id}`} className="read-more">
//                 View Details
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Footer/>
//     </div>
//   )
// }

// export default Booklist







import React, { useState } from 'react';
import books from './Data/books';
import "./Booklist.css"; // Import the CSS file
import { Link } from "react-router-dom";

import Footer from './Footer';
import Navbar from './Navbar';
 // Ensure this is correctly imported in Booklist or wherever you use the Navber component.import Navbar from './Navbar';


function Booklist() {
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filter books based on search query
  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>

      <Navbar/>
     
      <header>
        <h1>Book Collection</h1>
        {/* Search Input Field */}
        <input
          type="text"
          placeholder="Search by book name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
          className="search-input"
        />
      </header>
      
      <div className="book-container">
        {/* Render filtered books */}
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.image} alt={book.name} className="book-image" />
            <div className="book-info">
              <h2>{book.name}</h2>
              <p>{book.description.substring(0, 100)}...</p>
              {/* Link to Single Book Page */}
              <Link to={`/book/${book.id}`} className="read-more">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <Footer />
    </div>
  );
}

export default Booklist;



