import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

const variantStyles = {
  primary:
    'bg-forest-600 text-white hover:bg-forest-700 shadow-md hover:shadow-lg',
  secondary:
    'bg-white text-forest-700 hover:bg-forest-50 shadow-md hover:shadow-lg border border-forest-200',
  outline:
    'border-2 border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white',
}

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0'
  const styles = `ETB {baseStyles} ETB {variantStyles[variant]} ETB {sizeStyles[size]} ETB {className}`

  if (to) {
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  )
}
