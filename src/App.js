import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import Fotter from "./components/Fotter";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Events from "./components/Events/Events"
import { OrganizeCampaign } from './components/Events/Organize/Campaign/OrganizeCampaign';
import { OrganizeDrive } from './components/Events/Organize/Drive/OrganizeDrive';
import { ParticipateCampaign } from './components/Events/Participate/Campaign/ParticipateCampaign';
import { ParticipateDrive } from './components/Events/Participate/Drive/ParticipateDrive';

function App() {
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
        </Routes>
        {/* <Fotter /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
