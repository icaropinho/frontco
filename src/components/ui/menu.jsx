import React from "react";

export const Menu = ({ children }) => <div className="space-y-2">{children}</div>;

export const MenuItem = ({ children }) => (
  <div className={`border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white ${className}`}
  </div>
);