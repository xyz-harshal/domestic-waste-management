import React from 'react';

import { Link } from 'react-router-dom';

import "./Events.css";
import orgimage from "../../img/organize_drive.jpg"
import partimage from "../../img/participate_drive.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faFlag, faDumpster } from '@fortawesome/free-solid-svg-icons';

const Events = () => {
    return (
        <div>
            <div className='events mt-8'>
                <div className='events_header flex flex-col justify-center items-center'>
                    <p className='event_header_main'>Domestic Waste Management</p>
                    <div>
                        <p>Welcome to our waste management program. How would you like to contribute?</p>
                    </div>
                </div>

                <div className='options mt-10'>
                    <div className="organize-section flex flex-col gap-3">
                        <div className='org_heading flex flex-row justify-center gap-3'>
                            <FontAwesomeIcon icon={faFlag} className='pt-1' fontSize={"1.4rem"} />To Organize
                        </div>
                        <div className='org-image'>
                            <img src={orgimage} alt='organize_image' width={400} height={400} />
                        </div>
                        {/* option 1 */}
                        <div className='option'>
                            <Link to="/events/organize/drive">
                                <button>
                                    <FontAwesomeIcon icon={faBullhorn} className='me-1'/> Drive
                                </button>
                            </Link>
                        </div>
                        {/* option 2 */}
                        <div className="option">
                            <Link to="/events/organize/campaign">
                                <button>
                                    <FontAwesomeIcon icon={faDumpster} className='me-1'/> Campaign
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="participate-section flex flex-col gap-3">
                        <div className='participate_heading flex flex-row justify-center gap-3'>
                            <FontAwesomeIcon icon={faFlag} className='pt-1' fontSize={"1.4rem"} />To Participate
                        </div>
                        <div className='part-image'>
                            <img src={partimage} width={400} height={400} alt='participate_image' />
                        </div>
                        {/* option 3 */}
                        <div className='option'>
                            <Link to="/events/participate/drive">
                                <button >
                                    <FontAwesomeIcon icon={faBullhorn} className='me-1'/> Drive
                                </button>
                            </Link>
                        </div>
                        {/* option 4 */}
                        <div className="option">
                            <Link to="/events/participate/campaign">
                                <button >
                                    <FontAwesomeIcon icon={faDumpster} className='me-1'/> Campaign
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