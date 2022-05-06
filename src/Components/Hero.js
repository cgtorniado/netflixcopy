import React from 'react'
import logo from '../Images/logo.png'
import {Link} from 'react-router-dom'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='overlayblack py-4 px-lg-5 pb-lg-5 px-4'>
                <div className='row text-content pb-lg-5 mb-me-5'>
                    <div className='col-3'>
                        <img src={logo}
                            alt="logo"
                            className='logotopleft'/>
                    </div>
                    <div className='col-6'></div>
                    <div className='col-3 text-end'>
                        <Link to="signin">
                            <button type="button" className='btn btn-danger'>Sign In</button>
                        </Link>
                    </div>
                </div>


                <div className='row pt-lg-5'>
                    <div className='row text-content text-white text-center justify-content-center pt-me-5'>

                        <div className='col-8 pt-5 align-items-center px-me-5'>
                            <p className='display-lg-3 fw-bold h1 px-me-5'>
                                Unlimited movies, TV shows,and more.
                            </p>

                            <p className='fs-3'>
                                Watch anywhere. Cancel anytime.
                            </p>
                            <p className='fs-5'>
                                Ready to watch? Enter your email to create or restart your membership.
                            </p>
                        </div>
                    </div>

                    <div className='row text-white g-0 text-center mx-auto justify-content-center'>
                        <div className='col-12 col-lg-1'></div>
                        <div className='col-12 col-lg-4'>
                            <input type="email" className="form-control px-lg-2 my-3 py-lg-3 rounded-0" placeholder='Email address' width="100%"/>

                        </div>

                        <div className='col-12 col-lg-3 text-center text-lg-start my-3'>
                            <button type="button" className='btn btn-danger rounded-0 p-me-3 fs-3'>
                                Get Started
                                <i className="bi bi-chevron-right"></i>
                            </button>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}


export default Hero
