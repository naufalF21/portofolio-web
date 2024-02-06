import Button from '@/components/Button';
import Card from '@/components/Card';

export default function Home() {
	return (
		<main className="p-5 text-white flex flex-col gap-5 w-fit">
			<Button text="Let's talk" />
			<Card />
		</main>
	);
}
