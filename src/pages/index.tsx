import { HeaderResponsive } from "../components/HeaderResponsive";
import styles from "../styles/Home.module.css";

const mockLinks = [
	{ link: "One", label: "One" },
	{ link: "Two", label: "Two" },
	{ link: "Three", label: "Three" },
];

export default function Home() {
	return <HeaderResponsive links={mockLinks} />;
}
