import SearchLayout from '@/components/Search-layout/search-layout'
import { ReactNode } from 'react'
import style from './index.module.css'
import books from '../mock/book.json'
import BookItem from '@/components/Book-box/book-box'
import { InferGetServerSidePropsType } from 'next'
import fetchBook from '@/lib/fetch/fetch-book'
import fetchBookRandom from '@/lib/fetch/fetch-bookRandom'
import Head from 'next/head'

//SSR방식
// export const getServerSideProps = async () => {
// 	// 오직 서버측에서만 실행한다.

// 	// const allBook = await fetchBook()
// 	// const randomBook = await fetchBookRandom()
// 	const [allBook, randomBook] = await Promise.all([
// 		fetchBook(),
// 		fetchBookRandom(),
// 	])
// 	return {
// 		props: {
// 			allBook,
// 			randomBook,
// 		},
// 	}
// }
//SSG방식
export const getStaticProps = async () => {
	// 오직 서버측에서만 실행한다.

	// const allBook = await fetchBook()
	// const randomBook = await fetchBookRandom()
	const [allBook, randomBook] = await Promise.all([
		fetchBook(),
		fetchBookRandom(),
	])
	return {
		props: {
			allBook,
			randomBook,
		},
	}
}

export default function Home({
	allBook,
	randomBook,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
	console.log(allBook, randomBook)
	return (
		<>
			{/* 메타태그 */}
			<Head>
				<title>메타태그 타이틀</title>
				<meta property="og:image" content="" />
				<meta property="og:title" content="" />
			</Head>
			<div className={style.container}>
				<section>
					<h3>지금 추천하는 도서</h3>
					{books.map(book => (
						<BookItem key={book.id} {...book} />
					))}
				</section>
				<section>
					<h3>등록된 모든 도서</h3>
					{books.map(book => (
						<BookItem key={book.id} {...book} />
					))}
				</section>
			</div>
		</>
	)
}

Home.getLayout = (page: ReactNode) => {
	return <SearchLayout>{page}</SearchLayout>
}
