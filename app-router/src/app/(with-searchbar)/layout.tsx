import { ReactNode } from 'react'
import SearchBox from '@/components/search-box'

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div>
			<SearchBox />
			{children}
		</div>
	)
}
