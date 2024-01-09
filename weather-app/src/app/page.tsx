import Button from './components/button'
import './style/layout.css'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

const getCurrentWeather = async () => {
	const res = await fetch(
		`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=seoul&days=3&aqi=no&alerts=no`,
	)
	return res.json()
}

export default async function Home() {
	const res = await getCurrentWeather()
	console.log(res)

	return (
		<>
			<div className="header">
				<div className="header-left">3일의 일기예보</div>
				<div className="header-right">
					<div>새로고침</div>
					<div>캐시 비우기</div>
				</div>
			</div>

			<div className="body">
				<div className="card">
					<img src="/img/seoul.avif" alt="seoul" />

					<Button location="seoul" />
				</div>

				<div className="card">
					<img src="/img/ny.avif" alt="ny" />

					<Button location="newyork" />
				</div>
				<div className="card">
					<img src="/img/paris.avif" alt="paris" />

					<Button location="paris" />
				</div>
				{/* <img className="cityImg" src="/img/ny.avif" alt="NY Img" /> */}
			</div>
		</>
	)
}
