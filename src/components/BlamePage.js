import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';

const BlamePage = () => {
  // State management
  const [isLoading, setIsLoading] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [showPFPGenerator, setShowPFPGenerator] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState('default');
  const [selectedBackground, setSelectedBackground] = useState('🌌');
  const [selectedHat, setSelectedHat] = useState('none');
  const [selectedAccessory, setSelectedAccessory] = useState('none');
  const [generationCount, setGenerationCount] = useState(0);

  // Effects
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Event handlers - optimized with useCallback
  const toggleAbout = useCallback(() => {
    setShowAbout(!showAbout);
  }, [showAbout]);

  const togglePFPGenerator = useCallback(() => {
    setShowPFPGenerator(!showPFPGenerator);
  }, [showPFPGenerator]);

  // Memoized style and background options
  const styleOptions = useMemo(() => [
    'default', 'angry', 'happy', 'sad', 
    'evil', 'cool', 'fire', 'diamond', 'rainbow', 'neon'
  ], []);

  const backgroundOptions = useMemo(() => [
    '🌌', '🔥', '💎', '🚀', '🌙', '⚡', '🌈', '🎆', '🌟', '💫'
  ], []);

  const hatOptions = useMemo(() => [
    'none', 'crown', 'cap', 'helmet', 'tophat', 'beanie', 'bandana'
  ], []);

  const accessoryOptions = useMemo(() => [
    'none', 'glasses', 'sunglasses', 'mask', 'chain', 'earring', 'tattoo'
  ], []);

  const generateRandomPFP = useCallback(() => {
    setSelectedStyle(styleOptions[Math.floor(Math.random() * styleOptions.length)]);
    setSelectedBackground(backgroundOptions[Math.floor(Math.random() * backgroundOptions.length)]);
    setSelectedHat(hatOptions[Math.floor(Math.random() * hatOptions.length)]);
    setSelectedAccessory(accessoryOptions[Math.floor(Math.random() * accessoryOptions.length)]);
    setGenerationCount(prev => prev + 1);
  }, [styleOptions, backgroundOptions, hatOptions, accessoryOptions]);

  // Copy contract address function
  const handleCopyCA = useCallback(async () => {
    const contractAddress = "5TfqNKZbn9AnNtzq8bbkyhKgcPGTfNDc9wNzFrTBpump";
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }, []);

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

  // Realistic PFP generation with canvas
  const downloadPFP = useCallback(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const size = 512; // High resolution
    canvas.width = size;
    canvas.height = size;
    
    // Enable high-quality rendering
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Create background based on selection
    createBackground(ctx, size);
    
    // Draw the main character
    drawCharacter(ctx, size);
    
    // Add accessories
    if (selectedHat !== 'none') {
      drawHat(ctx, size, selectedHat);
    }
    
    if (selectedAccessory !== 'none') {
      drawAccessory(ctx, size, selectedAccessory);
    }
    
    // Apply style effects
    applyStyleEffects(ctx, size, selectedStyle);

    // Download the high-resolution image
    const link = document.createElement('a');
    link.download = `blame-pfp-${selectedStyle}-${selectedHat}-${selectedAccessory}-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png', 1.0);
    link.click();
  }, [selectedStyle, selectedBackground, selectedHat, selectedAccessory]);

  // Background creation function
  const createBackground = (ctx, size) => {
    const center = size / 2;
    
    // Create gradient background
    const gradient = ctx.createRadialGradient(center, center, 0, center, center, center);
    
    switch (selectedBackground) {
      case '🌌':
        gradient.addColorStop(0, '#0a0a2e');
        gradient.addColorStop(0.5, '#16213e');
        gradient.addColorStop(1, '#000000');
        break;
      case '🔥':
        gradient.addColorStop(0, '#ff6b35');
        gradient.addColorStop(0.5, '#f7931e');
        gradient.addColorStop(1, '#8b0000');
        break;
      case '💎':
        gradient.addColorStop(0, '#00ffff');
        gradient.addColorStop(0.5, '#0080ff');
        gradient.addColorStop(1, '#000080');
        break;
      case '🚀':
        gradient.addColorStop(0, '#ffd700');
        gradient.addColorStop(0.5, '#ff8c00');
        gradient.addColorStop(1, '#8b0000');
        break;
      case '🌙':
        gradient.addColorStop(0, '#c0c0c0');
        gradient.addColorStop(0.5, '#808080');
        gradient.addColorStop(1, '#000000');
        break;
      case '⚡':
        gradient.addColorStop(0, '#ffff00');
        gradient.addColorStop(0.5, '#ffa500');
        gradient.addColorStop(1, '#000000');
        break;
      case '🌈':
        gradient.addColorStop(0, '#ff0000');
        gradient.addColorStop(0.2, '#ff8000');
        gradient.addColorStop(0.4, '#ffff00');
        gradient.addColorStop(0.6, '#00ff00');
        gradient.addColorStop(0.8, '#0080ff');
        gradient.addColorStop(1, '#8000ff');
        break;
      case '🎆':
        gradient.addColorStop(0, '#ff1493');
        gradient.addColorStop(0.5, '#8b008b');
        gradient.addColorStop(1, '#000000');
        break;
      case '🌟':
        gradient.addColorStop(0, '#ffffff');
        gradient.addColorStop(0.5, '#ffd700');
        gradient.addColorStop(1, '#000000');
        break;
      case '💫':
        gradient.addColorStop(0, '#e6e6fa');
        gradient.addColorStop(0.5, '#9370db');
        gradient.addColorStop(1, '#000000');
        break;
      default:
        gradient.addColorStop(0, '#1a1a1a');
        gradient.addColorStop(1, '#000000');
    }
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
    
    // Add background pattern/effects
    if (selectedBackground === '🌌') {
      drawStars(ctx, size);
    } else if (selectedBackground === '🔥') {
      drawFireEffect(ctx, size);
    } else if (selectedBackground === '💎') {
      drawDiamondEffect(ctx, size);
    }
  };

  // Draw the main character
  const drawCharacter = (ctx, size) => {
    const center = size / 2;
    const scale = size / 400;
    
    // Character body
    ctx.fillStyle = '#4CAF50';
    ctx.strokeStyle = '#2E7D32';
    ctx.lineWidth = 4 * scale;
    
    // Main body
    ctx.beginPath();
    ctx.ellipse(center, center + 20 * scale, 40 * scale, 50 * scale, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    
    // Head
    ctx.beginPath();
    ctx.arc(center, center - 30 * scale, 35 * scale, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    
    // Eyes
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(center - 15 * scale, center - 35 * scale, 8 * scale, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(center + 15 * scale, center - 35 * scale, 8 * scale, 0, 2 * Math.PI);
    ctx.fill();
    
    // Pupils
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(center - 15 * scale, center - 35 * scale, 4 * scale, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(center + 15 * scale, center - 35 * scale, 4 * scale, 0, 2 * Math.PI);
    ctx.fill();
    
    // Mouth based on style
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 3 * scale;
    ctx.lineCap = 'round';
    
    if (selectedStyle === 'happy') {
      ctx.beginPath();
      ctx.arc(center, center - 15 * scale, 15 * scale, 0, Math.PI);
      ctx.stroke();
    } else if (selectedStyle === 'angry') {
      ctx.beginPath();
      ctx.moveTo(center - 10 * scale, center - 10 * scale);
      ctx.lineTo(center + 10 * scale, center - 10 * scale);
      ctx.stroke();
    } else if (selectedStyle === 'sad') {
      ctx.beginPath();
      ctx.arc(center, center - 5 * scale, 15 * scale, Math.PI, 2 * Math.PI);
      ctx.stroke();
    } else {
      // Default smile
      ctx.beginPath();
      ctx.arc(center, center - 15 * scale, 12 * scale, 0, Math.PI);
      ctx.stroke();
    }
    
    // Arms
    ctx.fillStyle = '#4CAF50';
    ctx.strokeStyle = '#2E7D32';
    ctx.beginPath();
    ctx.ellipse(center - 50 * scale, center + 10 * scale, 8 * scale, 25 * scale, -0.3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(center + 50 * scale, center + 10 * scale, 8 * scale, 25 * scale, 0.3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    
    // Legs
    ctx.beginPath();
    ctx.ellipse(center - 15 * scale, center + 80 * scale, 12 * scale, 30 * scale, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(center + 15 * scale, center + 80 * scale, 12 * scale, 30 * scale, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  };

  // Draw hat
  const drawHat = (ctx, size, hatType) => {
    const center = size / 2;
    const scale = size / 400;
    
    ctx.fillStyle = '#8B4513';
    ctx.strokeStyle = '#654321';
    ctx.lineWidth = 2 * scale;
    
    switch (hatType) {
      case 'crown':
        ctx.fillStyle = '#FFD700';
        ctx.strokeStyle = '#FFA500';
        for (let i = 0; i < 5; i++) {
          const x = center - 20 * scale + i * 10 * scale;
          const y = center - 60 * scale;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + 5 * scale, y - 15 * scale);
          ctx.lineTo(x + 10 * scale, y);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        }
        break;
      case 'cap':
        ctx.fillStyle = '#FF0000';
        ctx.beginPath();
        ctx.arc(center, center - 50 * scale, 25 * scale, Math.PI, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        break;
      case 'helmet':
        ctx.fillStyle = '#C0C0C0';
        ctx.strokeStyle = '#808080';
        ctx.beginPath();
        ctx.arc(center, center - 50 * scale, 30 * scale, Math.PI, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        break;
      case 'tophat':
        ctx.fillStyle = '#000000';
        ctx.fillRect(center - 20 * scale, center - 70 * scale, 40 * scale, 20 * scale);
        ctx.fillRect(center - 25 * scale, center - 75 * scale, 50 * scale, 5 * scale);
        break;
      case 'beanie':
        ctx.fillStyle = '#FF69B4';
        ctx.beginPath();
        ctx.arc(center, center - 45 * scale, 25 * scale, Math.PI, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        break;
      case 'bandana':
        ctx.fillStyle = '#FF4500';
        ctx.beginPath();
        ctx.arc(center, center - 45 * scale, 30 * scale, Math.PI, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        break;
    }
  };

  // Draw accessories
  const drawAccessory = (ctx, size, accessoryType) => {
    const center = size / 2;
    const scale = size / 400;
    
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 3 * scale;
    
    switch (accessoryType) {
      case 'glasses':
        ctx.beginPath();
        ctx.arc(center - 15 * scale, center - 35 * scale, 12 * scale, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(center + 15 * scale, center - 35 * scale, 12 * scale, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(center - 3 * scale, center - 35 * scale);
        ctx.lineTo(center + 3 * scale, center - 35 * scale);
        ctx.stroke();
        break;
      case 'sunglasses':
        ctx.fillStyle = '#000000';
        ctx.fillRect(center - 20 * scale, center - 40 * scale, 15 * scale, 10 * scale);
        ctx.fillRect(center + 5 * scale, center - 40 * scale, 15 * scale, 10 * scale);
        ctx.beginPath();
        ctx.moveTo(center - 5 * scale, center - 35 * scale);
        ctx.lineTo(center + 5 * scale, center - 35 * scale);
        ctx.stroke();
        break;
      case 'mask':
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(center, center - 25 * scale, 20 * scale, 0, Math.PI);
        ctx.fill();
        break;
      case 'chain':
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 2 * scale;
        for (let i = 0; i < 3; i++) {
          const y = center - 20 * scale + i * 8 * scale;
          ctx.beginPath();
          ctx.arc(center + 30 * scale, y, 3 * scale, 0, 2 * Math.PI);
          ctx.stroke();
        }
        break;
      case 'earring':
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(center + 25 * scale, center - 30 * scale, 3 * scale, 0, 2 * Math.PI);
        ctx.fill();
        break;
      case 'tattoo':
        ctx.strokeStyle = '#FF0000';
        ctx.lineWidth = 2 * scale;
        ctx.beginPath();
        ctx.arc(center + 20 * scale, center + 10 * scale, 8 * scale, 0, 2 * Math.PI);
        ctx.stroke();
        break;
    }
  };

  // Apply style effects
  const applyStyleEffects = (ctx, size, style) => {
    const center = size / 2;
    
    switch (style) {
      case 'fire':
        ctx.shadowColor = '#ff4500';
        ctx.shadowBlur = 20;
        break;
      case 'diamond':
        ctx.shadowColor = '#00ffff';
        ctx.shadowBlur = 15;
        break;
      case 'neon':
        ctx.shadowColor = '#00ff00';
        ctx.shadowBlur = 25;
        break;
      case 'rainbow':
        // Add rainbow border
        const gradient = ctx.createLinearGradient(0, 0, size, size);
        gradient.addColorStop(0, '#ff0000');
        gradient.addColorStop(0.2, '#ff8000');
        gradient.addColorStop(0.4, '#ffff00');
        gradient.addColorStop(0.6, '#00ff00');
        gradient.addColorStop(0.8, '#0080ff');
        gradient.addColorStop(1, '#8000ff');
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 8;
        ctx.strokeRect(10, 10, size - 20, size - 20);
        break;
    }
  };

  // Helper functions for background effects
  const drawStars = (ctx, size) => {
    ctx.fillStyle = '#ffffff';
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const radius = Math.random() * 2;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fill();
    }
  };

  const drawFireEffect = (ctx, size) => {
    const center = size / 2;
    const gradient = ctx.createRadialGradient(center, center, 0, center, center, center);
    gradient.addColorStop(0, 'rgba(255, 100, 0, 0.3)');
    gradient.addColorStop(1, 'rgba(255, 0, 0, 0.1)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
  };

  const drawDiamondEffect = (ctx, size) => {
    const center = size / 2;
    const gradient = ctx.createRadialGradient(center, center, 0, center, center, center);
    gradient.addColorStop(0, 'rgba(0, 255, 255, 0.2)');
    gradient.addColorStop(1, 'rgba(0, 100, 255, 0.1)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
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

        {/* Clean Modern PFP Generator */}
        {showPFPGenerator && (
          <div className="modern-pfp-generator">
            <div className="pfp-generator-container">
              {/* Header */}
              <div className="pfp-generator-header">
                <div className="header-content">
                  <h2 className="generator-title">🎨 Blame PFP Generator</h2>
                  <p className="generator-subtitle">Create your unique blame avatar</p>
                </div>
                <button className="close-generator-btn" onClick={togglePFPGenerator}>
                  <span>✕</span>
                </button>
              </div>

              {/* Main Generator Content */}
              <div className="generator-main-content">
                {/* Preview Panel */}
                <div className="preview-panel">
                  <div className="preview-container">
                    <div className="preview-frame">
                      <div className="preview-background" style={{ background: getBackgroundStyle(selectedBackground) }}>
                        <div className={`character-container ${selectedStyle}`}>
                          <div className="character-base">
                            <div className="character-body">
                              <div className="character-head">
                                <div className="character-eyes">
                                  <div className="eye left-eye"></div>
                                  <div className="eye right-eye"></div>
                                </div>
                                <div className={`character-mouth ${selectedStyle}`}></div>
                              </div>
                              <div className="character-torso"></div>
                              <div className="character-arms">
                                <div className="arm left-arm"></div>
                                <div className="arm right-arm"></div>
                              </div>
                              <div className="character-legs">
                                <div className="leg left-leg"></div>
                                <div className="leg right-leg"></div>
                              </div>
                            </div>
                          </div>
                          {selectedHat !== 'none' && (
                            <div className={`character-hat hat-${selectedHat}`}>
                              {selectedHat === 'crown' && '👑'}
                              {selectedHat === 'cap' && '🧢'}
                              {selectedHat === 'helmet' && '🪖'}
                              {selectedHat === 'tophat' && '🎩'}
                              {selectedHat === 'beanie' && '🧶'}
                              {selectedHat === 'bandana' && '🎀'}
                            </div>
                          )}
                          {selectedAccessory !== 'none' && (
                            <div className={`character-accessory accessory-${selectedAccessory}`}>
                              {selectedAccessory === 'glasses' && '🤓'}
                              {selectedAccessory === 'sunglasses' && '🕶️'}
                              {selectedAccessory === 'mask' && '😷'}
                              {selectedAccessory === 'chain' && '⛓️'}
                              {selectedAccessory === 'earring' && '💎'}
                              {selectedAccessory === 'tattoo' && '🎨'}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="preview-actions">
                    <button className="action-btn randomize-btn" onClick={generateRandomPFP}>
                      <span className="btn-icon">🎲</span>
                      <span className="btn-text">Randomize</span>
                    </button>
                    <button className="action-btn download-btn" onClick={downloadPFP}>
                      <span className="btn-icon">⬇️</span>
                      <span className="btn-text">Download</span>
                    </button>
                  </div>
                </div>

                {/* Customization Panel */}
                <div className="customization-panel">
                  <div className="customization-tabs">
                    <button className="tab-btn active">🎨 Style</button>
                    <button className="tab-btn">🌌 Background</button>
                    <button className="tab-btn">👑 Accessories</button>
                    <button className="tab-btn">🎭 Effects</button>
                  </div>

                  <div className="customization-content">
                    {/* Style Options */}
                    <div className="option-section">
                      <h3 className="section-title">Character Style</h3>
                      <div className="options-grid">
                        {styleOptions.map((style, index) => (
                          <button
                            key={index}
                            className={`style-option ${selectedStyle === style ? 'selected' : ''}`}
                            onClick={() => setSelectedStyle(style)}
                          >
                            <span className="option-icon">
                              {style === 'default' && '😊'}
                              {style === 'angry' && '😠'}
                              {style === 'happy' && '😄'}
                              {style === 'sad' && '😢'}
                              {style === 'evil' && '😈'}
                              {style === 'cool' && '😎'}
                              {style === 'fire' && '🔥'}
                              {style === 'diamond' && '💎'}
                              {style === 'rainbow' && '🌈'}
                              {style === 'neon' && '⚡'}
                            </span>
                            <span className="option-label">{style}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Background Options */}
                    <div className="option-section">
                      <h3 className="section-title">Background</h3>
                      <div className="background-grid">
                        {backgroundOptions.map((bg, index) => (
                          <button
                            key={index}
                            className={`background-option ${selectedBackground === bg ? 'selected' : ''}`}
                            onClick={() => setSelectedBackground(bg)}
                          >
                            <span className="bg-emoji">{bg}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Hat Options */}
                    <div className="option-section">
                      <h3 className="section-title">Head Accessories</h3>
                      <div className="accessory-grid">
                        {hatOptions.map((hat, index) => (
                          <button
                            key={index}
                            className={`accessory-option ${selectedHat === hat ? 'selected' : ''}`}
                            onClick={() => setSelectedHat(hat)}
                          >
                            <span className="accessory-icon">
                              {hat === 'none' && '🚫'}
                              {hat === 'crown' && '👑'}
                              {hat === 'cap' && '🧢'}
                              {hat === 'helmet' && '🪖'}
                              {hat === 'tophat' && '🎩'}
                              {hat === 'beanie' && '🧶'}
                              {hat === 'bandana' && '🎀'}
                            </span>
                            <span className="accessory-label">{hat}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Accessory Options */}
                    <div className="option-section">
                      <h3 className="section-title">Accessories</h3>
                      <div className="accessory-grid">
                        {accessoryOptions.map((accessory, index) => (
                          <button
                            key={index}
                            className={`accessory-option ${selectedAccessory === accessory ? 'selected' : ''}`}
                            onClick={() => setSelectedAccessory(accessory)}
                          >
                            <span className="accessory-icon">
                              {accessory === 'none' && '🚫'}
                              {accessory === 'glasses' && '🤓'}
                              {accessory === 'sunglasses' && '🕶️'}
                              {accessory === 'mask' && '😷'}
                              {accessory === 'chain' && '⛓️'}
                              {accessory === 'earring' && '💎'}
                              {accessory === 'tattoo' && '🎨'}
                            </span>
                            <span className="accessory-label">{accessory}</span>
                          </button>
                        ))}
                      </div>
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
          <button className="action-btn secondary" onClick={toggleAbout}>
            {showAbout ? 'Hide About' : 'About'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default BlamePage;