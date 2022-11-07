import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Posts from './composants/Posts';
import Users from './composants/Users';
import Comments from './composants/Comments';
import Navbar from './composants/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path = '/' element = {<Users/>}/>
          <Route path = '/posts/:userId' element = {<Posts/>}/>
          <Route path='/comments/:postId' element = {<Comments/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
