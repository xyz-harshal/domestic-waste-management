import React from 'react'
import "./RewardCard.css"

 const RewardCard = ({title, description, image}) => {
  return (
    <div className='reward_card'>

        <img src={image} alt={title}  className='reward_image'/>
        <div className="reward_details">
            <h3 className='reward_title'>{title}</h3>
            <p className='reward_description'>{description}</p>
        </div>
        
    </div>
  );
};
export default RewardCard;