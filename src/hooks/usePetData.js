import { useState, useEffect } from 'react';
import catsData from '../data/cats';
import dogsData from '../data/dogs';

const usePetData = (petType, sortBy, searchTerm) => {
  const [pets, setPets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    petType === 'cat' ? setPets(catsData) : setPets(dogsData);
  }, [petType]);

  // generateUniqueId() is a helper function that generates a unique ID for a new pet.
  const generateUniqueId = () => {
    let newId = pets.length + 1;
    while (isIdUnique(newId)) {
      newId++;
    }
    return newId;
  };

  const isIdUnique = (id) => {
    return pets.some((pet) => pet.id === id);
  };

  // pet() is a helper function that returns a pet by ID.
  const pet = (petId) => {
    return pets.find((pet) => pet.id === petId);
  };

  // addPet() is a helper function that adds a new pet to the pets array.
  const addPet = (pet) => {
    return new Promise((resolve, reject) => {
      try {
        if (!pet.name || !pet.dateOfBirth) {
          throw new Error('Name and date of birth are required.');
        }

        const newId = generateUniqueId();
        pet.id = newId;
        setPets([...pets, pet]);
        setError(null);
        resolve();
      } catch (error) {
        setError(error.message);
        console.log(error);
        reject(error);
      }
    });
  };

  // updatePet() is a helper function that updates an existing pet in the pets array.
  const updatePet = (updatedPet) => {
    return new Promise((resolve, reject) => {
      try {
        if (!updatedPet.name || !updatedPet.dateOfBirth) {
          throw new Error('Name and date of birth are required.');
        }
        const updatedPets = pets.map((pet) =>
          pet.id === updatedPet.id ? updatedPet : pet
        );
        setPets(updatedPets);
        setError(null);

        resolve(); // Resolve the promise if successful
      } catch (error) {
        setError(error.message);
        reject(error); // Reject the promise with the error
      }
    });
  };

  // deletePet is a helper function that deletes a pet from the pets array.
  const deletePet = (petId) => {
    const updatedPets = pets.filter((pet) => pet.id !== petId);
    setPets(updatedPets);
  };

  // sortPets() is a helper function that sorts pets by the selected sort option.
  const sortPets = (petsArray) => {
    return petsArray.slice().sort((a, b) => {
      if (sortBy === 'id') return a.id - b.id;
      if (sortBy === 'name') a.name.localeCompare(b.name);
      if (sortBy === 'age') return a.dateOfBirth.localeCompare(b.dateOfBirth);
      if (sortBy === 'gender') a.gender.localeCompare(b.gender);
    });
  };

  // filterPets() is a helper function that filters pets by the search term.
  const filterPets = (petsArray) => {
    if (!searchTerm) {
      return petsArray;
    }
    return petsArray.filter((pet) =>
      pet.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // sortedAndFilteredPets is an array of pets that have been sorted and filtered.
  // futher development: if the data set is large, I may consider memoizing this function using useMemo() to improve performance.
  const sortedAndFilteredPets = filterPets(sortPets(pets));

  return {
    pets: sortedAndFilteredPets,
    pet,
    addPet,
    updatePet,
    deletePet,
    error,
    setError,
  };
};

export default usePetData;