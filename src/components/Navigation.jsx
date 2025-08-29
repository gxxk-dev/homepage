import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: '首页' },
    { path: '/projects', label: '项目' },
    { path: '/about', label: '关于' },
    { path: '/contact', label: '联系' }
  ]

  return (
    <nav className="navigation">
      <div className="container">
        <div className="nav-brand">
          <Link to="/">Frez79</Link>
        </div>
        <ul className="nav-links">
          {navItems.map(item => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation