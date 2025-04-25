'use client'

import style from './serach-box.module.css'

import { useRouter } from 'next/navigation'
import { KeyboardEvent, useState } from 'react'

export default function SearchBox() {
	const [searchVal, setSearchVal] = useState('')
	const router = useRouter()

	const onSearch = () => {
		if (searchVal === '') return router.push('/')
		router.push('/search?q=' + searchVal)
	}

	const activeEnter = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			onSearch()
		}
	}

	return (
		<div className={style.container}>
			<input
				type="text"
				placeholder="검색할 책 이름..."
				value={searchVal}
				onChange={e => setSearchVal(e.target.value)}
				onKeyDown={e => activeEnter(e)}
			/>
			<button onClick={onSearch}>검색</button>
		</div>
	)
}
