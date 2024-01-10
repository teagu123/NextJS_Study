import { getCurrentWeather } from '@/utils/getCurrentWeather'
import Button from '../components/button'
import './style/layout.css'

export default async function Home() {
	const res = await getCurrentWeather('Seoul')

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

					<Button location="NY" />
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
