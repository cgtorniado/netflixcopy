import logo from '../Images/logo.png'
import Footer from './Footer'
import { useNavigate, Link } from 'react-router-dom';
import React, { useRef, useState } from 'react';


const Signin = () => {

    const [loginValidity, setLoginValidity] = useState(false);
    const [passValidity, setPassValidity] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
  
  
    let navigate = useNavigate();
    let emailRef = useRef();
    let passwordRef = useRef();
  
  
    const loginFn = () => {
      if (loginValidity && passValidity) {
        navigate("/profiles")
      }
    }
  
    const handleClick = (event) => {
  
      event.preventDefault();
      if (passwordRef.current.value === "admin" && emailRef.current.value === "admin@admin.com") {
        setLoginValidity(true)
        setPassValidity(true)
        loginFn()
      }
  
      else {
        setErrorMessage("Please check email and/or password")
      }
  
    }

    return (
        <>
            <div className='signin'>
                <div className='overlayblack pb-5'>
                    <div className='row text-content pb-lg-5 mb-me-5'>
                        <div className='col-3 p-5'>
                            <img src={logo}
                                alt="logo"
                                className='logotopleft'/>
                        </div>
                        <div className='col-9'></div>
                    </div>

                    <div className='row justify-content-center'>
                        <div className='formbg col-lg-5 col-me-6 col-sm-10 col-12'>
                            <div className='formcontent p-5'>
                                <h1 className='h1 pb-4 text-white'>
                                    Sign In
                                </h1>

                                <div className="form-floating mb-4">
                                    <input type="email" className="form-control bg-dark border-dark text-white" id="floatingInput" placeholder="name@example.com" ref={emailRef}/>
                                    <label className='text-muted'>Email or Phone number</label>
                                </div>
                                <div className="form-floating">
                                    <input type="password" className="form-control bg-dark border-dark text-white" id="floatingPassword" placeholder="Password" ref={passwordRef}/>
                                    <label className='text-muted'>Password</label>
                                </div>

                                <div className='text-center' style={{ color: "red" }}>{errorMessage}</div>

                                <div className="buttonholder mt-5">
                             
                                        <button type="button" onClick={handleClick} className='btn btn-danger col-12 p-3 fw-bold fs-6'>Sign In</button>
                                    

                                </div>

                                <div className="checkhelp mt-3 row text-white fs-6">
                                    <div className='col-6 text-start'>
                                        <input type="checkbox"/>
                                        <span className='ps-2'>
                                            Remember me
                                        </span>
                                    </div>

                                    <div className='col-6 text-end'>
                                        Need help?
                                    </div>

                                </div>

                                <div className="checkhelp mt-5 row">
                                    <div className='col-12 text-start fs-5'>

                                        <span className='text-muted'>
                                            New to Netflix?
                                        </span>
                                        <span className='text-white'>
                                            &nbsp; Sign up now
                                        </span>

                                    </div>

                                    <div className='col-12 text-start text-muted mt-3'>
                                        This page is protected by Google reCAPTCHA to ensure you 're not a bot. Learn more.

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>

    )
}

export default Signin
