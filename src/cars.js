const CARS = [
  {
    name: 'Alfa Romeo 8C',
    key: 'alfa-romeo_8c',
    scale: 0.012,
    position: [0, -0.5, 0],
    description: '',
    stats: {
      speed: 7.2,
      handling: 6.6,
      acceleration: 8.0,
      braking: 6.8
    }
  },
  {
    name: 'Aston Martin V12 Vantage',
    key: 'aston-martin_v12_vantage',
    scale: 0.012,
    position: [0, -0.5, 0],
    description: '',
    stats: {
      speed: 8.2,
      handling: 6.2,
      acceleration: 7.7,
      braking: 6.4
    }
  },
  {
    name: 'Audi RS5',
    key: 'audi_rs5',
    scale: 1.55,
    position: [0, -0.5, 0],
    description: '',
    stats: {
      speed: 6.9,
      handling: 6.2,
      acceleration: 7.4,
      braking: 5.9
    }
  },
  {
    name: 'Bentley Continental GT Supersports',
    key: '2011_bentley_continental_gt_supersports',
    scale: 0.01,
    position: [0, -0.5, 0],
    description: '',
    stats: {
      speed: 9.9,
      handling: 5.1,
      acceleration: 7.7,
      braking: 5.8
    }
  },
  {
    name: 'BMW i8',
    key: 'bmw_i8',
    scale: 0.011,
    position: [0, 0.2, 0],
    description: '',
    stats: {
      speed: 7.2,
      handling: 6.4,
      acceleration: 7.9,
      braking: 4.8
    }
  },
  {
    name: 'Bugatti Chiron',
    key: 'bugatti_chiron',
    scale: 0.012,
    position: [0, -0.2, 0],
    description: '',
    stats: {
      speed: 10.0,
      handling: 7.9,
      acceleration: 9.9,
      braking: 8.6
    }
  },
  {
    name: 'Ferrari 458 Italia',
    key: 'ferrari_458_italia',
    scale: 0.012,
    position: [0, -0.3, 0],
    description: '',
    stats: {
      speed: 7.9,
      handling: 7.2,
      acceleration: 8.9,
      braking: 6.9
    }
  },
  {
    name: 'Ford Mustang Shelby GT350R',
    key: 'ford_mustang_gt-350r',
    scale: 0.012,
    position: [0, -0.2, 0],
    description: '',
    stats: {
      speed: 7.2,
      handling: 5.5,
      acceleration: 8.4,
      braking: 5.5
    }
  },
  {
    name: 'Jaguar C-X75',
    key: 'jaguar_c-x75',
    scale: 0.45,
    position: [0, 0.2, 0],
    description: '',
    stats: {
      speed: 8.3,
      handling: 7.9,
      acceleration: 9.8,
      braking: 8.5
    }
  },
  {
    name: 'Kia Sportage',
    key: '2017_kia_sportage',
    scale: 0.02,
    position: [0, 0.2, 0],
    description: '',
    stats: {
      speed: 4.4,
      handling: 4.3,
      acceleration: 4.9,
      braking: 4.1
    }
  },
  {
    name: 'Koenigsegg One:1',
    key: 'koenigsegg_one1',
    scale: 1.58,
    position: [0, 0.2, 0],
    description: '',
    stats: {
      speed: 10.0,
      handling: 9.5,
      acceleration: 7.0,
      braking: 10.0
    }
  },
  {
    name: 'Lamborghini Aventador J',
    key: 'lamborghini_aventador_j',
    scale: 0.005,
    position: [0, 0.2, 0],
    description: '',
    stats: {
      speed: 8.3,
      handling: 7.9,
      acceleration: 9.4,
      braking: 8.3
    }
  },
  {
    name: 'Land Rover Range Rover Evoque',
    key: 'range_rover_evoque',
    scale: 2.5,
    position: [0, 0, 0],
    description: '',
    stats: {
      speed: 6.5,
      handling: 4.0,
      acceleration: 6.0,
      braking: 4.1
    }
  },
  {
    name: 'Mazda 3',
    key: 'mazda_3',
    scale: 0.0125,
    position: [0, 0.2, 0],
    description: '',
    stats: {
      speed: 4.2,
      handling: 4.3,
      acceleration: 4.3,
      braking: 4.3
    }
  },
  {
    name: 'McLaren F1',
    key: 'mclaren_f1',
    scale: 0.0125,
    position: [0, -0.4, 0],
    description: '',
    stats: {
      speed: 8.9,
      handling: 6.6,
      acceleration: 8.6,
      braking: 5.7
    }
  },
  {
    name: 'Mercedes-Benz SLS AMG',
    key: 'mercedes-benz_sls_amg',
    scale: 0.006,
    position: [0, -0.5, 0],
    description: '',
    stats: {
      speed: 7.6,
      handling: 6.5,
      acceleration: 5.8,
      braking: 6.4
    }
  },
  {
    name: 'Mistubishi Lancer Evolution X',
    key: 'mitsubishi_lancer_evolution_x',
    scale: 0.012,
    position: [0, -0.3, 0],
    description: '',
    stats: {
      speed: 5.9,
      handling: 4.9,
      acceleration: 7.0,
      braking: 4.8
    }
  },
  {
    name: 'Nissan GT-R',
    key: 'nissan_gt-r',
    scale: 0.012,
    position: [0, -0.4, 0],
    description: '',
    stats: {
      speed: 7.7,
      handling: 5.1,
      acceleration: 8.2,
      braking: 5.1
    }
  },
  {
    name: 'Peugeot 3008',
    key: 'peugeot_3008',
    scale: 0.012,
    position: [0, 0.4, 0],
    description: '',
    stats: {
      speed: 5.5,
      handling: 4.1,
      acceleration: 5.3,
      braking: 4.1
    }
  },
  {
    name: 'Peugeot Onyx',
    key: 'peugeot_onyx',
    scale: 1.27,
    position: [0, -0.4, 0],
    description: '',
    stats: {
      speed: 8.5,
      handling: 9.2,
      acceleration: 10.0,
      braking: 9.4
    }
  },
  {
    name: 'Tesla Model S',
    key: 'tesla_model_s',
    scale: 0.6,
    position: [0, -0.4, 0],
    description: '',
    stats: {
      speed: 5.3,
      handling: 6.6,
      acceleration: 7.8,
      braking: 7.7
    }
  }
];

export default CARS;
