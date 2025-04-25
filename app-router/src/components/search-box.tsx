'use client'

import style from './search-box.module.css'

import { useRouter, useSearchParams } from 'next/navigation'
import { KeyboardEvent, useEffect, useState } from 'react'

export default function SearchBox() {
	const [searchVal, setSearchVal] = useState('')
	const router = useRouter()
	const param = useSearchParams()
	const q = param.get('q')

	const onSearch = () => {
		if (searchVal === '') return router.push('/')
		router.push('/search?q=' + searchVal)
	}

	const activeEnter = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			onSearch()
		}
	}

	// useEffect(() => {
	// 	if (q) {
	// 		setSearchVal(q)
	// 	}
	// }, [])

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
