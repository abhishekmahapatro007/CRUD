// import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';

//components
import CodeforInterview from './components/CodeforInterview';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditUser from './components/EditUser';

//#90AEAD
function App() {
  return (
    <div className="App" style={{ backgroundColor: '#40826D', height: '100vh' }}> 
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element =  {<CodeforInterview />} />
                <Route path='/all' element =  {<AllUsers />} />
                <Route path='/add' element =  {<AddUser />} />
                <Route path='/edit/:id' element =  {<EditUser/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
