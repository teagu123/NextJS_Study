import Link from 'next/link'
import { getCurrentWeather } from './utils/getCurrentWeather'

export default async function Home() {
	const res = await getCurrentWeather('Seoul')
	console.log(res)

	return (
		<>
			<h1>날씨앱</h1>
			<ul>
				<li>
					<Link href="/Seoul">서울</Link>
				</li>
				<li>
					<Link href="/Newyork">뉴욕</Link>
				</li>
				<li>
					<Link href="/London">런던</Link>
				</li>
			</ul>
		</>
	)
}
