import Modal from '@/components/modal'
import BookPage from '../../book/[id]/page'

export default async function Page(props: any) {
	return (
		<div>
			<Modal>
				가로채기
				<BookPage {...props} />
			</Modal>
		</div>
	)
}
