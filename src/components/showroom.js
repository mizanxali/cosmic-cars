import React, { useState } from 'react';
import CARS from '../constants/cars';
import Canvas from './canvas';
import CarInfo from './carInfo';

const Showroom = () => {
  const [currentCar, setCurrentCar] = useState(0);

  function nextCar() {
    if (currentCar !== CARS.length - 1) {
      const newCar = currentCar + 1;
      console.log(newCar);
      setCurrentCar(newCar);
    } else {
      window.location.reload();
    }
  }

  return (
    <div className="container">
      <div className="header">
        <span className="brand">Cosmic Cars</span>
      </div>
      <div className="showroom">
        <div className="left">
          <Canvas currentCar={currentCar} />
        </div>
        <div className="right">
          <CarInfo currentCar={currentCar} nextCar={nextCar} />
        </div>
      </div>
      <div className="footer">
        <div>
          developed by <a href="https://twitter.com/mizanxali">mizanxali</a> ·
          3D car assets by <a href="https://sketchfab.com/OneSteven">iSteven</a>
          , licensed under&nbsp;
          <a href="http://creativecommons.org/licenses/by-nc/4.0/">
            Creative Commons Attribution-NonCommercial
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default Showroom;
