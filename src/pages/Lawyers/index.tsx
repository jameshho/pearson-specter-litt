import React from 'react'
import { useNavigate } from 'react-router-dom'
import personnel from '../../data/personnel'

const Lawyers = () => {
  const navigate = useNavigate()
  return (

    // <div className='lawyers'>
    <div className='all-container'>
      <div></div>
      <div>

        <h1 >Connect with a Lawyer</h1>
        <div className='lawyers-container'>
          {personnel.map((i) => {
            return (
              <div className='lawyers-card' onClick={()=>navigate(`profile/${i.id}`)}>
                <img src={`/headshots/${i.img}`} />
                <p className='name'>{i.name}</p>
                
                <p>Partner</p>
              </div>)
          })}
        </div>

      </div>
    </div>
  )
}

export default Lawyers