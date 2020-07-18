import React from 'react'
import './Home.css'
import SocialRec from './SocialRec'
import {
    Switch,
    NavLink,
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import Navbar from './Navbar'
import Team from './Team'
import ContactUs from './ContactUs';
import Resources from './Resources';
import Aboutus from './Aboutus';
import Events from './Events';
import Participation from './Participation';
import Blogs from './Blogs';
import Gallery from './Gallery';
 class Home extends React.Component{
     render(){
         return(
             <Router>
             <div className="container-fluid"> 
                <SocialRec/>
                <Navbar/>
                
                <Switch>
                <Route path="/aboutus">
                        <Aboutus/>
                    </Route>
                    <Route path="/events">
                        <Events/>
                    </Route>
                    <Route path="/participation">
                        <Participation/>
                    </Route>
                    <Route path="/gallery">
                        <Gallery/>
                    </Route>
                    <Route path="/blogs">
                        <Blogs/>
                    </Route>
                    <Route path="/contactus">
                        <ContactUs/>
                    </Route>
                    <Route path="/team">
                        <Team/>
                    </Route>
                    <Route path="/resources">
                        <Resources/>
                    </Route>
                </Switch>
             </div>
             </Router>
         )
     }
 }
export default Home ;