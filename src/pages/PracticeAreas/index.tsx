import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../components/Logo'
const PracticeAreas = () => {
    const navigate = useNavigate()
    return (
        <div className='frontpage'>
            <div className='logo-wrapper'>

                <Logo />
            </div>
            <div className='frontpage-container'>
                <h2 onClick={() => { navigate('corporate') }}>Corporate Law</h2>
                <h2 onClick={() => { navigate('mergersacquisitions') }}>M & A</h2>
                <h2 onClick={() => { navigate('securitieslaw') }}>Securities Law</h2>
                <h2 onClick={() => { navigate('taxlaw') }}>Tax Law</h2>
                <h2 onClick={() => { navigate('litigation') }}>Litigation</h2>

            </div>
        </div>
    )
}

export default PracticeAreas