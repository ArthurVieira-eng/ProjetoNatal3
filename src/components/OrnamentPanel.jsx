import React from 'react';
import './OrnamentPanel.css';

export default function OrnamentPanel() {
  return (
    <div className="ornament-panel">
      <h3>Enfeites</h3>
      {/* Representando os enfeites com círculos coloridos */}
      <div className="ornament red"></div>
      <div className="ornament yellow"></div>
      <div className="ornament blue"></div>
    </div>
  );
}
