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
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 w-full">
        <SearchBar value={searchTerm} onChange={onSearchChange} />
        <FilterDropdown
          label="Filter by Region"
          options={regions}
          value={selectedRegion}
          onChange={onRegionChange}
        />
        {children && (
          <div className="flex items-end justify-end">{children}</div>
        )}
      </div>
    </CommonCard>
  );
};

export default SearchAndFilter;
