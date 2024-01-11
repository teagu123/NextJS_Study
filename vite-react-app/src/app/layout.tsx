import { ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Vite + React + TS',
}

function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>
				<div id="root">{children}</div>
			</body>
		</html>
	)
}
export default Layout
