import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ShowBook from './Pages/ShowBook';
import CreateBooks from './Pages/CreateBooks';
import EditBook from './Pages/EditBook';
import DeleteBook from './Pages/DeleteBook';

function App() {
  return (
   
      <div>
        <Routes>
          
          <Route path='/*' element={<Home/>} />
          <Route path='/books/create' element={<CreateBooks/>} />
          <Route path='/books/details/:id' element={<ShowBook />} />
          <Route path='/books/edit/:id' element={<EditBook />} />
          <Route path='/books/delete/:id' element={<DeleteBook />} />
        </Routes>
      </div>
    
  );
}

export default App;
