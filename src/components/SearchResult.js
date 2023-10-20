// SearchResult.js
import React from 'react';

export const SearchResult = ({ data }) => {
  console.log(data)
  return (
    <div className='p-4 hover:bg-gray-200' onClick={(e) => alert(`You clicked on ${data.alt_description}`)}>
      {data.alt_description}
    </div>
  );
};
