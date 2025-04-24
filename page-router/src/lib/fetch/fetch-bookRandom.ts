import { BookData } from '@/components/Book-box/book-box'

export default async function fetchBookRandom(): Promise<BookData[]> {
	const url = 'http://localhost:12345/book/random'

	try {
		const res = await fetch(url)
		if (!res.ok) {
			throw new Error()
		}

		return await res.json()
	} catch (err) {
		console.log(err)
		return []
	}
}
