import Link from 'next/link'
import '../style/detail.css'
import { getForecastWeather } from '@/utils/getForecastWeather'

export function generateMetadata({ params }: Props) {
	return {
		title: `날씨 디테일 -${params.location}`,
		description: '날씨를 알려드립니다.',
	}
}

type Props = {
	params: {
		location: string
	}
}

async function Detail({ params }: Props) {
	const res = await getForecastWeather(params.location)
	console.log(res)

	console.log(params.location)
	let city =
		params.location === 'seoul'
			? '서울'
			: params.location === 'newyork'
			? '뉴욕'
			: '파리'
	return (
		<div className="body">
			<Link href={'/'}>
				<button className="homeBtn">홈으로</button>
			</Link>

			<div className="cityName">{city} 날씨</div>
			<ul>
				{res.forecast.forecastday.map(day => (
					<li key={day.date}>
						{day.date} / {day.day.avgtemp_c}
					</li>
				))}
			</ul>
		</div>
	)
}
export default Detail
