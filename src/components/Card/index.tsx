import React from 'react';

interface CardProps {
    title: string;
    link: string;
    image?: string;
    date: string;
}

export const Card: React.FC<CardProps> = ({
    title,
    link,
    image,
    date,
}) => {
    return (
        <a href={link} className="block max-w-sm rounded overflow-hidden shadow-lg bg-white no-underline">
            {image && (
                <img className="w-full" src={image} alt={title} />
            )}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    {title}
                </div>
                <p className="text-gray-700 text-base">
                    Published on {date}
                </p>
            </div>
            <div className="px-6 py-4 flex items-center">
                <span className="text-blue-500">
                    Read more
                </span>
            </div>
        </a>
    );
};
