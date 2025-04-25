import './globals.css'
import Link from 'next/link'
import style from './layout.module.css'

const AllBooks = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`)
	const bookList = await res.json()

	return bookList.length
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>
				<div className={style.container}>
					<header>
						<Link href={'/'}>📚 책방</Link>
					</header>
					<main>{children}</main>
					<footer>
						<div>제작 @taegu123</div>
						<br />
						<div>{AllBooks()}개의 도서과 등록되어있습니다</div>
					</footer>
				</div>
			</body>
		</html>
	)
}
