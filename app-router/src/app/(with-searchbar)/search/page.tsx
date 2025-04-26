import BookItem from '@/components/book-item'
import { BookData } from '@/types'
import Delay from '@/utils/delay'
import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
	title: 'ex 타이틀',
	description: 'ex description',
	openGraph: {
		title: 'ex title',
		description: 'ex description',
		images: ['/주소'],
	},
}

export async function generateMetadata({
	searchParams,
}: {
	searchParams: Promise<{ q?: string }>
}): Promise<Metadata> {
	//현재 페이지의 메타데이터를 동적으로 처리 가능
	const { q } = await searchParams
	return {
		title: `${q} : 검색`,
		description: `${q} 검색 결과 입니다.`,
		openGraph: {
			title: `${q} title`,
			description: 'ex description',
			images: ['/주소'],
		},
	}
}

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
