// src/features/home/components/StatsBar.jsx
import React from 'react';

const StatsBar = () => {
  return (
    <div className="stats-bar">
      <div className="container stats-grid">
        <div className="stat-item">
          <h3>1,420+</h3>
          <p>VERIFIED PROPERTIES</p>
        </div>
        <div className="stat-item">
          <h3>98.4%</h3>
          <p>EXPAT SATISFACTION</p>
        </div>
        <div className="stat-item">
          <h3>0%</h3>
          <p>HIDDEN MARKUPS</p>
        </div>
        <div className="stat-item">
          <h3>Sri lanka & Japan</h3>
          <p>DUAL SUPPORT DESKS</p>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;