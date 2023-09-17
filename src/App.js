import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import Fotter from "./components/Fotter";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          
        </Routes>
        <Fotter />
      </BrowserRouter>
    </>
  );
}

export default App;
