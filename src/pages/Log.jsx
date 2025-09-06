import React from 'react';
import { Link } from 'react-router-dom';
import './Log.css';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import Badge from '../components/Badge';

const Log = () => {
  const logEntries = [
    // 2024年12月
    {
      date: '2025-09-06',
      title: '个人站点 Logs 功能 上线',
      description: '经过多番折腾后总算是把这个功能给弄好了 好耶www',
      type: 'feat',
      badgeText: '开发调优'
    }
  ];

  // Convert date strings to timestamps and sort in descending order (newest first)
  const sortedLogEntries = [...logEntries].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Helper function to format relative time
  const getRelativeTime = (timestamp) => {
    const now = new Date();
    const diffTime = Math.abs(now - timestamp);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '昨天';
    if (diffDays <= 7) return `${diffDays}天前`;
    if (diffDays <= 30) return `${Math.ceil(diffDays / 7)}周前`;
    if (diffDays <= 365) return `${Math.ceil(diffDays / 30)}月前`;
    return `${Math.ceil(diffDays / 365)}年前`;
  };

  return (
    <div className="log-page">
      <AnimatedBackground />
      
      {/* Navigation */}
      <div className="log-nav">
        <Link to="/" className="back-link">← 返回首页</Link>
      </div>
      
      <main className="main-content">
        <div className="container">
          <header className="log-header">
            <h1 className="log-title">My Log</h1>
            <p className="log-subtitle">杂食向个人日志. 可视为无审查化QQ空间.</p>
          </header>
          
          <div className="timeline">
            {sortedLogEntries.map((entry, index) => (
              <div key={`${entry.date}-${index}`} className="timeline-item">
                <div className="timeline-marker">
                  <div className={`timeline-icon ${entry.type}`}></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-date">
                    {entry.date}
                    <span className="timeline-relative-time"> · {getRelativeTime(new Date(entry.date))}</span>
                  </div>
                  <h3 className="timeline-title">{entry.title}</h3>
                  <p className="timeline-description">{entry.description}</p>
                  <Badge variant={entry.type} size="medium">
                    {entry.badgeText}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Log;
