import { h } from 'preact';
import style from './style';

const Result = ({ children }) => {
  return (
    <div class={style.result}>
      <b>access token</b> : {children}
    </div>
  );
};

export default Result;