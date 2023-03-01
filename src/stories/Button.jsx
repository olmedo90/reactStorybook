import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({tamaño, modobg, primary, backgroundColor, size, label, ...props }) => {
  console.log(backgroundColor);
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const bg= modobg&&'container-bg';
  return (
    <div  >
      <h1 className={`${bg} font-size-${tamaño}`}>hola mundo</h1>
      <button
      type="button"
      className={`storybook-button storybook-button--${size} ${mode}`}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
    </div>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
