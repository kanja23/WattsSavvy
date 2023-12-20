import React from 'react'
import './homeEfficiency.css'
import bh3 from '../../assets/img/bh3.jpeg'
import bh4 from '../../assets/img/bh4.jpeg'
import bh5 from '../../assets/img/bh5.jpg'
import bh6 from '../../assets/img/bh6.jpeg'
import HomeEfficiencyCard2 from '../homeEfficiencyCard2/HomeEfficiencyCard2'

const Howitworks = () => {
  return (
    <div className='max-wrapper howitworks-wrapper'>
      <div className='max-wrapper-content'>
        <div className='howitworks'>
          <div className='howitworks-title'>
            <h2 className='heading-sm'>HOW IT WORKS</h2>
            <h1 className='heading-lg'>
              Turn your commitment to energy efficiency into cash by adopting sustainable practices.
            </h1>
          </div>
          <div className='howitworks-content'>
            <HomeEfficiencyCard2
              img={bh3}
              title='ENERGY-EFFICIENT SERVICE DELIVERY'
              content="Experience seamless service with our energy-efficient pick-up options. Schedule a collection today, and we'll efficiently manage your sustainability efforts, making every step of your energy efficiency journey smooth and environmentally conscious"
            />
            <HomeEfficiencyCard2
              img={bh4}
              title='DROP-OFF'
              content=' Find a dropoff center around you and deliver your recyclable waste locally'
            />
            <HomeEfficiencyCard2
              img={bh5}
              title='EARN POINTS'
              content="Accumulate points for every eco-conscious action, It's a win-win for you and the environment"
            />
            <HomeEfficiencyCard2
              img={bh6}
              title='CASH REDEMPTION'
              content='Get up to 100 KLIN points within 2 months and have your points converted to a cash or gift price, ready for redemption '
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Howitworks
