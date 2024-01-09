'use client'

import { useRouter } from 'next/navigation'
import '../style/button.css'

type Title = {
	location: string
}
function Button(title: Title) {
	const router = useRouter()

	const onClickCity = () => {
		router.push(title.location)
	}
	return (
		<div className="button" onClick={onClickCity}>
			{title.location} 날씨 보러가기
		</div>
	)
}
export default Button
