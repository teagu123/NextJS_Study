import GlobalLayout from '@/components/Global-layout/global-layout'
import '@/styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactNode } from 'react'

type NextWithLayout = NextPage & {
	getLayout?: (page: ReactNode) => ReactNode
}

export default function App({
	Component /*현재 페이지*/,
	pageProps /*페이지에 보내주는 props 객체 형태*/,
}: AppProps & { Component: NextWithLayout }) {
	// root component
	// global layout 작성
	const getLayout = Component.getLayout ?? ((page: ReactNode) => page)

	return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>
}
