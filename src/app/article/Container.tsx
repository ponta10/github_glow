import { Card } from "@/components/Card";
import { Article } from "@/utils/types";
import React from "react";

interface ContainerProps {
  items: Article[];
  name: string;
  image?: string;
}

export const Container: React.FC<ContainerProps> = ({ items, name, image }) => {
  return (
    <div className="flex flex-col gap-8 items-center mb-8 w-1/3">
      <h2 className="text-xl font-bold mb-4">{name}</h2>
      {items.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          link={item.link}
          image={item.image ?? image}
          date={item.pubDate}
        />
      ))}
    </div>
  );
};
