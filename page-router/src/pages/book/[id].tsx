import style from './[id].module.css'
import { useRouter } from 'next/router'
import fetchBook from '@/lib/fetch/fetch-book'
import { GetServerSidePropsContext, InferGetStaticPropsType } from 'next'

//동적 (SSG)
export const getStaticPaths = () => {
	return {
		paths: [
			{ params: { id: '1' } },
			{ params: { id: '2' } },
			{ params: { id: '3' } },
		],
		//대비책
		//false => 위에 params에 없는거면 not found 반환

		fallback: false,
	}
}

//정적 (SSG)
export const getStaticProps = async (context: GetServerSidePropsContext) => {
	const q = context.query.q
	const books = await fetchBook(q as string)

	return {
		props: { books },
	}
}

export default function Page({
	books,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const router = useRouter().query

	const { id, title, subTitle, description, author, publisher, coverImgUrl } =
		books[Number(router.id) - 1]

	return (
		<div className={style.container}>
			<div
				className={style.cover_img_container}
				style={{ backgroundImage: `url('${coverImgUrl}')` }}
			>
				<img src={coverImgUrl} />
			</div>
			<div className={style.title}>{title}</div>
			<div className={style.subTitle}>{subTitle}</div>
			<div className={style.author}>
				{author} | {publisher}
			</div>
			<div className={style.description}>{description}</div>
		</div>
	)
}
