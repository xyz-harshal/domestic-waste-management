import React from 'react'
import rewardsData from "./data.js"
import diamond from "../../img/diamond_points.jpg"
import "./index.css"
 const Rewards = () => {

  return (
    
    <div className='rewards_container'>
      <div className='heading_container'>
          <p className='heading_reward'>Grab Exciting Rewards!</p>
          {/* <img src={diamond} alt="points earned" width={40} height={40} /> */}
          <div className='diamond_point_cont'>
                                  <img src={diamond} alt="points"  loading='lazy' className='diamond_img'/>
                                  <div className='points user_points'>{10}</div>
          </div>
      </div>
        
        {
                   rewardsData.map( (reward, index) => (
                    <>
                    <div className="reward_card" key={index}>
                            <div className="reward_details">
                                <h3 className='reward_title'>{reward.title}</h3>
                                <p className='reward_description'>{reward.description}</p>

                                <button className="claim_button">Claim Now</button>
                            </div>

                            <div className='img_diamond_cont'>
                                <img src={reward.image} alt={reward.title} loading='lazy' className='reward_image'/>
                                
                                <div className='diamond_point_cont'>
                                  <img src={diamond} alt="points"  loading='lazy' className='diamond_img'/>
                                  <div className='points'>{reward.pointsToEarn}</div>
                                </div>
                                

                            </div>
                            

                    </div>
                    </>  

                 ) )
        }
    </div>
  )
}
export default Rewards;
