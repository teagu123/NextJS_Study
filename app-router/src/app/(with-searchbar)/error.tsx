'use client'

import { useRouter } from 'next/navigation'
import { startTransition } from 'react'

export default function Error({
	error,
	reset,
}: {
	error: Error
	reset: () => void
}) {
	console.log(error)

	const router = useRouter()
	return (
		<div>
			<h3>오류 발생</h3>
			<button
				onClick={() => {
					startTransition(() => {
						router.refresh() // 현재 페이지 필요한 서버 컴포넌트 다시 불러옴
						reset() //에러 상태 초기화,컴포넌트 다시 랜더링
					})
				}}
			>
				복구하기
			</button>
		</div>
	)
}
