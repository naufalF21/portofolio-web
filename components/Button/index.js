export default function Button({ text }) {
	return (
		<button className="btn border border-primary py-2 px-4 font-semibold hover:bg-primary hover:text-secondary">
			{text}
		</button>
	);
}
