import React from 'react';
import { Instagram, ThumbsUp } from 'react-feather';

const ImageModel = ({ photo, onClose }) => {
  const imageStyle = {
    maxWidth: '100%', 
    maxHeight: '500px',
  };
 

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70" onClick={onClose}></div>
      <div className="z-10 w-full md:w-1/2 p-4 top-0 bg-white dark-bg-gray-800 rounded-lg shadow-lg">
        <img src={photo.urls.regular} alt={photo.alt_description} style={imageStyle} className="w-full mt-4" />
        <div>
          <div className="flex flex-row md:mt-4 items-center">
            <div className="w-12 h-12 md:mr-4 mt-3 overflow-hidden rounded-full">
              <img
                src={photo.user.profile_image.medium}
                alt={photo.user.name}
                className="w-12 h-12 object-cover"
              />
            </div>
            <div className="mt-2 md:flex flex-row justify-between items-center w-full" >
              <div className='-mb-10 p-2'>
                <p className="text-lg text-black-900 font-semibold">{photo.user.name}</p>
                <p className="text-sm text-black-900">@{photo.user.username}</p>
              </div>
              <div className="ml-40 flex items-center text-center ">
                <Instagram className='w-4 h-4 mt-1' />
                <p className="text-sm px-1 italic text-black-900">/{photo.user.instagram_username}</p>
              </div>
              <div className="flex items-center md:mt-5 ml-80 ">
                <ThumbsUp className="w-6 h-6 text-black-900" />
                <p className="text-sm text-black-900 ml-1 mt-1">{photo.likes}</p>
              </div>
            </div>
          </div>
        </div>
        <button className="mt-4 p-2  text-white bg-blue-500 rounded-md hover-bg-blue-600" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ImageModel;
