import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeCommandTab, setActiveCommandTab] = useState('admin');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to top when changing tabs
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const commandsData = {
    admin: [
      { name: 'aichat', desc: 'Setup AI Chat channel' },
      { name: 'autorole', desc: 'setup role to be given when a member joins the server' },
      { name: 'counter', desc: 'setup counter channel in the guild' },
      { name: 'embed', desc: 'send embed message' },
      { name: 'flagtranslation', desc: 'configure flag translation in the server' },
      { name: 'globalchat', desc: 'Setup or manage the globalchat system for your server' },
      { name: 'farewell', desc: 'setup farewell message' },
      { name: 'welcome', desc: 'setup welcome message' },
      { name: 'maxwarn', desc: 'set max warnings configuration' },
      { name: 'modlog', desc: 'enable or disable moderation logs' },
      { name: 'addrr', desc: 'setup reaction role for the specified message' },
      { name: 'removerr', desc: 'remove configured reaction for the specified message' },
      { name: 'setprefix', desc: 'sets a new prefix for this server' }
    ],
    automod: [
      { name: 'anti', desc: 'manage various automod settings for the server' },
      { name: 'autodelete', desc: 'manage the autodelete settings for the server' },
      { name: 'automod', desc: 'various automod configuration' }
    ],
    anime: [
      { name: 'react', desc: 'anime reactions' }
    ],
    economy: [
      { name: 'bank', desc: 'access to bank operations' },
      { name: 'beg', desc: 'beg from someone' },
      { name: 'daily', desc: 'receive a daily bonus' },
      { name: 'gamble', desc: 'try your luck by gambling' }
    ],
    fun: [
      { name: 'facts', desc: 'shows a random animal facts' },
      { name: 'flip', desc: 'flips a coin or message' },
      { name: 'meme', desc: 'get a random meme' },
      { name: 'snake', desc: 'play snake game on discord' },
      { name: 'together', desc: 'discord together' }
    ],
    giveaway: [
      { name: 'giveaway', desc: 'giveaway commands' }
    ],
    invites: [
      { name: 'addinvites', desc: 'add invites to a member' },
      { name: 'invitecodes', desc: 'list all your invites codes in this guild' },
      { name: 'inviter', desc: 'shows inviter information' },
      { name: 'inviterank', desc: 'configure invite ranks' },
      { name: 'inviteranks', desc: 'shows the invite ranks configured on this guild' },
      { name: 'invites', desc: 'shows number of invites in this server' },
      { name: 'invitesimport', desc: 'add existing guild invites to users' },
      { name: 'invitetracker', desc: 'enable or disable invite tracking in the server' },
      { name: 'resetinvites', desc: 'clear a users added invites' }
    ],
    information: [
      { name: 'leaderboard', desc: 'display the XP, invite and rep leaderboard' },
      { name: 'avatar', desc: 'shows a users avatar information' },
      { name: 'botinvite', desc: 'gives you bot invite' },
      { name: 'botstats', desc: 'shows bot information' },
      { name: 'channelinfo', desc: 'shows information about a channel' },
      { name: 'emojiinfo', desc: 'shows info about an emoji' },
      { name: 'guildinfo', desc: 'shows information about the server' },
      { name: 'uptime', desc: 'gives you bot uptime' },
      { name: 'userinfo', desc: 'shows information about the user' },
      { name: 'ping', desc: 'shows the current ping from the bot to the discord servers' }
    ],
    moderation: [
      { name: 'ban', desc: 'bans the specified member' },
      { name: 'kick', desc: 'kicks the specified member' },
      { name: 'deafen', desc: 'deafen specified member in voice channels' },
      { name: 'disconnect', desc: 'disconnect specified member from voice channel' },
      { name: 'move', desc: 'move specified member to voice channel' },
      { name: 'purge', desc: 'deletes the specified amount of messages' },
      { name: 'purgeattach', desc: 'deletes the specified amount of messages with attachments' },
      { name: 'purgebots', desc: 'deletes the specified amount of messages from bots' },
      { name: 'purgelinks', desc: 'deletes the specified amount of messages with links' },
      { name: 'purgetoken', desc: 'deletes the specified amount of messages containing the token' },
      { name: 'purgeuser', desc: 'deletes the specified amount of messages' },
      { name: 'undeafen', desc: 'undeafen specified member in voice channels' },
      { name: 'vmute', desc: "mutes specified member's voice" },
      { name: 'vunmute', desc: "unmutes specified member's voice" },
      { name: 'nick', desc: 'nickname commands' },
      { name: 'softban', desc: 'softban the specified member. Kicks and deletes messages' },
      { name: 'timeout', desc: 'timeouts the specified member' },
      { name: 'unban', desc: 'unbans the specified member' },
      { name: 'untimeout', desc: 'remove timeout from a member' },
      { name: 'warn', desc: 'warns the specified member' },
      { name: 'warnings', desc: 'list or clear user warnings' }
    ],
    music: [
      { name: 'bassboost', desc: 'set bassboost level' },
      { name: 'loop', desc: 'loops the song or queue' },
      { name: 'lyrics', desc: 'find lyrics of the song' },
      { name: 'nowplaying', desc: "show's what track is currently being played" },
      { name: 'pause', desc: 'pause the music player' },
      { name: 'play', desc: 'play a song from youtube' },
      { name: 'queue', desc: 'displays the current music queue' },
      { name: 'resume', desc: 'resumes the music player' },
      { name: 'search', desc: 'search for matching songs on youtube' },
      { name: 'seek', desc: "sets the playing track's position to the specified position" },
      { name: 'shuffle', desc: 'shuffle the queue' },
      { name: 'skip', desc: 'skip the current song' },
      { name: 'stop', desc: 'stop the music player' },
      { name: 'volume', desc: 'set the music player volume' }
    ],
    social: [
      { name: 'rep', desc: 'give reputation to a user' }
    ],
    rank: [
      { name: 'rank', desc: "Displays a member's rank in this server" },
      { name: 'stats', desc: 'displays members stats in this server' },
      { name: 'statstracking', desc: 'enable or disable tracking stats in the server' },
      { name: 'levelup', desc: 'configure the levelling system' }
    ],
    suggestion: [
      { name: 'suggest', desc: 'submit a suggestion' },
      { name: 'suggestion', desc: 'configure suggestion system' }
    ],
    ticket: [
      { name: 'ticket', desc: 'various ticketing commands' },
      { name: 'ticketcat', desc: 'manage ticket categories' }
    ],
    utility: [
      { name: 'bigemoji', desc: 'enlarge an emoji' },
      { name: 'covid', desc: 'get covid statistics for a country' },
      { name: 'github', desc: 'shows github statistics of a user' },
      { name: 'help', desc: 'command help menu' },
      { name: 'paste', desc: 'Paste something in sourceb.in' },
      { name: 'pokedex', desc: 'shows pokemon information' },
      { name: 'proxies', desc: 'fetch proxies. Available types: http, socks4, socks5' },
      { name: 'translate', desc: 'translate from one language to other' },
      { name: 'urban', desc: 'searches the urban dictionary' },
      { name: 'weather', desc: 'get weather information' }
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
            <img src="https://raw.githubusercontent.com/hiratanagis/Riko-web/refs/heads/main/assets/IMG_20251024_094450-removebg-preview%20(2).png" alt="Riko bot logo" className="logo-icon"/>
            <span className="logo-text">Riko Bot</span>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links hidden md:flex">
            <button onClick={() => setActiveTab('home')} href="#home" className={activeTab === 'home' ? 'nav-link active' : 'nav-link'}>Home</button>
            <button onClick={() => setActiveTab('commands')} href="#commands" className={activeTab === 'commands' ? 'nav-link active' : 'nav-link'}>Commands</button>
            <button onClick={() => setActiveTab('tos')} href="#tos" className={activeTab === 'tos' ? 'nav-link active' : 'nav-link'}>TOS</button>
            <button onClick={() => setActiveTab('privacy')} href="#privacy-policy" className={activeTab === 'privacy' ? 'nav-link active' : 'nav-link'}>Privacy</button>
            <a href="https://discord.com/api/oauth2/authorize?client_id=709305478882000918&scope=bot+applications.commands&permissions=3097754271607927" className="btn-primary ml-4">Invite Now</a>
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
            <button onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }} href="#home" className={activeTab === 'home' ? 'mobile-link active' : 'mobile-link'}>Home</button>
            <button onClick={() => { setActiveTab('commands'); setMobileMenuOpen(false); }} href="#commands" className={activeTab === 'commands' ? 'mobile-link active' : 'mobile-link'}>Commands</button>
            <button onClick={() => { setActiveTab('tos'); setMobileMenuOpen(false); }} href="#tos" className={activeTab === 'tos' ? 'mobile-link active' : 'mobile-link'}>TOS</button>
            <button onClick={() => { setActiveTab('privacy'); setMobileMenuOpen(false); }} href="#privacy-policy" className={activeTab === 'privacy' ? 'mobile-link active' : 'mobile-link'}>Privacy</button>
            <a href="https://discord.com/api/oauth2/authorize?client_id=709305478882000918&scope=bot+applications.commands&permissions=3097754271607927" className="btn-primary block text-center mt-4">Invite Now</a>
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
                <a href="https://discord.com/api/oauth2/authorize?client_id=709305478882000918&scope=bot+applications.commands&permissions=3097754271607927" className="btn-primary btn-lg bubble-hover">
                  Invite Riko Now
                </a>
                <button onClick={() => setActiveTab('commands')} href="#commands" className="btn-secondary btn-lg">
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
              <a href="https://discord.com/api/oauth2/authorize?client_id=709305478882000918&scope=bot+applications.commands&permissions=3097754271607927" className="btn-primary btn-lg bubble-hover">
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
              Explore all available commands organized by category. Use the prefix <code className="text-red-400 bg-gray-800 px-2 py-1 rounded">!</code> or <code className="text-red-400 bg-gray-800 px-2 py-1 rounded">/</code> before each command.
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
                  <span className="command-name">{cmd.name}</span>
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
              <p>The bot may integrate with third-party services (YouTube, Spotify, Gemini, etc.). Your use of these features is subject to the respective third-party terms.</p>

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

              <h3>6. Data Retention and Deletion</h3>
              <p>Riko retains user and server data for as long as necessary to provide its features. Currently, users cannot request data deletion. If you wish to stop data collection, you may remove Riko from your Discord server or stop interacting with the Bot.</p>

              <h3>7. Children's Privacy</h3>
              <p>The bot is not intended for users under 13 years of age. We do not knowingly collect data from children under 13.</p>

              <h3>8. Changes to Privacy Policy</h3>
              <p>We may update this Privacy Policy at any time. We will notify users of significant changes.</p>

              <h3>9. Contact</h3>
              <p>For questions or concerns about this Privacy Policy, please contact us through our support server.</p>
            </div>
          </section>
        </main>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Riko Bot. All rights reserved.</p>
          <div className="footer-links">
            <button onClick={() => setActiveTab('tos')} href="#tos" className="footer-link">Terms of Service</button>
            <span className="text-gray-600">•</span>
            <button onClick={() => setActiveTab('privacy')} href="#privacy-policy" className="footer-link">Privacy Policy</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
