import HomeButton from '@/components/HomeButton'
import { getForecast } from '../utils/getForecast'

type Props = {
	params: {
		location: string
	}
}

export default async function Detail({ params }: Props) {
	const res = await getForecast(params.location)
	console.log(res)

	let city =
		params.location === 'Seoul'
			? '서울'
			: params.location === 'Newyork'
			? '뉴욕'
			: '런던'

	return (
		<>
			<HomeButton />
			<h1>{city}의 3일 예보</h1>
			{res.forecast.forecastday.map(day => (
				<li key={day.date}>
					{day.date}/{day.day.avgtemp_c}
				</li>
			))}
		</>
	)
}
