import React from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  searchTerm?: string;
  setSearchTerm?: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  return (
    <div className="flex w-96 p-1 pr-4 pl-4 rounded-2xl justify-between bg-white">
      <input
        className="text-sm bg-transparent text-gray-500 focus:outline-none"
        type="text"
        placeholder="Buscar Productos ...."
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchTerm(e.target.value)
        }
      />
      <div className="flex items-center">
        <FaSearch color="gray" size={12} />
      </div>
    </div>
  );
};

export default SearchBar;
