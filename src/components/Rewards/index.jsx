import React from 'react'
import rewardsData from "./data.js"
import "./index.css"
import { FaStar } from "react-icons/fa";
const Rewards = () => {
  return (
    <>
      <div className='heading_container'>
        <p className='heading_reward'>Grab Exciting Rewards!</p>
        <div className='diamond_point_cont p-2'>
          <p className='ur-reward'>Your Rewards: </p>
          <p className='points user_points'>{10}</p>
          <FaStar size={"1.35rem"} color="#03C03C" />
        </div>
      </div>
      <div className='rewards_container'>
        {
          rewardsData.map((reward, index) => (
            <>
              <div className="reward_card" key={index}>
                <div className="reward_details">
                  <div className='flex flex-row gap-8'>
                    <p className='reward_title'>{reward.title}</p>
                    <div className='diamond_point_cont px-4'>
                      <p className='ur-reward'>Price: </p>
                      <div className='points'>{reward.pointsToEarn}</div>
                      <FaStar size={"1.35rem"} color="#03C03C" />
                    </div>
                  </div>
                  <p className='reward_description'>{reward.description}</p>
                  <button className="claim_button">Claim Now</button>
                </div>
                <div className='img_diamond_cont'>
                  <img src={reward.image} alt={reward.title} loading='lazy' className='reward_image' />
                </div>
              </div>
            </>

          ))
        }
      </div>
    </>

  )
}
export default Rewards;
