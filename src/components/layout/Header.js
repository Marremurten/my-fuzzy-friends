import React from 'react';
import PetToggle from './PetToggle.js';
const Header = ({ petType, setPetType }) => {
  return (
    <header className="flex flex-col items-center justify-center mb-4 ">
      <div className="flex items-center justify-center w-full font-custom text-[64px]">
        <h1>My {petType === 'cat' ? 'Fuzzy Catz' : 'Dawgy Dawgz'}</h1>
      </div>
      <PetToggle petType={petType} setPetType={setPetType} />
    </header>
  );
};

export default Header;
