import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Logo from '../../../components/Logo'
import CollapseAll from './Collapse'
import Collapse from './Collapse'
import personnel from '../../../data/personnel';



const Profile = () => {
    const { lawyerId } = useParams();
    const theData = personnel.find((i) => i.id === Number(lawyerId))
    console.log(theData)
    return (
        <div>

            <div className='profile'>
                {/* <Logo /> */}
                <div className='profile-container'>
                    <div className='left'>
                        <h1 className="profile-name">{theData?.name}</h1>
                        <CollapseAll theData={theData} />


                    </div>

                    <div className="right ">
                        <img src={`/headshots/${theData?.img}`} />
                        <h3>{theData?.name}</h3>

                        <p className='right-title'>Partner</p>
                        <p >Email:</p>
                        <p className='right-email'>{theData?.name.toLowerCase().replace(' ', '-')}@pearsonspecterlitt.com</p>

                        <p>Direct line: (212) 888 8888</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile