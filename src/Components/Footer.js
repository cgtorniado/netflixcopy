import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-black text-muted container-fluid'>

            <div className='row py-5'>
                <div className='col-2'></div>
                <div className='col-8'>
                    Questions ? Contact us.
                </div>
                <div className='col-2'></div>
            </div>


            <div className='row'>
                <div className='col-2'></div>
                <div className='col-2'>
                    <ul>
                        <li>FAQ</li>
                        <li>Help Center</li>
                        <li>Account</li>
                        <li>Media</li>
                    </ul>
                </div>
                <div className='col-2'>
                    <ul>
                        <li>Investor Relations</li>
                        <li>Jobs</li>
                        <li>Redeem Gift Cards</li>
                        <li>Buy Gift Cards</li>
                    </ul>

                </div>
                <div className='col-2'>
                    <ul>
                        <li>Ways to Watch</li>
                        <li>Terms of Use</li>
                        <li>Privacy</li>
                        <li>Cookie Preferences</li>
                    </ul>
                </div>
                <div className='col-2'>
                    <ul>
                        <li>Corporate Information</li>
                        <li>Contact Us</li>
                        <li>Speed Test</li>
                    </ul>
                </div>
                <div className='col-2'></div>
            </div>

            <div className='row py-5'>
                <div className='col-2'></div>
                <div className='col-8'>
                    Netflix Philippines
                </div>
                <div className='col-2'></div>
            </div>

        </footer>
    )
}

export default Footer
