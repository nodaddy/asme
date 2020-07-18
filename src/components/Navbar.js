import React from 'react'
import {asmeLogo} from '../assets'
import './Navbar.css'
import {NavLink} from 'react-router-dom'
class Navbar extends React.Component {
    render(){
        return(
            
                    <div className="row navBorder">
                        <div className="col-sm-2"><img id="mainLogo" src={asmeLogo}/></div>
                        
                       
                        <div className="col-sm-10">
                            <div className="row" id="subNavbar">
                            <div className="col-sm-1" id="subNavGradient">
                               <table>
                                   <tr>
                                       {/*inline CSS to be transferred to .CSS file*/}
                                       <td style={{backgroundColor:"rgb(141, 221, 243)"}}></td>
                                   </tr>
                               </table>
                               </div>
                               <div className="col-sm-11" style={{padding:'10px',background: '#00B2FF'}}>
                               <table>
                                   <tr>
                                       <td className="subNavCol"><NavLink className="subNavButton" to="/aboutus" style={{textDecoration:'none',color:'white'}}>About Us</NavLink></td>
                                       <td className="subNavCol"><NavLink className="subNavButton" to="/events" style={{textDecoration:'none',color:'white'}}>Events</NavLink></td>
                                       <td className="subNavCol"><NavLink className="subNavButton" to="/participation" style={{textDecoration:'none',color:'white'}}>Participation</NavLink></td>
                                       <td className="subNavCol"><NavLink to="/blogs" style={{textDecoration:'none',color:'white'}}>Blog</NavLink></td>
                                    
                                       <td className="subNavCol"><NavLink className="subNavButton" to="/gallery" style={{textDecoration:'none',color:'white'}}>Gallery</NavLink></td>
                                    
                                       <td className="subNavCol"><NavLink className="subNavButton" to="/resources" style={{textDecoration:'none',color:'white'}}>Resources</NavLink></td>
                                    
                                       <td className="subNavCol"><NavLink className="subNavButton" to="/team" style={{textDecoration:'none',color:'white'}}>Team</NavLink></td>
                                    
                                       <td className="subNavCol"><NavLink className="subNavButton" to="/contactus" style={{textDecoration:'none',color:'white'}}>Contact Us</NavLink></td>
                                      

                                   </tr>
                               </table>
                               </div>
                                
                            </div>
                        </div>
                      

                    </div>
             
        )
    }
}

export default Navbar;