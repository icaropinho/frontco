import React from "react";

export const Button = ({ children, variant = "default", size = "md", className = "", ...props }) => {
  const base = "rounded-xl px-4 py-2 font-semibold transition";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    ghost: "bg-transparent text-gray-800 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700",
    outline: "border border-gray-300 text-gray-800 hover:bg-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-800"
  };
  const sizes = {
    md: "text-sm",
    sm: "text-xs px-3 py-1.5",
    icon: "p-2"
  };
  return (
    <button className={\`\${base} \${variants[variant]} \${sizes[size]} \${className}\`} {...props}>
      {children}
    </button>
  );
};