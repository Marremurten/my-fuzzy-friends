import { useRef } from 'react';
import { Plus } from '@phosphor-icons/react';

const ImageUpload = ({ setFormData, formData }) => {
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];
    handleImageFile(imageFile);
  };

  const handleDropOrBrowse = (e) => {
    e.preventDefault();
    const imageFile = e.dataTransfer.files[0] || fileInputRef.current.files[0];
    handleImageFile(imageFile);
  };

  const handleImageFile = (imageFile) => {
    if (imageFile && imageFile.size <= 3 * 1024 * 1024) {
      setFormData((prevData) => ({
        ...prevData,
        image: imageFile,
      }));
    } else {
      console.log('Image size exceeds 3MB limit.');
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="flex justify-center ">
      <div className="p-2 bg-white rounded-lg shadow-md w-[90%] ">
        <label
          htmlFor="imageInput"
          className="flex flex-col items-center justify-center w-full p-2 text-center border-2 border-gray-300 border-dashed cursor-pointer h-35"
          onClick={handleBrowseClick}
          onDrop={handleDropOrBrowse}
          onDragOver={handleDragOver}
        >
          <input
            type="file"
            id="imageInput"
            name="image"
            accept=".jpeg, .jpg, .png"
            className="hidden"
            onChange={handleImageUpload}
            ref={fileInputRef}
          />
          <div className="flex items-center justify-center w-10 h-10 mb-2 border-4 border-gray-400 border-dotted rounded-full">
            <Plus className="w-8 h-8 text-gray-400" />
          </div>
          <p className="text-[12px]">
            Drag & drop or click to browse. JPEG, JPG, or PNG image (Max size:
            3MB)
          </p>
        </label>
      </div>
    </div>
  );
};

export default ImageUpload;
