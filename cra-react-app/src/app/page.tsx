'use client' //이 페이지를 클라이언트 컴포넌트로 설정한다

import '../index.css'
import dynamic from 'next/dynamic'
const App = dynamic(() => import('../App'), { ssr: false })

export default function Page() {
	return <App />
}
