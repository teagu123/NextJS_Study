'use client'

import { useEffect } from 'react'

type Props = {
	error: Error
	reset: () => void
}

function Error({ error }: Props) {
	useEffect(() => {
		console.log(error.message)
	}, [])
	return (
		<>
			<div>에러 페이지</div>
		</>
	)
}
export default Error
