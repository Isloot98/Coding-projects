import { animals } from "./animals";
import React from "react";
import { createRoot } from "react-dom";

const container = document.getElementById("app");
const root = createRoot(container);

// App starts below this line
const title = "";
const background = (
  <img className='background' alt="ocean" src="/images/ocean.jpg" />
);

const displayFact = (e) => {
  const animal = e.target.alt;
  const optionIndex = Math.floor(Math.random() * animals[animal].facts.length);
  const funFact = animals[animal].facts[optionIndex];
  const p = document.getElementById("fact");
  p.innerHTML = funFact;
};

const images = [];

for (const animal in animals) {
  const image = (
    <img
      key={animal}
      className={animal}
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
  images.push(image);
}

const animalFacts = (
  <div>
    {background}
    <p id="fact"></p>
    <div className="animals">{images}</div>
    <h1>{title === "" ? "click an animal for a fun fact!" : title}</h1>
  </div>
);

root.render(animalFacts);
