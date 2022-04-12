import React, { useState } from 'react';
import CARS from '../constants/cars';
import Canvas from './canvas';

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
    <div className="showroom">
      <div className="left">
        <Canvas currentCar={currentCar} />
      </div>
      <div className="right">
        <div className="title">
          <h1>{CARS[currentCar].name}</h1>
        </div>

        <div className="stats">
          <div className="stat">
            <div className="statName">Speed: </div>
            <div className="statBarOuter">
              <div
                className="statBarInner"
                style={{
                  width: `${CARS[currentCar].stats.speed * 10}%`
                }}
              ></div>
            </div>
          </div>

          <div className="stat">
            <div className="statName">Handling: </div>
            <div className="statBarOuter">
              <div
                className="statBarInner"
                style={{
                  width: `${CARS[currentCar].stats.handling * 10}%`
                }}
              ></div>
            </div>
          </div>

          <div className="stat">
            <div className="statName">Acceleration: </div>
            <div className="statBarOuter">
              <div
                className="statBarInner"
                style={{
                  width: `${CARS[currentCar].stats.acceleration * 10}%`
                }}
              ></div>
            </div>
          </div>

          <div className="stat">
            <div className="statName">Braking: </div>
            <div className="statBarOuter">
              <div
                className="statBarInner"
                style={{
                  width: `${CARS[currentCar].stats.braking * 10}%`
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="controls">
          <img
            onClick={nextCar}
            className="rightArrow"
            src="/Vector.svg"
            alt="next-arrow"
          />
        </div>
      </div>
    </div>
  );
};

export default Showroom;
