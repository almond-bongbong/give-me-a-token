import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<Link href="/">
			<h1>Give me a token</h1>
		</Link>
		{/*<nav>*/}
			{/*<Link activeClassName={style.active} href="/">Home</Link>*/}
			{/*<Link activeClassName={style.active} href="/profile">Me</Link>*/}
			{/*<Link activeClassName={style.active} href="/profile/john">John</Link>*/}
		{/*</nav>*/}
	</header>
);

export default Header;
