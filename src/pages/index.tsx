import { HeaderResponsiveTest } from "../components/HeaderResponsiveTest";

const mockLinks = [
	{ link: "One", label: "One" },
	{ link: "Two", label: "Two" },
	{ link: "Three", label: "Three" },
];

export default function Home() {
	return <HeaderResponsiveTest links={mockLinks} />;
}
