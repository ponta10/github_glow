import React from "react";

export interface ButtonProps {
  bgcolor?: string;
  textcolor?: string;
  text?: string;
  width?: string | number;
  fontSize?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  bgcolor = "bg-blue-500",
  textcolor = "text-white",
  width = "auto",
  fontSize = "md",
  ...props
}) => {
  const widthClass = typeof width === "number" ? `w-${width}` : width;
  const fontSizeClass = `text-${fontSize}`;

  return (
    <button
      className={`
        ${bgcolor} 
        ${textcolor} 
        px-8 py-1 
        ${widthClass}
        ${fontSizeClass}
        border-none 
        rounded 
        cursor-pointer 
        transition-all 
        duration-100 
        hover:filter hover:brightness-105 
        hover:shadow-md 
        disabled:cursor-not-allowed disabled:opacity-60
        inline-block
        font-semibold
      `}
      {...props}
    >
      {text}
    </button>
  );
};
