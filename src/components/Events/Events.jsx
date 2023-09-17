import React from 'react';

import { Link } from 'react-router-dom';

import "./Events.css";
import orgimage from "../../img/organize_drive.jpg"
import partimage from "../../img/participate_drive.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faFlag, faDumpster} from '@fortawesome/free-solid-svg-icons';

 const Events = () => {
  return (
    <div>
        <div className='events'>
            <header className='events_header'>

                <h1>Domestic Waste Management</h1>

                <p>Welcome to our waste management program.How would you like to contribute?</p>
            </header>

                <div className='options'>
                    
                    <div className="organize-section">

                        <div className='org_heading'>
                            <FontAwesomeIcon icon={faFlag}/>To Organize
                        </div>
                        <div className='org-image'>
                            <img  src={orgimage} alt='organize_image' width={400} height={400}/>
                        </div>

                            {/* option 1 */}
                        <div className='option'>
                           <Link to="/events/organize/drive">
                            <button> 
                            <FontAwesomeIcon icon={faBullhorn} /> Drive
                            </button>
                           </Link>
                        </div>

                        {/* option 2 */}
                        <div className="option">
                            <Link to="/events/organize/campaign">
                                <button>
                                <FontAwesomeIcon icon={faDumpster } /> Campaign
                                </button>
                            </Link>
                            
                        </div>

                    </div>

                    <div className="participate-section">
                        <div className='participate_heading'>
                            <FontAwesomeIcon icon={faFlag}/>
                            To Participate
                        </div>
                        <div className='part-image'>
                            <img  src={partimage} width={400} height={400} alt='participate_image'/>
                        </div>

                            {/* option 3 */}
                        <div className='option'>
                            <Link>
                                <button to="/events/participate/drive">
                                    <FontAwesomeIcon icon={faBullhorn}/>
                                    Drive
                                </button>
                            </Link>
                        </div>

                        {/* option 4 */}
                        <div className="option">
                           <Link>
                            <button to="/events/participate/campaign">
                                    <FontAwesomeIcon icon={faDumpster}/>
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