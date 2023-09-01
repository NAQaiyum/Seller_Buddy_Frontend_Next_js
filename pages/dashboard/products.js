import React, { useState, useEffect } from 'react';

const ImageUploadPage = () => {
  const [images, setImages] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [newDescription, setNewDescription] = useState('');

  useEffect(() => {
    // Load data from localStorage when component mounts
    const savedImages = JSON.parse(localStorage.getItem('savedImages')) || [];
    const savedDescriptions = JSON.parse(localStorage.getItem('savedDescriptions')) || [];

    setImages(savedImages);
    setDescriptions(savedDescriptions);
  }, []);

  useEffect(() => {
    // Save data to localStorage when images or descriptions change
    localStorage.setItem('savedImages', JSON.stringify(images));
    localStorage.setItem('savedDescriptions', JSON.stringify(descriptions));
  }, [images, descriptions]);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const imageList = Array.from(files).map((file) => URL.createObjectURL(file));
    setImages([...images, ...imageList]);
  };

  const handleDescriptionChange = (index, value) => {
    const updatedDescriptions = [...descriptions];
    updatedDescriptions[index] = value;
    setDescriptions(updatedDescriptions);
  };

  const handleAddDescription = () => {
    setDescriptions([...descriptions, newDescription]);
    setNewDescription('');
  };

  const handleDeleteImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);

    const updatedDescriptions = [...descriptions];
    updatedDescriptions.splice(index, 1);

    setImages(updatedImages);
    setDescriptions(updatedDescriptions);
  };

  const handleSave = () => {
    // This part has been removed as the data is saved automatically in the localStorage
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Image Upload and Description</h1>
      <div className="mb-4">
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageUpload}
          className="border border-gray-400 rounded p-2 w-full"
        />
      </div>
      <div className="mb-4">
        {/* <input
          type="text"
          placeholder="Enter description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          className="border border-gray-400 rounded p-2 w-full"
        /> */}
        <button
          onClick={handleAddDescription}
          className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
        >
          Add Description
        </button>
        <button
          onClick={handleSave}
          className="bg-green-500 text-white px-4 py-2 rounded ml-2"
        >
          Save
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {images.map((imageUrl, index) => (
          <div key={imageUrl} className="border border-gray-300 rounded p-4">
            <img src={imageUrl} alt={`Image ${index + 1}`} className="max-w-full" />
            <textarea
              placeholder="Image description"
              value={descriptions[index] || ''}
              onChange={(e) => handleDescriptionChange(index, e.target.value)}
              className="border border-gray-400 rounded p-2 w-full mt-2"
            />
            <button
              onClick={() => handleDeleteImage(index)}
              className="bg-red-500 text-white px-4 py-2 rounded mt-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    {/* </div> */}
    </div>
  );
};

export default ImageUploadPage;
