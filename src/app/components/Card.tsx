// components/Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
