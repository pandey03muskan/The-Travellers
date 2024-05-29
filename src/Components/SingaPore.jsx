import React from 'react';
import Classes from "../Styles/SingaPore.module.css";
import NavBar from './NavBar';
import Footer from './Footer';

const SingaporeTripPage = () => {
  return (<>
  <NavBar/>
    <div className={Classes.container}>
      <main>
        {/* <NavBar/> */}
        <header>
          <h1 className={Classes.heading}>Welcome to Your <span>Singapore Adventure!</span></h1>
        </header>
        <section className={Classes.maincontent}>
          <div className={Classes.tripdetails}>
            <h2 className={Classes.subheading}>Plan Your Trip to <span>Singapore</span></h2>
            <p className={Classes.description}>Discover the beauty and excitement of Singapore!</p>
            {/* <button className={Classes.button}>Book Now</button> */}
          </div>
          <div className={Classes.imagegallery}>
            {/* Add images of Singapore attractions */}
            <img src="https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg" alt="Singapore Image 1" />
            <img src="https://images.pexels.com/photos/290597/pexels-photo-290597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Singapore Image 2" />
            <img src="https://images.pexels.com/photos/326787/pexels-photo-326787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Singapore Image 3" />
          </div>
          <button className={Classes.button}>Book Now</button>
        </section>
      </main>
    </div>
    <Footer/>
    </>
  );
};

export default SingaporeTripPage;
