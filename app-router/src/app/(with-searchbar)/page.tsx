import BookItem from '@/components/book-item'
import style from './page.module.css'

import { BookData } from '@/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'ex 타이틀',
	description: 'ex description',
	openGraph: {
		title: 'ex title',
		description: 'ex description',
		images: ['/주소'],
	},
}

const AllBooks = async (url: '/book' | '/book/random') => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}${url}`)
	const bookList = await res.json()

	return bookList.map((book: BookData) => <BookItem key={book.id} {...book} />)
}

export default async function Home() {
	return (
		<div className={style.container}>
			<section>
				<h3>지금 추천하는 도서</h3>
				{AllBooks('/book/random')}
			</section>
			<section>
				<h3>등록된 모든 도서</h3>
				{AllBooks('/book')}
			</section>
		</div>
	)
}
