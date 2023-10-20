import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageModal from './ImageModel';
import { ThumbsUp } from 'react-feather'; 

function Home() {
  const [images, setImages] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos', {
          params: {
            client_id: 'nUT9_NM02yZEqcc4Mp_T1VVpedRaAmvJ1vI29aP7sd8',
          },
        });
        setImages(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-80"
          src="https://www.komar.de/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/I/A/IADX6-036.jpg"
          alt="mountain"
        />
        <h1 className="absolute text-4xl text-white font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Download High-Quality Images by Creators
        </h1>
        <p className="absolute text-xl text-white italic top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >Created by :- Kira</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {images.map((image) => (
          <div key={image.id} className="border-black bors bg-black rounded-lg cursor-pointer" onClick={() => openModal(image)}>
            <img src={image.urls.small} alt={image.alt_description} className="rounded-lg w-full h-80" />
            <div className="flex flex-row p-4 items-center">
              <div className="w-12 h-12 overflow-hidden rounded-full">
                <img
                  src={image.user.profile_image.medium}
                  alt={image.user.name}
                  className="w-12 h-12 object-cover"
                />
              </div>
              <div className="ml-4">
                <p className="text-lg text-white font-semibold mt-2">{image.user.name}</p>
                <p className="text-sm text-white">@{image.user.username}</p>
                <div className="flex flex-row mt-1 items-center">
                  <ThumbsUp className="w-6 h-6 text-white" />
                  <p className="text-sm text-white ml-1 mt-1">{image.likes}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedPhoto && <ImageModal photo={selectedPhoto} onClose={closeModal} />}
    </div>
  );
}

export default Home;
