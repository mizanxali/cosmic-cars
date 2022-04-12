import React from 'react';
import CARS from '../constants/cars';
import arrow from '../assets/Vector.svg';

const CarInfo = ({ currentCar, nextCar }) => {
  return (
    <>
      <div className="title">{CARS[currentCar].name}</div>

      <div className="stats">
        <div className="stat">
          <div className="statName">Speed </div>
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
          <div className="statName">Handling </div>
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
          <div className="statName">Acceleration </div>
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
          <div className="statName">Braking </div>
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
          className="nextArrow"
          src={arrow}
          alt="next-arrow"
        />
      </div>
    </>
  );
};

export default CarInfo;
