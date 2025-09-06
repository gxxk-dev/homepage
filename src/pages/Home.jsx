import TypeWriter from '../components/TypeWriter'
import AnimatedBackground from '../components/AnimatedBackground'
import Footer from '../components/Footer'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <AnimatedBackground />
      <main className="main-content">
        <div className="container">
          <div className="hero-section fade-in">
            <h1 className="main-title">
              Frez79
            </h1>
            <p className="subtitle">
              <TypeWriter text="the Pulse of Edge Nodes." speed={90} />
            </p>
            <div className="action-buttons">
              <a 
                href="/projects" 
                className="btn btn-blog"
              >
                My Projects
              </a>
              <a 
                href="/log" 
                className="btn btn-blog"
              >
                My Log
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home