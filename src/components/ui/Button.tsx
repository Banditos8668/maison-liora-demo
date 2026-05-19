import React from 'react';

type Variant = 'primary' | 'ghost' | 'accent';
type Size = 'default' | 'sm';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
  as?: 'a' | 'button';
  onClick?: () => void;
}

export function Button({
  variant = 'primary',
  size = 'default',
  as: Tag = 'a',
  children,
  className = '',
  onClick,
  ...props
}: ButtonProps) {
  const classes = [
    'btn',
    `btn-${variant}`,
    size === 'sm' ? 'btn-sm' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (Tag === 'button') {
    return (
      <button className={classes} onClick={onClick} type="button">
        {children}
      </button>
    );
  }

  return (
    <a className={classes} onClick={onClick} {...props}>
      {children}
    </a>
  );
}
