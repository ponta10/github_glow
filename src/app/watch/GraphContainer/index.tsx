import React from "react";

interface GraphContainerProps {
  text: string;
  children: React.ReactNode;
}

export const GraphContainer: React.FC<GraphContainerProps> = ({
  text,
  children,
}) => {
  return (
    <div className="bg-white shadow-xl rounded-md p-2">
      <p className="font-bold mb-2 text-center">{text}</p>
      {children}
    </div>
  );
};
