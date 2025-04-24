import { BookData } from '@/components/Book-box/book-box'

export default async function fetchBook(q?: string): Promise<BookData[]> {
	let url = 'http://localhost:12345/book'

	if (q) {
		url += `/saerch?q=${q}`
	}

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
