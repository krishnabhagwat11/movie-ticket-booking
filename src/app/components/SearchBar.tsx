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
    <form onSubmit={handleSearchSubmit} className="flex items-center justify-center w-full">
      <input
        type="search"
        value={query}
        onChange={handleSearchChange}
        placeholder="Search for movies, events, etc."
        className="px-4 py-2 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-regal-blue-400 w-1/2" 
      />
      <button type="submit" className="ml-2 p-2 rounded-full hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-regal-blue-400">
        <MdOutlineYoutubeSearchedFor className="h-5 w-5 text-gray-500" />
      </button>
    </form>
  );
};

export default Searchbar;