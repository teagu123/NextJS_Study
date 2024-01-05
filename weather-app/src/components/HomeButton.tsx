'use client'
import { useRouter } from 'next/navigation'

function HomeButton() {
	const router = useRouter()
	function goHome() {
		router.push('/')
	}
	return (
		<>
			<button onClick={goHome}>홈 버튼</button>
		</>
	)
}

export default HomeButton
