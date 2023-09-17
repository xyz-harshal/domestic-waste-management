import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import Fotter from "./components/Fotter";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PCampaign from './components/Events/Participate/Campaign';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/events/participate/campaign/" element={<PCampaign />} />
        </Routes>
        <Fotter />
      </BrowserRouter>
    </>
  );
}

export default App;
