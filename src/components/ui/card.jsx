import React from "react";

export function Card({ className = "", children }) {
  return (
    <div className={`rounded-2xl border bg-white dark:bg-gray-900 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ className = "", children }) {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
}
