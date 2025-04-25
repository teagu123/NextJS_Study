export default async function Search({
	searchParams,
}: {
	searchParams: Promise<{ q: string }>
}) {
	const { q } = await searchParams
	console.log(q)
	return <div>search</div>
}
