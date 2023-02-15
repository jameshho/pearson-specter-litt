import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()
    return (
        <footer className='footer'>

            <div className='footer-container'>
                <div>
                    <h3>Practice Areas</h3>
                    <ul>
                        <li onClick={() => navigate('/pearson-specter-litt/practicearea/corporate')}> Corporate Law</li>

                        <li onClick={() => navigate('/pearson-specter-litt/practicearea/mergersacquisitions')}>M & A</li>
                        <li onClick={() => navigate('/pearson-specter-litt/practicearea/securitieslaw')}>Securities Law</li>
                        <li onClick={() => navigate('/pearson-specter-litt/practicearea/taxlaw')}>Tax Law</li>
                        <li onClick={() => navigate('/pearson-specter-litt/practicearea/litigation')}>Litigation</li>

                    </ul>
                </div>
                <div>
                    <h3>Lawyers</h3>
                    <ul>
                        <li onClick={() => navigate('/pearson-specter-litt/lawyers')}>Partners</li>
                        <li onClick={() => navigate('/pearson-specter-litt/lawyers')}>Consultants</li>
                        <li onClick={() => navigate('/pearson-specter-litt/lawyers')}>Associates</li>


                    </ul>
                </div>

                <div>
                    <h2>Contact Us</h2>
                    <p>601 E 54th St, New York City</p>

                    <p>New York, 10000</p>
                    <p>T: (212) 888 8888</p>
                    <p>F: (212) 888 8888</p>
                    <p>E: info@pearsonspecterlitt.com</p>


                </div>

            </div>
            <div className='footer-bottom'>
                <p>Copyright Pearson Specter Litt 2023.All rights reserved.</p>
            </div>
        </footer >
    )
}

export default Footer

