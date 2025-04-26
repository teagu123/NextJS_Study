'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'
import style from './modal.module.css'
import { createPortal } from 'react-dom'

export default function Modal({ children }: { children: ReactNode }) {
	const dialogRef = useRef<HTMLDialogElement>(null)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
		if (dialogRef.current?.open) {
			dialogRef.current?.showModal()
			dialogRef.current?.scrollTo({ top: 0 })
		}
	}, [])

	if (!mounted) return null

	const modalRoot = document.getElementById('modal-root')
	if (!modalRoot) return null

	return createPortal(<dialog ref={dialogRef}>{children}</dialog>, modalRoot)
}
