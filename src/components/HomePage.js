import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blameCount, setBlameCount] = useState(0);
  const [copied, setCopied] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [funnyMessage, setFunnyMessage] = useState('');
  const [showExportOptions, setShowExportOptions] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleBlame = () => {
    setBlameCount(prev => prev + 1);
  };

  const handleCopyCA = async () => {
    const contractAddress = "0x1234567890abcdef1234567890abcdef12345678"; // Replace with actual CA
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleLogoClick = () => {
    setLogoClickCount(prev => prev + 1);
    
    // Show export options after 3 clicks
    if (logoClickCount >= 2) {
      setShowExportOptions(true);
      setTimeout(() => setShowExportOptions(false), 5000);
    }
    
    const funnyMessages = [
      "🎉 OW! That hurt!",
      "😄 Stop poking me!",
      "🤪 I'm getting dizzy!",
      "🎭 You found my secret!",
      "🚀 I'm flying away!",
      "💚 Green with envy!",
      "🎪 Circus time!",
      "🎨 I'm changing colors!",
      "🌟 I'm a star!",
      "🎯 Bullseye!",
      "🎪 Welcome to the blame circus!",
      "🎭 The show must go on!",
      "🎨 I'm a work of art!",
      "🎪 Step right up!",
      "🎯 You got me!",
      "📱 Export me for Facebook!",
      "🎨 Make me your profile pic!"
    ];
    
    const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
    setFunnyMessage(randomMessage);
    
    setTimeout(() => setFunnyMessage(''), 3000);
  };

  const exportLogoForFacebook = () => {
    // Create a high-resolution canvas for Facebook profile picture
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const scale = 6; // 6x resolution for ultra-crisp Facebook profile picture
    canvas.width = 400 * scale;
    canvas.height = 400 * scale;
    
    // Enable high-quality rendering
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Scale the context for high resolution
    ctx.scale(scale, scale);
    
    // Create solid black background
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, 400, 400);

    // Add thick glowing green border (Facebook profile style)
    ctx.strokeStyle = '#00ff00';
    ctx.lineWidth = 16;
    ctx.shadowColor = '#00ff00';
    ctx.shadowBlur = 30;
    ctx.beginPath();
    ctx.arc(200, 200, 180, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Draw character with glow effect
    ctx.fillStyle = '#4CAF50';
    ctx.strokeStyle = '#2E7D32';
    ctx.lineWidth = 6;
    ctx.shadowColor = '#4CAF50';
    ctx.shadowBlur = 15;

    // Main oval body with glow
    ctx.beginPath();
    ctx.ellipse(200, 200, 65, 85, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    // Round head with glow
    ctx.beginPath();
    ctx.arc(200, 160, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    // Reset shadow for details
    ctx.shadowBlur = 0;

    // Large white eyes
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(185, 150, 14, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(215, 150, 14, 0, 2 * Math.PI);
    ctx.fill();

    // Black pupils
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(185, 150, 7, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(215, 150, 7, 0, 2 * Math.PI);
    ctx.fill();

    // Curved eyebrows
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(185, 135, 10, 0, Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(215, 135, 10, 0, Math.PI);
    ctx.stroke();

    // Wide smile
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(200, 170, 25, 0, Math.PI);
    ctx.stroke();

    // Raised arms (waving pose)
    ctx.fillStyle = '#4CAF50';
    ctx.strokeStyle = '#2E7D32';
    ctx.lineWidth = 6;
    ctx.shadowColor = '#4CAF50';
    ctx.shadowBlur = 10;
    
    // Left arm (raised)
    ctx.beginPath();
    ctx.ellipse(130, 180, 12, 35, -0.3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    
    // Right arm (raised)
    ctx.beginPath();
    ctx.ellipse(270, 180, 12, 35, 0.3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    
    // Bent legs (sitting pose)
    ctx.beginPath();
    ctx.ellipse(180, 280, 15, 35, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(220, 280, 15, 35, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    // Reset shadow
    ctx.shadowBlur = 0;

    // Sparkles around character
    ctx.fillStyle = '#00ff00';
    ctx.shadowColor = '#00ff00';
    ctx.shadowBlur = 12;
    
    // Strategic sparkle positions
    const sparkles = [
      {x: 120, y: 120, size: 4}, {x: 280, y: 120, size: 4}, 
      {x: 120, y: 280, size: 4}, {x: 280, y: 280, size: 4},
      {x: 150, y: 100, size: 3}, {x: 250, y: 100, size: 3}, 
      {x: 150, y: 300, size: 3}, {x: 250, y: 300, size: 3}
    ];
    
    sparkles.forEach(sparkle => {
      ctx.beginPath();
      ctx.arc(sparkle.x, sparkle.y, sparkle.size, 0, 2 * Math.PI);
      ctx.fill();
    });
    ctx.shadowBlur = 0;

    // Download the ultra-high-resolution Facebook profile picture (no text)
    const link = document.createElement('a');
    link.download = 'whotoblame-facebook-profile-picture-clean-2400x2400.png';
    link.href = canvas.toDataURL('image/png', 1.0);
    link.click();
  };

  const exportSimpleLogo = () => {
    // Create a high-resolution canvas for the simple version
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const scale = 4; // 4x resolution for crisp output
    canvas.width = 400 * scale;
    canvas.height = 400 * scale;
    
    // Enable high-quality rendering
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Scale the context for high resolution
    ctx.scale(scale, scale);
    
    // Create solid black background
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, 400, 400);

    // Add glowing green border
    ctx.strokeStyle = '#00ff00';
    ctx.lineWidth = 12;
    ctx.shadowColor = '#00ff00';
    ctx.shadowBlur = 25;
    ctx.beginPath();
    ctx.arc(200, 200, 180, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Draw simple character (like the image)
    ctx.fillStyle = '#4CAF50';
    ctx.strokeStyle = '#2E7D32';
    ctx.lineWidth = 4;

    // Simple oval body
    ctx.beginPath();
    ctx.ellipse(200, 200, 60, 80, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    // Simple round head
    ctx.beginPath();
    ctx.arc(200, 160, 45, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    // Simple eyes
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(185, 150, 12, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(215, 150, 12, 0, 2 * Math.PI);
    ctx.fill();

    // Black pupils
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(185, 150, 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(215, 150, 6, 0, 2 * Math.PI);
    ctx.fill();

    // Simple eyebrows
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(185, 135, 8, 0, Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(215, 135, 8, 0, Math.PI);
    ctx.stroke();

    // Simple smile
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(200, 170, 20, 0, Math.PI);
    ctx.stroke();

    // Simple limbs
    ctx.fillStyle = '#4CAF50';
    ctx.strokeStyle = '#2E7D32';
    ctx.lineWidth = 4;
    
    // Arms
    ctx.beginPath();
    ctx.ellipse(140, 200, 15, 30, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(260, 200, 15, 30, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    
    // Legs
    ctx.beginPath();
    ctx.ellipse(180, 280, 20, 30, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(220, 280, 20, 30, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    // Add sparkles around the character
    ctx.fillStyle = '#00ff00';
    ctx.shadowColor = '#00ff00';
    ctx.shadowBlur = 10;
    
    // Sparkle positions
    const sparkles = [
      {x: 120, y: 120}, {x: 280, y: 120}, {x: 120, y: 280}, {x: 280, y: 280},
      {x: 150, y: 100}, {x: 250, y: 100}, {x: 150, y: 300}, {x: 250, y: 300}
    ];
    
    sparkles.forEach(sparkle => {
      ctx.beginPath();
      ctx.arc(sparkle.x, sparkle.y, 3, 0, 2 * Math.PI);
      ctx.fill();
    });
    ctx.shadowBlur = 0;

    // Download the high-resolution image
    const link = document.createElement('a');
    link.download = 'whotoblame-simple-logo-hd.png';
    link.href = canvas.toDataURL('image/png', 1.0);
    link.click();
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <h1 className="loading-text">LOADING...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="arcade-homepage">
      {/* Starry Background */}
      <div className="stars"></div>
      
      {/* Space Invaders Aliens */}
      <div className="aliens">
        <div className="alien alien-1"></div>
        <div className="alien alien-2"></div>
        <div className="alien alien-3"></div>
        <div className="alien alien-4"></div>
        <div className="alien alien-5"></div>
        <div className="alien alien-6"></div>
        <div className="alien alien-7"></div>
      </div>

      {/* Main Content */}
      <div className="arcade-content">

        {/* Logo */}
        <div className="logo-container">
          <img 
            src="/blame-logo.svg" 
            alt="WhoToBlame Logo" 
            className="blame-logo" 
            onClick={handleLogoClick}
            title="Click me for a surprise! 😄"
          />
          {funnyMessage && (
            <div className="funny-message">
              {funnyMessage}
            </div>
          )}
          {logoClickCount > 0 && (
            <div className="click-counter">
              Clicks: {logoClickCount} 🎯
            </div>
          )}
          {showExportOptions && (
            <div className="export-options">
              <h3>📱 Export for Facebook Profile</h3>
              <div className="export-buttons">
                <button 
                  className="export-btn facebook-btn" 
                  onClick={exportLogoForFacebook}
                  title="Download with text"
                >
                  📱 With Text
                </button>
                <button 
                  className="export-btn simple-btn" 
                  onClick={exportSimpleLogo}
                  title="Download simple version"
                >
                  🎨 Simple
                </button>
              </div>
              <p className="export-note">Perfect for Facebook profile pictures!</p>
            </div>
          )}
        </div>
        
        {/* Title */}
        <h1 className="arcade-title" onClick={handleBlame}>
          WHOTOBLAME
        </h1>
        
        {/* Tagline */}
        <p className="arcade-tagline">
          WHO'S TO BLAME? EVERYONE! 😂
        </p>

        {/* Token Info Card */}
        <div className="token-info-card">
          <div className="token-header">
            <div className="token-title">
              <h3>WHOTOBLAME</h3>
              <span className="token-symbol">WTB</span>
            </div>
            <div className="live-indicator">
              <span className="live-dot"></span>
              <span>LIVE</span>
            </div>
          </div>

          <div className="price-section">
            <div className="current-price">
              <span className="price-symbol">$</span>
              <span className="price-value">{(Math.random() * 0.1 + 0.01).toFixed(6)}</span>
              <span className="price-change positive">+{(Math.random() * 20 + 5).toFixed(2)}%</span>
            </div>
            <div className="price-details">
              <div className="detail-item">
                <span className="detail-label">Market Cap</span>
                <span className="detail-value">${(Math.random() * 1000000 + 500000).toLocaleString()}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">24h Volume</span>
                <span className="detail-value">${(Math.random() * 100000 + 50000).toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="contract-section">
            <div className="contract-label">Contract Address</div>
            <div className="contract-address">
              <span className="address-text">0x1234...5678</span>
              <button 
                className="copy-button" 
                onClick={handleCopyCA}
                title="Click to copy full contract address"
              >
                {copied ? "✅" : "📋"}
              </button>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <div className="start-button-container">
          <Link to="/blame" className="start-button">
            PRESS TO BLAME SYSTEM
          </Link>
        </div>

        {/* Instructions */}
        <p className="instructions">
          CLICK TO BLAME EVERYONE! 🎯
        </p>

        {/* Status Indicators */}
        <div className="status-indicators">
          <div className="status-dot status-green">😈</div>
          <div className="status-dot status-red">🤡</div>
        </div>

        {/* Funny Messages */}
        <div className="funny-messages">
          <p className="funny-text">BLAME THE DEVS! BLAME THE WHALES! BLAME YOUR EX! 💸</p>
          <p className="funny-subtext">IT'S ALWAYS SOMEONE ELSE'S FAULT! 🎭</p>
        </div>


      </div>
    </div>
  );
};

export default HomePage;