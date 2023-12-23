import './App.css';
import Main from './Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
