import { ReactNode } from 'react'
import styles from '../(beforeLogin)/_component/main/main.module.css'

export default function RootLayout({
	children,
	modal,
}: {
	children: ReactNode
	modal: ReactNode
}) {
	return (
		<div className={styles.container}>
			{children}
			{modal}
			{/* 패러렐 라우터 */}
		</div>
	)
}

//주소가 a.com일때는 children -> page.tsx. modal ->@modal/default.tsx
