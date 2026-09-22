import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  layout?: 'primary' | 'compact' | 'iconOnly';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSlogan?: boolean;
  className?: string;
  alt?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  size = 'md',
  className = '',
  alt = 'AC Services in Thane'
}) => {
  const isDark = variant === 'dark';
  const logoSrc = isDark ? '/logo-dark.svg' : '/logo.svg';

  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12 md:h-13',
    lg: 'h-12 sm:h-14 md:h-16',
    xl: 'h-16 sm:h-20'
  }[size];

  return (
    <img
      src={logoSrc}
      alt={alt}
      className={`site-logo ${sizeClasses} ${className}`}
      referrerPolicy="no-referrer"
      loading="eager"
      decoding="async"
    />
  );
};
