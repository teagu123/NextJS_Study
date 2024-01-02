import HomeButton from '../components/HomeButton'

type Props = {
	params: {
		location: string
	}
}

export default function Detail({ params }: Props) {
	const name = params.location === '서울' ? 'seoul' : '서울'

	//하지만 이벤트가 들어가는 행위 자체가 서버 컴포넌트가 용납을 할수없어서 오류가생김

	return (
		<>
			<HomeButton />
			<h1>{params.location}의 3일 예보</h1>
		</>
	)
}
