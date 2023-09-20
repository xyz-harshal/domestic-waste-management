import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import Rewards from './components/Rewards/index'
import Fotter from "./components/Fotter";

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Events from './components/Events/Events'
import { OrganizeCampaign } from './components/Events/Organize/Campaign/OrganizeCampaign';
import { OrganizeDrive } from './components/Events/Organize/Drive/OrganizeDrive';
import { ParticipateCampaign } from './components/Events/Participate/Campaign/ParticipateCampaign';
import { ParticipateDrive } from './components/Events/Participate/Drive/ParticipateDrive';


import PCampaign from './components/Events/Participate/Campaign/index';
import PDrive from './components/Events/Participate/Drive/index';
import Education from './components/Eductation/index';

import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register';
import TrashDetailsForm from './components/TrashMap/TrashDetailsForm';

import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const {user} = useAuthContext()  
  return (
    <>      
      <BrowserRouter>
        <Navbar />
        <Routes>          
          <Route exact path="/" element={!user ? <Login /> : <Home />} />

          <Route path="/events" element={!user ? <Login /> : <Events/>}/>
          <Route path="/events/organize/campaign" element={<OrganizeCampaign/>}/>
          <Route path="/events/organize/drive" element={<OrganizeDrive/>}/>
          <Route path="/events/participate/campaign" element={<ParticipateCampaign/>}/>
          <Route path="/events/participate/drive" element={<ParticipateDrive/>}/>
          <Route exact path="/events/participate/campaign/" element={<PCampaign />} />
          <Route exact path="/events/participate/drive" element={<PDrive />} />

          <Route exact path='/rewards' element={user ? <Rewards/> : <Login />}/>

          <Route exact path="/education" element={user ? <Education /> : <Login />} />          

          <Route path='/trash' element={user ? <TrashDetailsForm /> : <Login />} />

          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />          
          <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
        </Routes>
        {/* <Fotter /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
