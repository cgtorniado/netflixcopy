import React from 'react'
import Navbar from './Navbar'
import CategoryDetail from './CategoryDetail'
import { Link } from 'react-router-dom'
import Recommendations from './Recommendations'
import CategoryDetailTrending from './CategoryDetailTrending'



const Homepage = () => {
    return (
        <div className='bg-black text-white loggedin'>
            <Navbar/>

            <div className='row homehero' style={{backgroundImage:"url(https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/01/Jujutsu-Kaisen-0-poster.jpg)", height:"70vh", width:"100vw", backgroundSize:"cover"}}>

                <div className='row'>
                <div className='col-12' style={{height:"17vh"}}></div>
                <div className='col-12 col-lg-6 px-5 display-1'>
                    Jujutsu Kaisen
                </div>
               
                </div>

                <div className='row'>
                <div className='col-12 col-lg-6 px-5 lead'>
                Yuta Okkotsu, a high schooler who gains control of an extremely powerful Cursed Spirit and gets enrolled in the Tokyo Prefectural Jujutsu High School by Jujutsu Sorcerers to help him control his power and keep an eye on him.
                </div>
                </div>
                
                <div className='row'>
                <div className='col-12 col-lg-2 px-5'>
                   <Link to="/movie/810693"> <button type="button" className="btn btn-light p-2 fs-5" style={{width:"200px"}}><i className="bi bi-play-fill p-1"></i>Play Now</button></Link>
                </div>


                <div className='col-12 col-lg-2 px-5'>
                    <button type="button" data-bs-toggle="modal" data-bs-target="#jjk" 
                     className="btn btn-light p-2 fs-5 border-0" style={{width:"200px", backgroundColor:"rgba(255, 255, 255, 0.5)"}}><i className="bi bi-info-circle-fill p-1"></i>More Info</button></div>
                </div>

                <div className="modal fade" data-bs-backdrop="static" id="jjk" tabIndex="-1" aria-labelledby="jjk" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header" style={{ backgroundImage: `url(https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/01/Jujutsu-Kaisen-0-poster.jpg)`, height: "40vh", backgroundSize: "cover", position: "relative" }}>
                        <h2 className="modal-title p-3" id="labeljjk810693" style={{ position: "absolute", bottom: "0%", textShadow: "0px 1px 3px black" }}>Jujutsu Kaisen</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-4">
                        <div className="col p-2">
                            <Link to="/movie/810693"><button type="button" className="btn btn-dark btn-lg">Play Trailer</button></Link> <br />
                            <div className="col py-2">
                            <p>
                            <small> Release: 2021-12-24</small> <br />
                            <small> Popularity: 7.7/10 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Voter count:125 votes </small> <br />
                            <br />
                            Yuta Okkotsu, a high schooler who gains control of an extremely powerful Cursed Spirit and gets enrolled in the Tokyo Prefectural Jujutsu High School by Jujutsu Sorcerers to help him control his power and keep an eye on him.
                            </p>
                            </div>
                            <Recommendations id={810693} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Back</button>
                        </div>
                        </div>
                    </div>
                    </div>
          </div>
                

            </div>


            <CategoryDetailTrending category="Trending Movies this Week" apicategory="trending/movie/week" />
            <CategoryDetail category="Upcoming Movies" apicategory="movie/upcoming"/>
            <CategoryDetail category="Top Rated" apicategory="movie/top_rated"/>
            <CategoryDetail category="Now Playing" apicategory="movie/now_playing"/> 

        </div>
    )
}

export default Homepage
