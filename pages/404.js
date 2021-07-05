import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
	var currentDateTime = new Date();

	const router = useRouter();
	useEffect(() => {
		setTimeout(() => {
			router.push("/");
			console.log("invoc redirect func");
		}, 3000);
	}, []);
	return (
		<div className={`not-found ${styles.container}`}>
			<h2>Ooops...</h2>
			<h3>this page not found</h3>
			<p>
				go back to{" "}
				<Link href="/">
					<a>Home</a>
				</Link>
			</p>
		</div>
	);
};

export default NotFound;
