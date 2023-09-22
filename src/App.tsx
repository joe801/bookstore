import './App.css';
import AddBook from './pages/AddBook';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./pages/Navbar";
import EditBook from './pages/EditBook';
import SignIn from './pages/SignIn';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addBook' element={<AddBook />} />
        <Route path='/:id' element={<EditBook />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
      </Routes>
    </>
  )
}

export default App
