import './Badge.css'

const Badge = ({ 
  children, 
  variant = 'default', 
  size = 'medium',
  color,
  background,
  borderColor,
  className = '',
  ...props 
}) => {
  // Predefined variants with color schemes
  const variants = {
    dev: {
      color: '#60a5fa',
      background: 'rgba(59, 130, 246, 0.15)',
      borderColor: 'rgba(59, 130, 246, 0.25)'
    },
    enhancement: {
      color: '#34d399',
      background: 'rgba(16, 185, 129, 0.15)',
      borderColor: 'rgba(16, 185, 129, 0.25)'
    },
    bugfix: {
      color: '#f87171',
      background: 'rgba(239, 68, 68, 0.15)',
      borderColor: 'rgba(239, 68, 68, 0.25)'
    },
    feat: {
      color: '#fbbf24',
      background: 'rgba(245, 158, 11, 0.15)',
      borderColor: 'rgba(245, 158, 11, 0.25)'
    },
    success: {
      color: '#22c55e',
      background: 'rgba(34, 197, 94, 0.15)',
      borderColor: 'rgba(34, 197, 94, 0.25)'
    },
    warn: {
      color: '#f59e0b',
      background: 'rgba(245, 158, 11, 0.15)',
      borderColor: 'rgba(245, 158, 11, 0.25)'
    },
    error: {
      color: '#ef4444',
      background: 'rgba(239, 68, 68, 0.15)',
      borderColor: 'rgba(239, 68, 68, 0.25)'
    },
    info: {
      color: '#3b82f6',
      background: 'rgba(59, 130, 246, 0.15)',
      borderColor: 'rgba(59, 130, 246, 0.25)'
    },
    default: {
      color: '#9ca3af',
      background: 'rgba(156, 163, 175, 0.15)',
      borderColor: 'rgba(156, 163, 175, 0.25)'
    }
  }

  // Get variant styles or use custom colors
  const variantStyles = variants[variant] || variants.default
  const badgeStyles = {
    color: color || variantStyles.color,
    backgroundColor: background || variantStyles.background,
    borderColor: borderColor || variantStyles.borderColor
  }

  const badgeClasses = `badge badge--${size} ${className}`.trim()

  return (
    <span 
      className={badgeClasses}
      style={badgeStyles}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge