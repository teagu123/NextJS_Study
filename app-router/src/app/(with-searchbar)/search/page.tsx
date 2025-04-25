import BookItem from '@/components/book-item'
import { BookData } from '@/types'
import Delay from '@/utils/delay'
import { Suspense } from 'react'

export default async function Page({
	searchParams,
}: {
	searchParams: Promise<{ q?: string }>
}) {
	const { q } = await searchParams

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`,
	)
	if (!res.ok) return <div>오류 발생</div>
	const books = await res.json()
	if (books.length === 0) return <div>검색 결과가 없습니다.</div>

	return (
		<Suspense fallback={<div>loading중입니다~~~</div>}>
			{books.map((book: BookData) => (
				<BookItem key={book.id} {...book} />
			))}
		</Suspense>
	)
}
