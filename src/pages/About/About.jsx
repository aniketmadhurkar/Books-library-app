import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Using the BookHub app, you can find and borrow a book with just a few taps. It has a built-in ebook reader and its own audiobook player! Plus, if you prefer, you can send books directly to your Kindle for reading. The Libby app allows you to sign in to multiple libraries with one or more library cards, stay signed in for as long as you like, download books for offline reading or stream them to save space, sample any book, read zoomable graphic novels and picture books, and consolidate all of your holds and loans on one convenient shelf! You can tag titles with ratings, sync loans and bookmarks, and keep track of your entire reading history. The possibilities are endless, and this app brings everything we love about libraries on the go.</p>
           
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
