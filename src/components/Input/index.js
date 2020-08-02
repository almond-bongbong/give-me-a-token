import { h } from 'preact';
import style from './style.css';

const Input = ({ label, value, onChange }) => {
  return (
    <div class={style.input}>
      <label htmlFor={label}>{label}</label>
      <input type="password" id={label} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;