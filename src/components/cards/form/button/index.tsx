import React from 'react';
import './styles.scss';

export interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'disabled';
  outline?: boolean;
  loading?: boolean;
  width?: string;
  height?: string;
  color?: string;
  padding?: string;
}

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <button
      className={`${props.variant}  ${props.outline === true ? 'outline' : ''}`}
      style={{
        width: props.width ? props.width : 'auto',
        height: props.height ? props.height : 'auto',
        color: props.color,
        padding: props.padding,
      }}
      onClick={props.onClick}
    >
      {props.loading ? (
        <div className="loader">
          <div className="inner one"></div>
          <div className="inner two"></div>
          <div className="inner three"></div>
        </div>
      ) : (
        props.text
      )}
    </button>
  );
};

export default Button;
