import Link from 'next/link'

export default function Home() {
	const getCurrentWeather = async () => {
		const res = await fetch(
			'http://api.weatherapi.com/v1/current.json?key=e2611e4744e24a05bb682908232812&q=Seoul&aqi=no',
		)

		return res.json()
	}

	return (
		<>
			<h1>main</h1>
			<ul>
				<li>
					<Link href="/seoul">서울</Link>
				</li>
				<li>
					<Link href="/newyork">뉴욕 </Link>
				</li>

				<li>
					<Link href="/london">런던</Link>
				</li>
			</ul>
		</>
	)
}
