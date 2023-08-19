import { formatDate } from '../../utils/helperFunctions';
import { Pencil, Trash } from '@phosphor-icons/react';

const PetListItem = ({ pet, deletePet, handleAddEditClick, petType }) => {
  return (
    <div className="relative  w-[300px] rounded-md mr-4 mb-4 h-[400px] bg-color4 border border-color1 ">
      <div className="absolute flex right-3 top-3">
        <button
          onClick={() => {
            handleAddEditClick(pet.id);
          }}
          className="mr-1"
        >
          <Pencil className="w-6 h-6" />
        </button>

        <button
          onClick={() => {
            deletePet(pet.id);
          }}
        >
          <Trash className="w-6 h-6" />
        </button>
      </div>
      <div className="flex px-4 pt-10 pb-4 h-[160px]">
        <img
          src={
            pet?.image
              ? URL.createObjectURL(pet.image)
              : petType === 'cat'
              ? 'https://placekitten.com/200/200'
              : 'https://placedog.net/200/200'
          }
          alt={pet.name}
          className="w-[100px] object-cover h-[100px] rounded-full "
        />
        <div className="flex flex-col ml-4 ustify-center i ">
          <p className="text-[24px]">{pet.name}</p>
          <p>{formatDate(pet.dateOfBirth)}</p>
          {!pet.alive && (
            <p className="italic">{`Unfortunately, ${
              pet?.gender ? (pet.gender === 'male' ? 'he' : 'she') : 'it'
            }'s dead`}</p>
          )}
        </div>
      </div>
      <div className="px-4">
        <p className="mb-2">
          {' '}
          <span className="text-green-800"> Happy place: </span>
          {pet.happyPlace}
        </p>
        <p className="text-yellow-700 bold ">
          This is {pet.name}'s life story:
        </p>
        <p>{pet?.lifeStory}</p>
      </div>
    </div>
  );
};

export default PetListItem;
