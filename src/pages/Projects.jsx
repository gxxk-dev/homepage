import { Link } from 'react-router-dom'
import { useState } from 'react'
import AnimatedBackground from '../components/AnimatedBackground'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import './Projects.css'
const Projects = () => {
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleDropdown = (projectId) => {
    setOpenDropdown(openDropdown === projectId ? null : projectId)
  }
  const myProjects = [
    {
      id: 1,
      name: 'VOCArchive',
      description: '适用于中国大陆的泛VOCALOID作品存档工具，支持多种音频格式和元数据管理。',
      tech: ['TypeScript', 'Cloudflare Workers', 'Hono.js'],
      github: 'https://github.com/gxxk-dev/VOCArchive',
      demo: 'https://demo.vocarchive.com',
      blog: null,
    },
    {
      id: 2,
      name: 'workerchat-with-E2EE',
      description: '基于Cloudflare Worker的端到端非对称加密聊天室',
      tech: ['Cloudflare Workers', 'E2EE', 'WebSocket'],
      github: 'https://github.com/gxxk-dev/workerchat-with-E2EE',
      demo: 'https://chat.frez79.io',
      blog: null,
    },
    {
      id: 3,
      name: 'telecomadmin_for_HG5143F-ONU',
      description: '适用于型号为HG5143F-ONU的电信光猫超级密码获取程序',
      tech: ['Python', 'Telnet'],
      github: 'https://github.com/gxxk-dev/telecomadmin_for_HG5143F-ONU',
      demo: null,
      blog: null,
    },
    {
      id: 4,
      name: 'Frez79 Homepage',
      description: '个人主页项目 使用React构建的现代化响应式网站',
      tech: ['React', 'Vite', 'CSS'],
      github: '#',
      demo: 'https://frez79.io',
      blog: null,
    },
    {
      id: 5,
      name: 'Re:Frez79',
      description: '个人博客项目 使用Hexo/Fluid构建的现代化响应式博客网站',
      tech: ['Hexo', 'Fluid'],
      github: '#',
      demo: null,
      blog: 'https://re.frez79.io',
    },
    {
      id:6,
      name: '机房摸鱼之盾',
      description: '用于在 校内信息技术课 上 逃避监管/娱乐 的资源整合页面',
      tech: ['HTML', 'CSS', 'JavaScript'],
      demo: 'https://myd.frez79.io',
      blog: null,
    }
  ]

  return (
    <div className="projects-page">
      <AnimatedBackground />
      <div className="projects-nav">
        <Link to="/" className="back-link">← 返回首页</Link>
      </div>
      
      <main className="main-content">
        <div className="container">
          <header className="projects-header">
            <h1>My Projects</h1>
            <p>存档Frez79曾经写过的项目.</p>
          </header>

          <section className="projects-section">
            <div className="projects-list">
              {myProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isOpen={openDropdown === project.id}
                  onToggleDropdown={() => toggleDropdown(project.id)}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Projects