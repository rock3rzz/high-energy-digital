import React from 'react';
import { sfx } from '../../utils/audio';

const injectStyles = () => {
  if (typeof document === 'undefined') return;
  const styleId = 'star-border-styles';
  if (document.getElementById(styleId)) return;
  const styleElement = document.createElement('style');
  styleElement.id = styleId;
  styleElement.textContent = `
    .star-border-container {
      position: relative;
      display: inline-block;
      overflow: hidden;
      /* borderRadius removed for sharp edges */
      z-index: 1;
    }
    
    .border-gradient-bottom,
    .border-gradient-top {
      position: absolute;
      width: 300%;
      aspect-ratio: 1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
      animation: star-border-rotate linear infinite;
      opacity: 1;
    }

    .border-gradient-top {
      animation-delay: -3s;
    }

    .inner-content {
      position: relative;
      background: #050505; 
      z-index: 2;
      /* Sharp edges for inner content */
      width: calc(100% - 2px);
      height: calc(100% - 2px);
      margin: 1px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @keyframes star-border-rotate {
      from {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      to {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  `;
  document.head.appendChild(styleElement);
};

if (typeof document !== 'undefined') {
  injectStyles();
}

type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  speed?: string;
  thickness?: number;
};

const StarBorder = <T extends React.ElementType = 'button'>({
  as,
  className = '',
  color = '#DE69CB', // Default HED Pink
  speed = '4s',
  thickness = 1,
  children,
  onMouseEnter,
  onClick,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || 'button';

  return (
    <Component
      className={`star-border-container ${className}`}
      onMouseEnter={(e: any) => {
        sfx.playHover();
        if (onMouseEnter) onMouseEnter(e);
      }}
      onClick={(e: any) => {
        sfx.playClick();
        if (onClick) onClick(e);
      }}
      {...(rest as any)}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export default StarBorder;