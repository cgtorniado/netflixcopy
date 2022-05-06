import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Homepage from './Components/Homepage';
import Profiles from './Components/Profiles';
import Signin from './Components/Signin';
import Wrapper from './Components/Wrapper';
import IndividualMovie from './Components/IndividualMovie';


function App() {
    return (
        <Routes>
            <Route path="/"
                element={<Wrapper/>}/>
            <Route path="/signin"
                element={<Signin/>}/>
            <Route path="/profiles"
                element={<Profiles/>}/>
            <Route path="/homepage"
                element={<Homepage/>}/>          
            <Route path="/movie/:id" element={<IndividualMovie />}></Route>
        </Routes>
    );
}

export default App;
