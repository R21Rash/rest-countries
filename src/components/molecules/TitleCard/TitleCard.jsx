const TitleCard = ({ title, description, children }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white border rounded shadow p-4 mb-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        {description && (
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        )}
      </div>

      {children && (
        <div className="mt-4 md:mt-0 md:ml-4 flex-shrink-0">{children}</div>
      )}
    </div>
  );
};

export default TitleCard;
