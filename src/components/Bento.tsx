import React from 'react';

interface BentoProps {
  title: string;
  description: string;
}

const Bento: React.FC<BentoProps> = ({ title, description }) => (
  <div
    style={{ padding: '16px', border: '1px solid #ddd', borderRadius: '8px' }}
  >
    <h1 style={{ margin: 0, fontSize: '24px', color: '#333' }}>{title}</h1>
    <p style={{ margin: '8px 0 0', fontSize: '16px', color: '#666' }}>
      {description}
    </p>
  </div>
);

export default Bento;
