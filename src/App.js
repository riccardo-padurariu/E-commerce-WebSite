import './App.css';
import HomePage from './Pages/HomePage';
import PhonesPage from './Pages/PhonesPage';
import TVPage from './Pages/TVPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element = {<HomePage/>}></Route>
          <Route element = {<HomePage/>} path='/home' ></Route>
          <Route element = {<PhonesPage/>} path='/phones'></Route>
          <Route element = {<TVPage/>} path='/tvs'></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
