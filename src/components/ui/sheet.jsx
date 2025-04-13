import React, { useState } from "react";

export const Sheet = ({ children }) => <>{children}</>;

export const SheetTrigger = ({ asChild, children }) => <>{children}</>;

export const SheetContent = ({ side = "right", className = "", children }) => {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className={`border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white ${className}`}
    </div>
  );
};