import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Authentication/Login/Login';
import Register from './components/Authentication/Register/Register';
import RetrievePassword from './components/Authentication/RetrievePassword/RetrievePassword';
import Home from './components/Pages/Home/Home/Home';
import Footer from './components/SharedPages/Footer/Footer';
import Header from './components/SharedPages/Header/Header';
import NotFound from './components/SharedPages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/retrieve-password' element={<RetrievePassword></RetrievePassword>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
