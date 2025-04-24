import SearchLayout from '@/components/Search-layout/search-layout'
import fetchBook from '@/lib/fetch/fetch-book'
import {
	// GetServerSideProps,
	GetServerSidePropsContext,
	InferGetServerSidePropsType,
} from 'next'
import { ReactNode } from 'react'

//SSR
// export const getServerSideProps = async (
// 	context: GetServerSidePropsContext,
// ) => {
// 	const q = context.query.q
// 	const books = await fetchBook(q as string)

// 	return {
// 		props: { books },
// 	}
// }

//SSG
export const getStaticProps = async (context: GetServerSidePropsContext) => {
	const q = context.query.q
	const books = await fetchBook(q as string)

	return {
		props: { books },
	}
}
export default function Search({
	books,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
	console.log(books)
	return <div>search</div>
}

Search.getLayout = (page: ReactNode) => {
	return <SearchLayout>{page}</SearchLayout>
}
