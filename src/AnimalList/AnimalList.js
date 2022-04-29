import React from 'react';
import Animal from '../Animal/Animal.js';

export default function AnimalList({ animals }) {
  return (
    <div className='animal-list'>

      {
        animals.map((animal) =>
          <Animal
            key={animal.name}
            {...animal}
          />
        )
      }

    </div>
  );
}

