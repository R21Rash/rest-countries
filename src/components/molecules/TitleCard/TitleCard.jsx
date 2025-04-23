import React from "react";
import { Link, useLocation } from "react-router-dom";

const TitleCard = ({ title, description, children }) => {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  // Convert segment to readable label
  const formatSegment = (segment) =>
    segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white border rounded shadow p-4 mb-6">
      <div className="w-full">
        {/*  Breadcrumb */}
        <nav className="text-sm mb-2 text-gray-500">
          <ol className="flex flex-wrap gap-1 items-center">
            <li>
              <Link
                to="/HomePage"
                className="text-blue-600 hover:underline font-medium"
              >
                Home
              </Link>
              <span className="mx-2">/</span>
            </li>
            {segments.map((seg, index) => {
              const path = "/" + segments.slice(0, index + 1).join("/");
              const isLast = index === segments.length - 1;
              return (
                <li key={index} className="flex items-center gap-1">
                  {!isLast ? (
                    <>
                      <Link
                        to={path}
                        className="text-blue-600 hover:underline font-medium"
                      >
                        {formatSegment(seg)}
                      </Link>
                      <span className="mx-2">/</span>
                    </>
                  ) : (
                    <span className="text-gray-500">{formatSegment(seg)}</span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

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
