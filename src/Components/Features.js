import React from 'react'
import feature1 from '../Images/feature1.png'
import feature2 from '../Images/feature2.jpeg'

const Features = () => {
    return (
        <div className='bg-black features'>
            <div className='row text-white segment1 pb-5'>
                <div className='col-12 col-lg-7 px-lg-5 py-5'>
                    <div className='px-lg-5 text-center text-lg-start d'>
                        <p className='h1 fw-1'>Enjoy on your TV.</p>
                        <p className='fs-3'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    </div>
                </div>

                <div className='col-12 col-lg-5 px-lg-5 featurecontainer text-center'>
                    <div className='videooverlay col-12 text-center justify-content-center'>
                        <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" className='video'/>
                    </div>

                    <div className='imgcontainer col-12 text-center justify-content-center'>
                        <img src={feature1}
                            alt="feature1"
                            className='feature1'/>
                    </div>
                </div>
            </div>

            <div className='row p-5 text-white segment2'>

                <div className='col-12 col-lg-5 featurecontainer2 text-center'>
                    <img src={feature2}
                        alt="feature2"
                        className='feature2'/>
                </div>

                <div className='col-12 col-lg-7 px-lg-5'>
                    <div className='px-lg-5 text-center text-lg-start'>
                        <p className='h1 fw-1'>
                            Download your shows to watch offline.</p>

                        <p className='fs-3'>
                            Save your favorites easily and always have something to watch.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
