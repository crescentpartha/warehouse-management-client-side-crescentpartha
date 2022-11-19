import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Authentication/Login/Login';
import Register from './components/Authentication/Register/Register';
import RetrievePassword from './components/Authentication/RetrievePassword/RetrievePassword';
import BlogsHome from './components/Pages/Blogs/BlogsHome/BlogsHome';
import JavascriptVsNode from './components/Pages/Blogs/JavascriptVsNode/JavascriptVsNode';
import Jwt from './components/Pages/Blogs/Jwt/Jwt';
import NodeVsMongo from './components/Pages/Blogs/NodeVsMongo/NodeVsMongo';
import SqlVsNoSql from './components/Pages/Blogs/SqlVsNoSql/SqlVsNoSql';
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
        <Route path='/blogs' element={<BlogsHome></BlogsHome>}>
          <Route path='javascript-vs-node' element={<JavascriptVsNode></JavascriptVsNode>}></Route>
          <Route path='node-vs-mongo' element={<NodeVsMongo></NodeVsMongo>}></Route>
          <Route path='sql-vs-no-sql' element={<SqlVsNoSql></SqlVsNoSql>}></Route>
          <Route path='jwt' element={<Jwt></Jwt>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;