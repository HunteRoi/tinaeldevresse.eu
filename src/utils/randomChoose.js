export default function randomChoose(...values) {
	return values[Math.floor(Math.random() * values.length)];
}
