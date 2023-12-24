import './App.css';
import Main from './Main';
import Page2 from './Page2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main />}></Route>
        <Route path={"/page2"} element={<Page2 />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
