import { useState } from 'react';
import usePetData from '../../hooks/usePetData';
import PetListItem from './PetListItem';
import Modal from '../modals/Modal';
import AddEditForm from '../forms/AddEditForm';
import Search from '../controls/Search';
import SortBy from '../controls/SortBy';
import { Plus } from '@phosphor-icons/react';

const PetList = ({ petType }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const [sortBy, setSortBy] = useState('id');
  const [searchTerm, setSearchTerm] = useState('');
  const { pets, pet, addPet, updatePet, deletePet, error, setError } =
    usePetData(petType, sortBy, searchTerm);

  const handleAddEditClick = (petID) => {
    if (petID) {
      setSelectedPet(pet(petID));
    }
    setIsModalOpen(true);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPet(null);
    setError(null);
  };

  const onSubmit = async (e, formData) => {
    e.preventDefault();
    try {
      selectedPet ? await updatePet(formData) : await addPet(formData);
      onCloseModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex items-end mb-2 ">
        <Search setSearchTerm={setSearchTerm} />
        <SortBy sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <div className="flex w-full min-h-[50vh]  flex-wrap ">
        <Modal
          isOpen={isModalOpen}
          onClose={onCloseModal}
          children={
            <AddEditForm
              petType={petType}
              selectedPet={selectedPet}
              error={error}
              onSubmit={onSubmit}
            />
          }
        />

        {pets.length > 0 &&
          pets.map((pet) => (
            <PetListItem
              petType={petType}
              pet={pet}
              deletePet={deletePet}
              key={pet?.id}
              handleAddEditClick={handleAddEditClick}
            />
          ))}
        <div
          onClick={() => handleAddEditClick()}
          className="w-[300px] rounded-md mr-4 mb-4 h-[400px] bg-color4 border flex flex-col justify-center items-center cursor-pointer transition-transform transform hover:scale-105 border-color1"
        >
          Add a new {petType}
          <Plus className="w-10 h-10 mt-2" />
        </div>
      </div>
    </div>
  );
};

export default PetList;
