import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
	/*
	 * function to fetch data from
	 * this func will render before reach the browser
	 */
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();
	return {
		props: { users: data },
	};
};
const User = ({ users }) => {
	return (
		<>
			<Head>
				<title>Murwan-JS | Users</title>
				<meta name="keywords" content="murwan js" />
			</Head>
			<div className={styles.container}>
				<h1>All users</h1>
				{users.map((user) => (
					<Link href={"users/" + user.id} key={user.id}>
						<a className={styles.user_card}>
							<h3>{user.name}</h3>
						</a>
					</Link>
				))}
			</div>
		</>
	);
};

export default User;
