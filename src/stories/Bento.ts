
import React from 'react';

interface BentoProps {
  title: string;
  description: string;
  size: int;
}

const Bento: React.FC<BentoProps> = ({ title, description }) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
    <p>{size}</p>
  </div>
);

export default Bento;

