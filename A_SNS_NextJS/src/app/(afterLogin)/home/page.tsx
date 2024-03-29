import PostForm from './_component/PostForm/PostForm'
import Tab from './_component/Tab/Tab'
import TabProvider from './_component/TabProvider'
import style from './home.module.css'

export default function Home() {
	return (
		<main className={style.main}>
			<TabProvider>
				<Tab />
				<PostForm />
				{/* <Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post /> */}
			</TabProvider>
		</main>
	)
}
