import SearchBar from "../../Atoms/SearchBar/SearchBar";
import FilterDropdown from "../../Atoms/FilterDropdown/FilterDropdown";
import CommonCard from "../../Atoms/CommonCard/CommonCard";

const SearchAndFilter = ({
  searchTerm,
  onSearchChange,
  selectedRegion,
  onRegionChange,
  regions,
  children,
}) => {
  return (
    <CommonCard>
      <div className="flex flex-col md:flex-row md:items-end gap-6 w-full">
        <div className="w-full md:w-1/2">
          <SearchBar value={searchTerm} onChange={onSearchChange} />
        </div>
        <div className="w-full md:w-1/3">
          <FilterDropdown
            label="Filter by Region"
            options={regions}
            value={selectedRegion}
            onChange={onRegionChange}
          />
        </div>
        {children && (
          <div className="w-full md:w-1/6 flex justify-end">{children}</div>
        )}
      </div>
    </CommonCard>
  );
};

export default SearchAndFilter;
