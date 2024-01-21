import Image from 'next/image'
import zLogo from '../../../../../public/zlogo.png'
import styles from './main.module.css'
import Link from 'next/link'

function Main() {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<Image src={zLogo} alt="logo" />
			</div>
			<div className={styles.right}>
				<h1>일상을 공유하는 즐거움</h1>
				<h2>지금 가입하세요.</h2>
				<Link href="/i/flow/signup" className={styles.signup}>
					계정 만들기
				</Link>
				<h3>이미 A.com에 가입하셨나요?</h3>
				<Link href="/login" className={styles.login}>
					로그인
				</Link>
			</div>
		</div>
	)
}
export default Main
