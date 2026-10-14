import { useEffect, useState } from 'react';

const LoadingSpinner = ({ size = 'medium', color = 'primary' }) => {
  const sizeClasses = {
    small: '1rem',
    medium: '2rem',
    large: '3rem'
  };

  const colorClasses = {
    primary: 'var(--primary-blue)',
    accent: 'var(--accent-cyan)',
    purple: 'var(--accent-purple)'
  };

  return (
    <div
      style={{
        width: sizeClasses[size],
        height: sizeClasses[size],
        border: '2px solid transparent',
        borderTop: `2px solid ${colorClasses[color]}`,
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}
    />
  );
};

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setIsLoading(false), 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'var(--bg-primary)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.5s ease-out'
      }}
    >
      <div className="mb-4">
        <div
          style={{
            width: '60px',
            height: '60px',
            border: '3px solid var(--border-primary)',
            borderTop: '3px solid var(--primary-blue)',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}
        />
      </div>
      <h2 className="gradient-text mb-2" style={{ fontSize: '1.5rem', fontWeight: '700' }}>
        Imran Ansari
      </h2>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        Loading portfolio...
      </p>
    </div>
  );
};

const SkeletonLoader = ({ width = '100%', height = '20px', className = '' }) => {
  return (
    <div
      className={`skeleton ${className}`}
      style={{
        width,
        height,
        borderRadius: 'var(--radius-sm)',
        marginBottom: '0.5rem'
      }}
    />
  );
};

// Add the spin animation to CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);

export { LoadingSpinner, PageLoader, SkeletonLoader };
