import React, { useState } from 'react';
import { MdOutlineYoutubeSearchedFor } from "react-icons/md"; // icon library

interface SearchbarProps {
  onSearch?: (query: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
    setQuery(''); 
  };

  return (
    <>
      <style>
        {`
          input[type="search"]::-webkit-search-cancel-button {
            -webkit-appearance: none;
            height: 16px;
            width: 16px;
            background: url('data:image/svg+xml;utf8,<svg fill="%23cacaca" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>') center/contain no-repeat;
            cursor: pointer;
          }
        `}
      </style>
      <form onSubmit={handleSearchSubmit} className="flex items-center justify-center w-full">
        <input
          type="search"
          value={query}
          onChange={handleSearchChange}
          placeholder="Search for movies, events, etc."
          className="px-4 py-2 rounded-xl bg-stone-800 text-natural-200 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-regal-blue-400 w-1/2" 
        />
      </form>
    </>
  );
};

export default Searchbar;