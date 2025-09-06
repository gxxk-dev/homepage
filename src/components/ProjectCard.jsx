import './ProjectCard.css'

const ProjectCard = ({ project, isOpen, onToggleDropdown }) => {
  return (
    <div className="project-item">
      <div className="project-header">
        <button 
          className="mobile-dropdown-toggle"
          onClick={onToggleDropdown}
          aria-label="展开选项"
        >
          <span className={`triangle ${isOpen ? 'open' : ''}`}>▼</span>
        </button>
      </div>
      <div className="project-content">
        <div className="project-main">
          <div className="project-title-row">
            <h3>{project.name}</h3>
          </div>
          <p className="project-description">{project.description}</p>
          <div className="tech-stack">
            {project.tech.map(tech => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
        <div className="project-actions">
          <div className="action-buttons desktop-buttons">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-demo">
                Demo
              </a>
            )}
            {project.blog && (
              <a href={project.blog} target="_blank" rel="noopener noreferrer" className="btn btn-blog-link">
                Blog
              </a>
            )}
            {project.github && project.github !== '#' && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-source">
                Source
              </a>
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="mobile-dropdown">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="dropdown-link">
              📱 Demo
            </a>
          )}
          {project.blog && (
            <a href={project.blog} target="_blank" rel="noopener noreferrer" className="dropdown-link">
              📖 Blog
            </a>
          )}
          {project.github && project.github !== '#' && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="dropdown-link">
              💻 Source
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default ProjectCard