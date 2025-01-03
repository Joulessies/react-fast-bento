import React from 'react';
import './Bento.scss';

interface BentoProps {
  title: string;
  description: string;
  size: number;
  width: number;
  height: number;
}

const Bento: React.FC<BentoProps> = ({ title, description, height, width }) => (
  <div
    style={{
      padding: '16px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      maxWidth: `${width}px`,
      maxHeight: `${height}px`,
    }}
  >
    <h1 style={{ margin: 0, fontSize: '24px', color: '#fff' }}>{title}</h1>
    <p style={{ margin: '8px 0 0', fontSize: '16px', color: '#fff' }}>
      {description}
    </p>
  </div>
);

export default Bento;
