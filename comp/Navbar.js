import Link from "next/link";
import styles from "../styles/Home.module.css";

const Navbar = () => {
	return (
		<nav className={styles.grid}>
			<Link href="/">
				<h3 className={styles.logo}>MURWAN JS</h3>
			</Link>
			<div>
				<Link href="/">
					<a className={styles.links}>Home</a>
				</Link>

				<Link href="/about">
					<a className={styles.links}>About</a>
				</Link>

				<Link href="/users">
					<a className={styles.links}>Users</a>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
