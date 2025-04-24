import style from './[id].module.css'
import books from '../../mock/book.json'
import { useRouter } from 'next/router'

export default function Page() {
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
