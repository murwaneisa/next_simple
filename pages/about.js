import styles from "../styles/Home.module.css";
import Head from "next/head";
const About = () => {
	return (
		<>
			<Head>
				<title>Murwan-JS | About</title>
				<meta name="keywords" content="murwan js" />
			</Head>
			<div className={styles.container}>
				<h1>About</h1>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam magnam
					ea numquam, id explicabo ducimus aliquam libero tenetur eveniet,
					adipisci sed recusandae repellendus? Voluptas minima officia illum
					aspernatur voluptatum eius.
				</p>
			</div>
		</>
	);
};

export default About;
