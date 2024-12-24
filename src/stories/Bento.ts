
import React from 'react';

interface BentoProps {
  title: string;
  description: string;
  size: number;
}

const Bento: React.FC<BentoProps> = ({ title, description, size }) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
    <p>{size}</p>
  </div>
);

export default Bento;

