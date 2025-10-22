import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeCommandTab, setActiveCommandTab] = useState('music');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to top when changing tabs
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const commandsData = {
    music: [
      { name: 'play', desc: 'Play a song from YouTube' },
      { name: 'pause', desc: 'Pause the current song' },
      { name: 'resume', desc: 'Resume the paused song' },
      { name: 'skip', desc: 'Skip to the next song' },
      { name: 'stop', desc: 'Stop the music and clear the queue' },
      { name: 'queue', desc: 'View the current music queue' },
      { name: 'nowplaying', desc: 'Show the currently playing song' },
      { name: 'volume', desc: 'Adjust the music volume' },
      { name: 'loop', desc: 'Loop the current song' },
      { name: 'shuffle', desc: 'Shuffle the queue' }
    ],
    moderation: [
      { name: 'ban', desc: 'Ban a member from the server' },
      { name: 'kick', desc: 'Kick a member from the server' },
      { name: 'timeout', desc: 'Timeout a member' },
      { name: 'warn', desc: 'Warn a member' },
      { name: 'mute', desc: 'Mute a member' },
      { name: 'unmute', desc: 'Unmute a member' },
      { name: 'clear', desc: 'Clear messages from a channel' },
      { name: 'slowmode', desc: 'Set slowmode for a channel' },
      { name: 'lock', desc: 'Lock a channel' },
      { name: 'unlock', desc: 'Unlock a channel' }
    ],
    fun: [
      { name: 'meme', desc: 'Get a random meme' },
      { name: '8ball', desc: 'Ask the magic 8ball' },
      { name: 'joke', desc: 'Get a random joke' },
      { name: 'gif', desc: 'Search for a GIF' },
      { name: 'avatar', desc: 'Get user avatar' },
      { name: 'roll', desc: 'Roll a dice' },
      { name: 'flip', desc: 'Flip a coin' },
      { name: 'rate', desc: 'Rate something' },
      { name: 'roast', desc: 'Get roasted by Riko' },
      { name: 'fact', desc: 'Get a random fact' }
    ],
    utility: [
      { name: 'serverinfo', desc: 'Get server information' },
      { name: 'userinfo', desc: 'Get user information' },
      { name: 'weather', desc: 'Check weather for a location' },
      { name: 'remind', desc: 'Set a reminder' },
      { name: 'poll', desc: 'Create a poll' },
      { name: 'translate', desc: 'Translate text' },
      { name: 'search', desc: 'Search the web' },
      { name: 'calculate', desc: 'Perform calculations' },
      { name: 'embed', desc: 'Create custom embeds' },
      { name: 'afk', desc: 'Set AFK status' }
    ],
    economy: [
      { name: 'balance', desc: 'Check your balance' },
      { name: 'daily', desc: 'Claim daily rewards' },
      { name: 'work', desc: 'Work to earn coins' },
      { name: 'shop', desc: 'View the shop' },
      { name: 'buy', desc: 'Buy items from shop' },
      { name: 'inventory', desc: 'View your inventory' },
      { name: 'give', desc: 'Give coins to someone' },
      { name: 'rob', desc: 'Rob another user' },
      { name: 'leaderboard', desc: 'View economy leaderboard' },
      { name: 'gamble', desc: 'Gamble your coins' }
    ],
    leveling: [
      { name: 'rank', desc: 'Check your rank' },
      { name: 'leaderboard', desc: 'View server leaderboard' },
      { name: 'setlevel', desc: 'Set user level (Admin)' },
      { name: 'setxp', desc: 'Set user XP (Admin)' },
      { name: 'resetrank', desc: 'Reset user rank (Admin)' }
    ]
  };

  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      title: 'High-Quality Music',
      desc: 'Stream music directly from YouTube with crystal-clear audio quality and full playback controls.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Moderation & Automod',
      desc: 'Keep your server safe with powerful moderation tools and automated protection systems.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: 'AI Chat',
      desc: 'Engage with an intelligent AI assistant powered by advanced language models for natural conversations.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      ),
      title: 'Ticket System',
      desc: 'Professional support ticket system for managing user inquiries and support requests efficiently.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Global Chat',
      desc: 'Connect with users across different servers through our cross-server global chat feature.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Economy System',
      desc: 'Engaging economy system with virtual currency, shops, trading, and interactive games.'
    }
  ];

  return (
    <div className="App">
      {/* Animated Background */}
      <div className="animated-bg"></div>
      <div className="bubbles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="bubble" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
            width: `${20 + Math.random() * 60}px`,
            height: `${20 + Math.random() * 60}px`
          }}></div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="nav-container">
        <div className="nav-content">
          <div className="nav-logo">
            <span className="logo-icon">🤖</span>
            <span className="logo-text">Riko Bot</span>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links hidden md:flex">
            <button onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'nav-link active' : 'nav-link'}>Home</button>
            <button onClick={() => setActiveTab('commands')} className={activeTab === 'commands' ? 'nav-link active' : 'nav-link'}>Commands</button>
            <button onClick={() => setActiveTab('tos')} className={activeTab === 'tos' ? 'nav-link active' : 'nav-link'}>TOS</button>
            <button onClick={() => setActiveTab('privacy')} className={activeTab === 'privacy' ? 'nav-link active' : 'nav-link'}>Privacy</button>
            <a href="#invite" className="btn-primary ml-4">Invite Now</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <button onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }} className={activeTab === 'home' ? 'mobile-link active' : 'mobile-link'}>Home</button>
            <button onClick={() => { setActiveTab('commands'); setMobileMenuOpen(false); }} className={activeTab === 'commands' ? 'mobile-link active' : 'mobile-link'}>Commands</button>
            <button onClick={() => { setActiveTab('tos'); setMobileMenuOpen(false); }} className={activeTab === 'tos' ? 'mobile-link active' : 'mobile-link'}>TOS</button>
            <button onClick={() => { setActiveTab('privacy'); setMobileMenuOpen(false); }} className={activeTab === 'privacy' ? 'mobile-link active' : 'mobile-link'}>Privacy</button>
            <a href="#invite" className="btn-primary block text-center mt-4">Invite Now</a>
          </div>
        )}
      </nav>

      {/* Home Tab */}
      {activeTab === 'home' && (
        <main className="main-content">
          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-content">
              <h1 className="hero-title animate-float-in">
                Welcome to <span className="text-gradient">Riko Bot</span>
              </h1>
              <p className="hero-subtitle animate-fade-in">
                The ultimate all-in-one Discord bot to enhance your server with music, moderation, AI chat, and much more!
              </p>
              <div className="hero-buttons animate-slide-up">
                <a href="#invite" className="btn-primary btn-lg bubble-hover">
                  Invite Riko Now
                </a>
                <button onClick={() => setActiveTab('commands')} className="btn-secondary btn-lg">
                  View Commands
                </button>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="features-section">
            <h2 className="section-title">Featured Features</h2>
            <div className="features-grid">
              {features.map((feature, idx) => (
                <div key={idx} className="feature-card" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-desc">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Enhance Your Server?</h2>
              <p className="cta-subtitle">Join thousands of servers already using Riko Bot</p>
              <a href="#invite" className="btn-primary btn-lg bubble-hover">
                Invite Riko to Your Server!
              </a>
            </div>
          </section>
        </main>
      )}

      {/* Commands Tab */}
      {activeTab === 'commands' && (
        <main className="main-content">
          <section className="commands-section">
            <h2 className="section-title">Bot Commands</h2>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              Explore all available commands organized by category. Use the prefix <code className="text-red-400 bg-gray-800 px-2 py-1 rounded">!</code> before each command.
            </p>

            {/* Command Tabs */}
            <div className="command-tabs">
              {Object.keys(commandsData).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCommandTab(category)}
                  className={activeCommandTab === category ? 'command-tab active' : 'command-tab'}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Command List */}
            <div className="commands-list">
              {commandsData[activeCommandTab].map((cmd, idx) => (
                <div key={idx} className="command-item" style={{ animationDelay: `${idx * 0.05}s` }}>
                  <span className="command-name">!{cmd.name}</span>
                  <span className="command-separator">❯</span>
                  <span className="command-desc">{cmd.desc}</span>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}

      {/* TOS Tab */}
      {activeTab === 'tos' && (
        <main className="main-content">
          <section className="legal-section">
            <h2 className="section-title">Terms of Service</h2>
            <div className="legal-content">
              <p className="legal-updated">Last Updated: October 21, 2025</p>
              
              <h3>1. Acceptance of Terms</h3>
              <p>By inviting and using Riko Bot, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the bot.</p>

              <h3>2. Description of Service</h3>
              <p>Riko Bot provides various features including but not limited to music playback, server moderation, AI chat, ticket systems, economy features, and utility commands for Discord servers.</p>

              <h3>3. User Responsibilities</h3>
              <p>You are responsible for:</p>
              <ul>
                <li>Ensuring you have the necessary permissions to invite the bot to a server</li>
                <li>Using the bot in compliance with Discord's Terms of Service</li>
                <li>Not abusing or exploiting the bot's features</li>
                <li>Not using the bot for illegal activities or to harass others</li>
              </ul>

              <h3>4. Bot Availability</h3>
              <p>We strive to keep Riko Bot available 24/7, but we do not guarantee uninterrupted service. The bot may be temporarily unavailable due to maintenance, updates, or unforeseen issues.</p>

              <h3>5. Modifications to Service</h3>
              <p>We reserve the right to modify, suspend, or discontinue any part of the bot at any time without prior notice.</p>

              <h3>6. Limitation of Liability</h3>
              <p>Riko Bot is provided "as is" without warranties of any kind. We are not liable for any damages resulting from the use or inability to use the bot.</p>

              <h3>7. Third-Party Services</h3>
              <p>The bot may integrate with third-party services (YouTube, Spotify, etc.). Your use of these features is subject to the respective third-party terms.</p>

              <h3>8. Termination</h3>
              <p>We reserve the right to terminate or restrict access to the bot for any user or server that violates these terms.</p>

              <h3>9. Changes to Terms</h3>
              <p>We may update these Terms of Service at any time. Continued use of the bot after changes constitutes acceptance of the new terms.</p>

              <h3>10. Contact</h3>
              <p>For questions about these Terms of Service, please contact us through our support server.</p>
            </div>
          </section>
        </main>
      )}

      {/* Privacy Tab */}
      {activeTab === 'privacy' && (
        <main className="main-content">
          <section className="legal-section">
            <h2 className="section-title">Privacy Policy</h2>
            <div className="legal-content">
              <p className="legal-updated">Last Updated: October 21, 2025</p>
              
              <h3>1. Information We Collect</h3>
              <p>Riko Bot collects and stores the following information:</p>
              <ul>
                <li>Server IDs and server settings</li>
                <li>User IDs for command usage and features</li>
                <li>Message content only when explicitly required for command functionality</li>
                <li>Economy data (balances, inventory items)</li>
                <li>Leveling data (XP, levels, ranks)</li>
                <li>Moderation logs and warnings</li>
              </ul>

              <h3>2. How We Use Your Information</h3>
              <p>The collected information is used to:</p>
              <ul>
                <li>Provide and improve bot functionality</li>
                <li>Store user preferences and settings</li>
                <li>Maintain economy and leveling systems</li>
                <li>Generate statistics and analytics</li>
                <li>Troubleshoot issues and improve performance</li>
              </ul>

              <h3>3. Data Storage and Security</h3>
              <p>We implement reasonable security measures to protect your data. However, no method of transmission over the internet is 100% secure.</p>

              <h3>4. Data Sharing</h3>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share data with:</p>
              <ul>
                <li>Third-party APIs for specific features (e.g., YouTube for music, OpenWeather for weather)</li>
                <li>Law enforcement if required by law</li>
              </ul>

              <h3>5. Third-Party Services</h3>
              <p>The bot uses the following third-party services:</p>
              <ul>
                <li>Google/Gemini for AI features</li>
                <li>YouTube for music streaming</li>
                <li>Spotify and Genius for music information</li>
                <li>OpenWeather for weather data</li>
                <li>Giphy for GIF search</li>
              </ul>

              <h3>6. Data Retention</h3>
              <p>We retain your data for as long as necessary to provide our services. You can request data deletion by contacting us.</p>

              <h3>7. Your Rights</h3>
              <p>You have the right to:</p>
              <ul>
                <li>Request access to your data</li>
                <li>Request correction of your data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of certain data collection</li>
              </ul>

              <h3>8. Children's Privacy</h3>
              <p>The bot is not intended for users under 13 years of age. We do not knowingly collect data from children under 13.</p>

              <h3>9. Changes to Privacy Policy</h3>
              <p>We may update this Privacy Policy at any time. We will notify users of significant changes.</p>

              <h3>10. Contact</h3>
              <p>For privacy concerns or data requests, please contact us through our support server.</p>
            </div>
          </section>
        </main>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Riko Bot. All rights reserved.</p>
          <div className="footer-links">
            <button onClick={() => setActiveTab('tos')} className="footer-link">Terms of Service</button>
            <span className="text-gray-600">•</span>
            <button onClick={() => setActiveTab('privacy')} className="footer-link">Privacy Policy</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
