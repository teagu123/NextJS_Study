import { ReactNode } from 'react'
import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
	title: 'react-app',
	description: 'CRA',
}

export const viewport: Viewport = {
	themeColor: '#000000',
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
