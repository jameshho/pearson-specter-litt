import React from 'react'
import Logo from '../components/Logo'

const Contact = () => {
    return (
        <div className='contact'>
            <div></div>
            <div className='contact-container'>
                <Logo />

                <div className='contact-header'>
                    <h2>Contact</h2>
                </div>
                <img src="images/google-map.png" className="contact-map" />
                <div className='contact-bottom'>
                    <div>

                        <p>601 E 54th St, New York City</p>

                        <p>New York, 10000</p>
                        <p>T: (212) 888 8888</p>
                        <p>F: (212) 888 8888</p>
                        <p>E: info@pearsonspecterlitt.com</p>



                    </div>
                    <div>
                        {/* <h2>
                            Google Maps
                        </h2>
                        <p>

                            https://goo.gl/maps/h9AwvY2RsfG2
                        </p> */}
                    </div>






                </div>

            </div>
        </div>
    )
}

export default Contact