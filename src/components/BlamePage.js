import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlamePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [showPFPGenerator, setShowPFPGenerator] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState('default');
  const [selectedBackground, setSelectedBackground] = useState('🌌');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  const togglePFPGenerator = () => {
    setShowPFPGenerator(!showPFPGenerator);
  };

  const generateRandomPFP = () => {
    const styles = [
      'default', 'angry', 'happy', 'sad', 
      'evil', 'cool', 'fire', 'diamond'
    ];
    const backgrounds = ['🌌', '🔥', '💎', '🚀', '🌙', '⚡'];
    
    setSelectedStyle(styles[Math.floor(Math.random() * styles.length)]);
    setSelectedBackground(backgrounds[Math.floor(Math.random() * backgrounds.length)]);
  };

  const getBackgroundStyle = (backgroundId) => {
    const backgrounds = {
      'dark-green': '#1a4d1a',
      'white': '#ffffff',
      'gradient-purple': 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
      'gradient-pink': 'linear-gradient(135deg, #ec4899, #8b5cf6)',
      'black': '#000000',
      'yellow': '#fbbf24',
      'orange': '#f97316',
      'purple': '#8b5cf6',
      'blue': '#3b82f6'
    };
    return backgrounds[backgroundId] || '#1a4d1a';
  };

  const downloadPFP = () => {
    // Create a canvas to render the PFP
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 300;
    canvas.height = 300;

    // Create gradient background
    const gradient = ctx.createRadialGradient(150, 150, 0, 150, 150, 150);
    gradient.addColorStop(0, '#1a1a1a');
    gradient.addColorStop(1, '#000000');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 300, 300);

    // Add background emoji
    ctx.font = '120px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.globalAlpha = 0.3;
    ctx.fillText(selectedBackground, 150, 150);
    ctx.globalAlpha = 1;

    // Add logo (simplified representation)
    ctx.font = '80px Arial';
    ctx.fillStyle = '#00ff00';
    ctx.fillText('👾', 150, 150);

    // Add style effects based on selected style
    if (selectedStyle === 'fire') {
      ctx.shadowColor = '#ff4500';
      ctx.shadowBlur = 20;
    } else if (selectedStyle === 'diamond') {
      ctx.shadowColor = '#00ffff';
      ctx.shadowBlur = 15;
    }

    // Download the image
    const link = document.createElement('a');
    link.download = `blame-pfp-${selectedStyle}-${Date.now()}.png`;
    link.href = canvas.toDataURL();
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
    <div className="nft-generator-page">
      {/* Starry Background */}
      <div className="stars"></div>
      
      {/* Space Invaders Aliens */}
      <div className="aliens">
        <div className="alien alien-1">🎯</div>
        <div className="alien alien-2">🪖</div>
        <div className="alien alien-3">👑</div>
        <div className="alien alien-4">🕶️</div>
        <div className="alien alien-5">😈</div>
        <div className="alien alien-6">🎩</div>
        <div className="alien alien-7">🤓</div>
      </div>

      {/* Header */}
      <div className="blame-header-clean">
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>

      {/* Main Content */}
      <div className="blame-content-clean">
        {/* Blame Steps */}
        <div className="blame-steps-clean">
          <div className="step-item">
            <div className="step-number">01</div>
            <div className="step-content">
              <h3>Identify Target</h3>
              <p>Everyone is to blame. Devs, whales, Elon, Trump, the moon, your ex, the weather, and especially yourself.</p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-number">02</div>
            <div className="step-content">
              <h3>Amplify Blame</h3>
              <p>Use social media. Tweet, post, create memes. The more you blame, the more powerful you become.</p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-number">03</div>
            <div className="step-content">
              <h3>Monetize Chaos</h3>
              <p>Turn blame into profit. Create NFTs, start tokens, sell merchandise. Blame is the new gold.</p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-number">04</div>
            <div className="step-content">
              <h3>Blame to Moon</h3>
              <p>When in doubt, blame the moon. When everything goes wrong, blame the moon. Always blame the moon.</p>
            </div>
          </div>
        </div>

        {/* About Section */}
        {showAbout && (
          <div className="about-section-clean">
            <div className="about-content">
              <h2>About WhoToBlame</h2>
              <p>WhoToBlame (WTB) is the ultimate meme token for the blame culture generation. In a world where everyone blames everyone else, WTB embraces the chaos and turns it into profit.</p>
              
              <h3>Our Mission</h3>
              <p>We believe that blame is a renewable resource. Instead of fighting it, we monetize it. Every market crash, every failed trade, every relationship gone wrong - it's all fuel for the WTB ecosystem.</p>
              
              <h3>Tokenomics</h3>
              <p>WTB operates on the principle of "Blame Economics" - the more you blame, the more you earn. Our token rewards users for identifying blame targets and amplifying blame across social media.</p>
              
              <h3>Community</h3>
              <p>Join thousands of blamers who have discovered that the best way to deal with crypto volatility is to blame everyone else. From devs to whales, from Elon to Trump, from the moon to your ex - everyone is fair game.</p>
              
              <h3>Roadmap</h3>
              <p>Phase 1: Blame everyone ✓<br/>
              Phase 2: Create blame NFTs<br/>
              Phase 3: Launch blame social media<br/>
              Phase 4: Blame to the moon 🚀</p>
            </div>
          </div>
        )}

        {/* PFP Generator Section */}
        {showPFPGenerator && (
          <div className="pfp-generator-futuristic">
            <div className="pfp-generator-modal">
              <div className="pfp-generator-header">
                <div className="pfp-header-left">
                  <h2>PFP Generator</h2>
                  <p>Create your unique Blame Pepe</p>
                </div>
                <button className="pfp-close-btn" onClick={togglePFPGenerator}>×</button>
              </div>
              
              <div className="pfp-generator-content">
                {/* Left Panel - Preview and Actions */}
                <div className="pfp-preview-panel">
                  <div className="pfp-preview-container">
                    <div className="pfp-preview-frame">
                      <div className="pfp-preview-bg" style={{ background: getBackgroundStyle(selectedBackground) }}>
                        <div className={`pfp-character ${selectedStyle}`}>
                          <img src="/blame-logo.svg" alt="Blame Character" className="character-image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pfp-actions">
                    <button className="pfp-action-btn randomize" onClick={generateRandomPFP}>
                      <span className="action-icon">🔀</span>
                      Randomize All
                    </button>
                    <button className="pfp-action-btn download" onClick={downloadPFP}>
                      <span className="action-icon">⬇️</span>
                      Download
                    </button>
                  </div>
                  
                  <div className="pfp-stats">
                    <div className="stat-item">
                      <div className="stat-number">2,772</div>
                      <div className="stat-label">COMBINATIONS</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">36</div>
                      <div className="stat-label">TOTAL ASSETS</div>
                    </div>
                  </div>
                </div>
                
                {/* Right Panel - Customization */}
                <div className="pfp-customization-panel">
                  <div className="customization-tabs">
                    <button className="tab-btn active">Background</button>
                    <button className="tab-btn">Clothes</button>
                    <button className="tab-btn">Style</button>
                    <button className="tab-btn">Head Accessories</button>
                  </div>
                  
                  <div className="customization-content">
                    <div className="section-header">
                      <h3>Select Background</h3>
                      <span className="options-count">9 options</span>
                    </div>
                    
                    <div className="background-options-grid">
                      {[
                        { id: 'dark-green', name: 'Dark Green', color: '#1a4d1a' },
                        { id: 'white', name: 'White', color: '#ffffff' },
                        { id: 'gradient-purple', name: 'Purple Gradient', color: 'linear-gradient(135deg, #8b5cf6, #06b6d4)' },
                        { id: 'gradient-pink', name: 'Pink Gradient', color: 'linear-gradient(135deg, #ec4899, #8b5cf6)' },
                        { id: 'black', name: 'Black', color: '#000000' },
                        { id: 'yellow', name: 'Yellow', color: '#fbbf24' },
                        { id: 'orange', name: 'Orange', color: '#f97316' },
                        { id: 'purple', name: 'Purple', color: '#8b5cf6' },
                        { id: 'blue', name: 'Blue', color: '#3b82f6' }
                      ].map((bg, index) => (
                        <button
                          key={index}
                          className={`background-option ${selectedBackground === bg.id ? 'selected' : ''}`}
                          onClick={() => setSelectedBackground(bg.id)}
                          style={{ background: bg.color }}
                        >
                          {selectedBackground === bg.id && <span className="checkmark">✓</span>}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="blame-actions-clean">
          <a href="https://raydium.io" target="_blank" rel="noopener noreferrer" className="action-btn primary">How to Blame</a>
          <button className="action-btn secondary" onClick={togglePFPGenerator}>
            {showPFPGenerator ? 'Hide PFP Generator' : 'Blame PFP Generator'}
          </button>
          <button className="action-btn secondary" onClick={toggleAbout}>
            {showAbout ? 'Hide About' : 'About'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default BlamePage;