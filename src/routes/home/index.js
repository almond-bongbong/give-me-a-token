import { h, Component } from 'preact';
import style from './style';
import KaKaoLogin from '../../components/KakaoLogin';

export default class Home extends Component {
	componentDidMount() {
	}

	render() {
		return (
			<div class={style.home}>
				<KaKaoLogin />
			</div>
		);
	}
}
