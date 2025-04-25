import { ReactNode, Suspense } from 'react'
import SearchBox from '@/components/search-box'

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div>
			<Suspense fallback={<div>로딩중....</div>}>
				<SearchBox />
			</Suspense>
			{children}
		</div>
	)
}
