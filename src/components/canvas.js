import { OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import CARS from '../constants/cars';

const MyCanvas = ({ currentCar }) => {
  return (
    <Canvas>
      <Lights />
      <Suspense fallback={null}>
        <Model currentCar={currentCar} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default MyCanvas;

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[500, 0, 0]} intensity={1} />
      <directionalLight position={[-500, 0, 0]} intensity={1} />
      <directionalLight position={[0, 500, 0]} intensity={1} />
      <directionalLight position={[0, 0, 500]} intensity={1} />
      <directionalLight position={[0, 0, -500]} intensity={1} />
    </>
  );
};

const Model = ({ currentCar }) => {
  const gltf = useLoader(GLTFLoader, `./${CARS[currentCar].key}/scene.gltf`);

  return (
    <>
      <primitive
        object={gltf.scene}
        scale={CARS[currentCar].scale}
        position={CARS[currentCar].position}
        rotation={[0.18, 0.67, 0]}
        dispose={null}
      />
    </>
  );
};
