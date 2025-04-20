import SearchBar from "../../Atoms/SearchBar/SearchBar";
import FilterDropdown from "../../Atoms/FilterDropdown/FilterDropdown";
import CommonCard from "../../Atoms/CommonCard/CommonCard";

const SearchAndFilter = ({
  searchTerm,
  onSearchChange,
  selectedRegion,
  onRegionChange,
  regions = [],
  selectedLanguage,
  onLanguageChange,
  languages = [],
  children,
}) => {
  return (
    <CommonCard>
      <div className="w-full">
        <div className="flex flex-wrap md:flex-nowrap items-end gap-4">
          {/* 🔍 Search */}
          <div className="flex-grow min-w-[180px] md:w-[240px]">
            <SearchBar value={searchTerm} onChange={onSearchChange} />
          </div>

          {/* 🌍 Region */}
          <div className="flex-grow min-w-[160px] md:w-[200px]">
            <FilterDropdown
              label="Filter by Region"
              options={regions}
              value={selectedRegion}
              onChange={onRegionChange}
            />
          </div>

          {/* 🗣️ Language */}
          <div className="flex-grow min-w-[160px] md:w-[200px]">
            <FilterDropdown
              label="Filter by Language"
              options={languages}
              value={selectedLanguage}
              onChange={onLanguageChange}
            />
          </div>

          {/* ➕ Optional */}
          {children && <div className="flex-shrink-0">{children}</div>}
        </div>
      </div>
    </CommonCard>
  );
};

export default SearchAndFilter;
