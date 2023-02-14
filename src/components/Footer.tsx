import React from 'react'
import { useNavigate } from 'react-router-dom'
import { readConfigFile } from 'typescript'

const Footer = () => {
    const navigate = useNavigate()
    return (
        <div className='footer'>

            <div className='footer-container'>
                <div>
                    <h3>Practice Areas</h3>
                    <ul>
                    <li onClick={() => navigate('/practicearea/corporate')}> Corporate Law</li>

                        <li onClick={() => navigate('/practicearea/mergersacquisitions')}>M & A</li>
                        <li onClick={() => navigate('/practicearea/securitieslaw')}>Securities Law</li>
                        <li onClick={() => navigate('/practicearea/taxlaw')}>Tax Law</li>
                        <li onClick={() => navigate('/practicearea/litigation')}>Litigation</li>

                    </ul>
                </div>
                <div>
                    <h3>Lawyers</h3>
                    <ul>
                        <li>Partners</li>
                        <li>Consultants</li>
                        <li>Associates</li>


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
        </div >
    )
}

export default Footer

