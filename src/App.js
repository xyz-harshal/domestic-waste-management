import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/index.jsx';
import Fotter from "./components/Fotter/index.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx"
import Rewards from "./components/Rewards/index.jsx"

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Events from "./components/Events/Events.jsx"
import { OrganizeCampaign } from './components/Events/Organize/Campaign/OrganizeCampaign.jsx';
import { OrganizeDrive } from './components/Events/Organize/Drive/OrganizeDrive.jsx';
import { ParticipateCampaign } from './components/Events/Participate/Campaign/ParticipateCampaign.jsx';
import { ParticipateDrive } from './components/Events/Participate/Drive/ParticipateDrive.jsx';


import PCampaign from './components/Events/Participate/Campaign/index.jsx';
import PDrive from './components/Events/Participate/Drive/index.jsx';
import Education from './components/Eductation/index.jsx';
import { useState } from 'react';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/events" element={<Events/>}/>
          <Route path="/events/organize/campaign" element={<OrganizeCampaign/>}/>
          <Route path="/events/organize/drive" element={<OrganizeDrive/>}/>
          <Route path="/events/participate/campaign" element={<ParticipateCampaign/>}/>
          <Route path="/events/participate/drive" element={<ParticipateDrive/>}/>

          <Route exact path="/events/participate/campaign/" element={<PCampaign />} />
          <Route exact path="/events/participate/drive" element={<PDrive />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path='/rewards' element={<Rewards/>}/>
          <Route exact path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
          <Route exact path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>

        </Routes>
        {/* <Fotter /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
