import { h } from 'preact';
import style from './style';

const Button = ({ color, onClick, children }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      class={style.button}
      style={{ backgroundColor: color }}
    >
      {children}
    </button>
  );
};

export default Button;