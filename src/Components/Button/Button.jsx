import React from "react";

const Button = ({ onClick, text, className, ...props }) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className={`rounded-lg p-2 w-full h-full bg-green-200 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
