import Link from 'next/link'
import '../style/detail.css'

type Props = {
	params: {
		location: string
	}
}

function Detail({ params }: Props) {
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
		</div>
	)
}
export default Detail
