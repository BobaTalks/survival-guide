import '../../App.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Splash() {
  const navigate = useNavigate();
  return (
    <div className="splash-page">
      <div className="background">
        <div className="splash-title">
          <h2>Navigating High School and Beyond</h2>
          <p>
            We&apos;ve compiled the best advice from experts and seasoned students alike to give you the tools you need
            to <span>succeed</span>
          </p>
          <button className="button-begin" onClick={() => navigate('menu')}>
            Let&apos;s get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Splash;
