import React from "react";
import { Hammer } from "@phosphor-icons/react";

const ComingSoon = ({
  title = "Coming Soon",
  message = "This feature is under construction. Stay tuned!",
}) => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
      <div className="text-5xl mb-4 text-yellow-500 animate-bounce">
        <Hammer weight="fill" size={60} />
      </div>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
        {title}
      </h1>
      <p className="text-gray-500 mt-2 max-w-md">{message}</p>
    </div>
  );
};

export default ComingSoon;
