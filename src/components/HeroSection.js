import React from 'react'
import '../App.css';
import { Button, ButtonL } from './Button'
import './HeroSection.css';

export default function HerioSection() {
    return (
        <div className='hero-container'>
          <video src='/videos/video-1.mp4' autoPlay loop muted />
          <h1>ADVENTURE AWAITS</h1>
          <p>What are you waiting for?</p>
          <div className='hero-btns'>
            <ButtonL className='btns' buttonStyle='btn--outline' buttonSize='btn--large'> GET STARTED</ButtonL>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'> WATCH TRAILER <i className='far fa-play-circle' /></Button>
          </div>
        </div>
      ); 
}

