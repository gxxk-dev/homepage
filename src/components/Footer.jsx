import './Footer.css'

const Footer = () => {
  const socialLinks = [
    {
      name: 'Blog',
      url: 'https://re.frez79.io',
      type: 'external'
    },
    {
      name: 'GitHub', 
      url: 'https://github.com/gxxk-dev',
      type: 'external'
    },
    {
      name: 'LINUX DO',
      url: 'https://linux.do/u/frez79',
      type: 'external'
    }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-profile">
              <img className='footer-avatar' src="//assets.frez79.io/site-icon/frez-white.svg"/>
              <div className="footer-info">
                <h3>Frez79</h3>
                <p>初三生 / 全栈 / Android刷机 / ACGN</p>
                <small>[Frez79.io] AGPL v3+ (By Frez79)</small>
              </div>
            </div>
          </div>
          
          <div className="footer-right">
            <div className="footer-links">
              <div className="link-section">
                <h4>Find Me At:</h4>
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    target={link.type === 'external' ? '_blank' : '_self'} 
                    rel={link.type === 'external' ? 'noopener noreferrer' : ''}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer