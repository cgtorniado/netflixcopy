import React from 'react'
import logo from '../Images/logo.png'
import ProfileArray from './ProfileArray'
import {Link} from 'react-router-dom'

const Profiles = () => {
    return (
        <div className='bg-dark profiles'>
            <div className='row text-content px-5 py-4'>
                <div className='col-3'>
                    <img src={logo}
                        alt="logo"
                        className='logotopleft'/>
                </div>

                <div className='col-9'></div>
            </div>

            <div className='row justify-content-center'>
                <div className='col-9 text-center pt-5'>
                    <h1 className='h1 text-white'>Who's Watching?</h1>
                    <div className='row'>

                        {
                        ProfileArray.map((profile, index) => (
                            <div className='col pt-3 text-center profileholder'
                                key={index}>
                                <Link to="/homepage">

                                    <img src={
                                            require(`../Images/${
                                                profile.profilesrc
                                            }.png`)
                                        }
                                        alt="profileimg"
                                        className='profileimg'/>
                                    <br/>  <span className='fs-5'> {profile.name} </span></Link>
                            </div>
                        ))
                    } </div>

                    <div className='row pt-5 mt-5 justify-content-center'>
                        <div className='col-4 text-center manage'>
                            Manage Profiles

                        </div>

                    </div>


                </div>


            </div>
        </div>

    )
}

export default Profiles
