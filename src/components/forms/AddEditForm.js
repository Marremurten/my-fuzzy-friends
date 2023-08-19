import { useState, useEffect } from 'react';
import ImageUpload from './ImageUpload';

const AddEditForm = ({ selectedPet, petType, error, onSubmit }) => {
  const [formData, setFormData] = useState({ gender: '', dateOfBirth: '' });

  useEffect(() => {
    if (selectedPet) {
      setFormData(selectedPet);
    }
  }, [selectedPet]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex ">
      <div className="flex flex-col items-center">
        <h1 className="text-[40px] mb-2">
          {selectedPet ? 'Edit' : 'Add'} your {petType}
        </h1>
        <form
          onSubmit={(e) => onSubmit(e, formData)}
          className="relative flex flex-col w-[500px]"
        >
          <div className="flex">
            <div className="flex flex-col items-center">
              {!selectedPet ? (
                formData.image ? (
                  <img
                    src={URL.createObjectURL(formData.image)}
                    alt="Uploaded"
                    className="object-cover mb-8 border-2 border-gray-700 rounded-full w-60 h-60"
                  />
                ) : (
                  <div className="mb-8 border-2 border-gray-700 rounded-full w-60 h-60"></div>
                )
              ) : (
                <img
                  src={
                    formData.image
                      ? URL.createObjectURL(formData.image)
                      : selectedPet?.image
                      ? URL.createObjectURL(selectedPet.image)
                      : petType === 'cat'
                      ? 'https://placekitten.com/200/200'
                      : 'https://placedog.net/200/200'
                  }
                  alt="Uploaded"
                  className="object-cover mb-8 border-2 border-gray-700 rounded-full w-60 h-60"
                />
              )}

              <ImageUpload formData={formData} setFormData={setFormData} />
              {error && <p className="mt-8 text-red-500">{error}</p>}
            </div>
            <div className="flex flex-col">
              <input
                className="px-2 py-1 mb-2 border border-gray-700 rounded"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData?.name}
                onChange={handleInputChange}
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="px-2 py-1 mb-2 border border-gray-700 rounded"
              >
                <option value="" disabled>
                  Select a gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="px-2 py-1 mb-2 border border-gray-700 rounded"
              />
              <label>Is your pet alive?</label>
              <select
                name="alive"
                value={formData.gender}
                onChange={handleInputChange}
                className="px-2 py-1 mb-2 border border-gray-700 rounded"
              >
                <option value="" disabled></option>
                <option value={true}>Yes</option>
                <option value={false}>No 😢 </option>
              </select>
              <label>What is your pet's happy place?</label>
              <input
                className="px-2 py-1 mb-2 border border-gray-700 rounded"
                type="text"
                name="happyPlace"
                value={formData?.happyPlace}
                onChange={handleInputChange}
              />
              <label>What is your pet's life story?</label>
              <textarea
                className="px-2 py-1 mb-2 border border-gray-700 rounded h-30"
                name="lifeStory"
                value={formData?.lifeStory}
                onChange={handleInputChange}
              />

              <button
                type="submit"
                className="px-4 py-2 mt-4 text-white bg-blue-500 rounded"
              >
                {selectedPet ? 'Update' : 'Add'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditForm;
