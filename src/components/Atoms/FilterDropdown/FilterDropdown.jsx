const FilterDropdown = ({ label, options = [], onChange, value }) => {
  return (
    <div className="w-full">
      <label className="block mb-1 font-semibold text-gray-700">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
