import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar';

export default function Home() {
  const router = useRouter();
  const isLoggedIn = Cookies.get('isLoggedIn');

  const images = [
    { path: '/homepage.jpg', label: 'Image 1' },
    { path: '/homepage2.jpg', label: 'Image 2' },
    { path: '/homepage3.jpg', label: 'Image 3' },
  ];

  const [selectedImage, setSelectedImage] = useState(
    sessionStorage.getItem('selectedImage') || images[0].path
  );

  const handleImageChange = (newImage) => {
    setSelectedImage(newImage);
    sessionStorage.setItem('selectedImage', newImage);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col items-center justify-center w-full">
        <div className="max-w-full h-4/5 overflow-hidden bg-black">
          <img src={selectedImage} alt="Homepage" className="h-full mx-auto" />
        </div>
        <div className="flex justify-center mt-4">
          {images.map((image) => (
            <button
              key={image.path}
              onClick={() => handleImageChange(image.path)}
              className={`mr-4 ${selectedImage === image.path ? 'font-bold' : ''}`}
            >
              {image.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

