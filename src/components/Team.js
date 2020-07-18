import React, { Component } from 'react';
import './Team.css'
import {Gear, slideshowimg} from './../assets/'
import Teammember from './TeamMember'
export default class Team extends Component {
  render() {
    return (
    <div className='container-fluid'>
        <div className='Heading'>
            <br/>
            <h2 align="left">Team of 2019-2020</h2>
            <img align="left" style={{marginLeft:'250px'}} src={Gear} alt="LoGeargo" /> 
        </div>
        <div className='container-fluid mt-5 pt-5'>
        <div id="demo" class="carousel slide " data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img style={{height:'70vh'}} src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg" alt="nnone" />

                </div>
               
                <div class="carousel-item">
                <img src={slideshowimg} alt="Chicago" />
                </div>
            </div>
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>

        </div>

        </div>
        <div className="container-fluid mt-5 Team-members">
            <p className='member-postion'> CHAIRMAN</p>
            <div className="container-fluid d-flex">
                <div className="member-card-img-background">
                    <div className="member-card-img">
                        <img src={slideshowimg} style={{width:'100%'}} alt="Chicago" />
                    </div>
                </div>
                <div className="align-self-center">
                    <div className="member-details d-flex">
                        <div className="center-details align-self-center ">
                        <h3>Person Name</h3>
                        <p> Postion</p>
                        <p> Year</p>
                        </div>
                    </div>
                </div>
                <div className="align-self-center social-media-icons">
                    <div className='facebook-icon'>
                    <div className="rounded-circle social-background-one">
                    <div className="rounded-circle social-background-two">
                    <i class="fa fa-facebook"></i></div> 
                    </div>
                    </div>
                    <div className='instagram-icon mt-2'>
                        <div className="rounded-circle social-background-one">
                            <div className="rounded-circle social-background-two">
                                <i class="fa fa-instagram"></i></div> 
                        </div>
                    </div>
                    <div className='linkdin-icon mt-2'>
                        <div className="rounded-circle social-background-one">
                            <div className="rounded-circle social-background-two">
                                <i class="fa fa-linkedin"></i></div> 
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}
