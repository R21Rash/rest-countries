import { MagnifyingGlass } from "@phosphor-icons/react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative w-full">
      <MagnifyingGlass
        size={18}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search for a country..."
        className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-base"
      />
    </div>
  );
};

export default SearchBar;
