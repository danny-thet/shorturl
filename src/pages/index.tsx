import Head from "next/head";
import Image from "next/image";
import { HeaderResponsive } from "../components/HeaderResonspive";
import styles from "../styles/Home.module.css";

const mockLinks = [
	{ link: "One", label: "One" },
	{ link: "Two", label: "Two" },
	{ link: "Three", label: "Three" },
];

export default function Home() {
	return (
		<div className={styles.container}>
			<HeaderResponsive links={mockLinks} />
		</div>
	);
}
