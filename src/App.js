import React, { useState } from 'react';
import './index.css';

import salo1 from './assets/Salo3.jpeg';
import salo2 from './assets/Salo4.jpeg';
import salo3 from './assets/Salo5.jpeg';
import salo4 from './assets/Salo2.jpeg';
import salo5 from './assets/Salo1.jpeg';

const images = [salo1, salo2, salo3, salo4, salo5];

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleChange = () => {
    const imagesLength = images.length - 1;
    setCurrentImage((currentImage) => {
      return currentImage < imagesLength ? currentImage + 1 : 0;
    });
  };

  return (
    <section>
      <header>
        <h1>Salomon ADV</h1>
        <h2>
          {/* br is inserted for formatting */}
          Editorial: Salomon Advanced
          <br />
          Photography by Asato Iida
        </h2>
      </header>
      <figure>
        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>
        <img alt='' src={images[currentImage]} onClick={handleChange} />
      </figure>
    </section>
  );
};

export default App;
