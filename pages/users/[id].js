import styles from "../../styles/Home.module.css";

export const getStaticPaths = async () => {
	/*
	 *it needs to define a list of paths that have to be rendered to HTML at build time.
	 *check the doc at : https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
	 */
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();
	const paths = data.map((user) => {
		return {
			params: {
				//convert the id from integer to string.
				id: user.id.toString(),
			},
		};
	});
	console.log(paths);
	//the fallback key require
	return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
	//context is an object that has the id
	const id = context.params.id;
	const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
	const data = await res.json();
	return {
		props: { user: data },
	};
};

const Details = ({ user }) => {
	return (
		<div className={styles.container}>
			<h3>{`Details about ${user.name}`}</h3>
			<p>{user.email}</p>
			<p>{user.website}</p>
			<p>{user.address.city}</p>
		</div>
	);
};

export default Details;
