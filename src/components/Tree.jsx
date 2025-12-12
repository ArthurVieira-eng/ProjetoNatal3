import React from 'react';
import treeImg from './assets/tree.png';
import './Tree.css';

export default function Tree() {
  return (
    <div className="tree">
      <img src={treeImg} alt="Árvore de Natal" className="tree-image" />
      <div className="tree-trunk"></div> {/* tronco opcional */}
    </div>
  );
}
