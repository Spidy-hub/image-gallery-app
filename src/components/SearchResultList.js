import React from 'react';
import { SearchResult } from './SearchResult';

const SearchResultList = ({ results }) => {
  console.log(results)
  return (
    <div className={`w-full flex flex-col shadow-lg ml-20 -mt-1 rounded-md max-h-80 overflow-y-scroll `}>
      {results && results.map((data) => {
        return (
          <div key={data.id} className="mb-0">
            <SearchResult data={data} />
          </div>
        );  
      })}
    </div>
  );
};

export default SearchResultList;  
