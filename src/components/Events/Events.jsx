import React from 'react';
// import { OrganizeDrive } from './Organize/Drive/OrganizeDrive';
// import {ParticipateDrive} from './Participate/Drive/ParticipateDrive';
// import {OrganizeCampaign} from './Organize/Campaign/OrganizeCampaign';
// import {ParticipateCampaign} from './Participate/Campaign/ParticipateCampaign';
import { Link } from 'react-router-dom';

import "./Events.css";
import orgimage from "../../img/drive.jpg"
import partimage from "../../img/rallies.webp"
 const Events = () => {
  return (
    <div>
        <div className='events'>
            <header className='events_header'>

                <h1>Domestic Waste Management</h1>

                <p>Welcome to our waste management program.How would you like to participate?</p>
            </header>

                <div className='options'>
                    
                    <div className="organize-section">

                        <div className='org_heading'>
                            To Organize
                        </div>
                        <div className='org-image'>
                            <img  src={orgimage} alt='organize_image' width={400} height={400}/>
                        </div>

                            {/* option 1 */}
                        <div className='option'>
                           <Link to="/events/organize/drive">
                            <button> 
                                Drive
                            </button>
                           </Link>
                        </div>

                        {/* option 2 */}
                        <div className="option">
                            <Link to="/events/organize/campaign">
                                <button>
                                Campaign
                                </button>
                            </Link>
                            
                        </div>

                    </div>

                    <div className="participate-section">
                        <div className='participate_heading'>
                            To Participate
                        </div>
                        <div className='part-image'>
                            <img  src={partimage} width={400} height={400} alt='participate_image'/>
                        </div>

                            {/* option 3 */}
                        <div className='option'>
                            <Link>
                                <button to="/events/participate/drive">
                                    Drive
                                </button>
                            </Link>
                        </div>

                        {/* option 4 */}
                        <div className="option">
                           <Link>
                            <button to="/events/participate/campaign">
                                    Campaign
                                </button>
                           </Link>
                        </div>

                    </div>


                </div>
                
            

        </div>
    </div>
  )
}

export default Events