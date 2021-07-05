import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../comp/Navbar";
import Footer from "../comp/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Murwan-JS | Home</title>
				<meta name="keywords" content="murwan js" />
			</Head>
			<div className={styles.container}>
				<h1 className={styles.title}>Home page</h1>
				<p className={styles.description}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam iste
					rerum ullam porro, minima est deserunt maiores aperiam temporibus
					illum provident voluptatem. Culpa illo nisi adipisci, corporis quas
					sed beatae excepturi eius rem eum sapiente vero iusto eaque quia.
					Ipsam similique aspernatur nihil, modi debitis aut quis! A, molestiae
					alias!
				</p>
				<Link href="/users">
					<a className={styles.btn}>See all users</a>
				</Link>
				<br></br>
				<p>Support us</p>
				<Image src="/swish.png" width={100} height={100} />
			</div>
		</>
	);
}
