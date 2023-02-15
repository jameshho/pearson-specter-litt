import React from 'react'
import Logo from '../../components/Logo'
import MapComponent from './MapComponent'

const Contact = () => {
    return (
        <div className='contact'>
            <div></div>
            <div className='contact-container'>
                <Logo />

                <div className='contact-header'>
                    <h2>Contact</h2>
                </div>
                <MapComponent src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.149330581367!2d-73.9786736!3d40.7587402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fecf664df5%3A0x33d224a0d5dacca2!2sRockefeller%20Center!5e0!3m2!1sen!2sus!4v1676478228991!5m2!1sen!2sus" width="700" height="350" />

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