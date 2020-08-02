import { h } from 'preact';
import style from './style';

const Information = () => {
  return (
    <p class={style.info}>
      Key 정보는 절대 수집되지 않습니다.
    </p>
  );
};

export default Information;