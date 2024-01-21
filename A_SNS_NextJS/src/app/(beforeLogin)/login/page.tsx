'use client'
import { useRouter } from 'next/navigation'

function Login() {
	const router = useRouter()
	router.replace('/i/flow/login')
	return null
}
export default Login

// router.push
// localhost:3001 -> lovcalhost:3001/login -> localhost:3001/i/flow/login
// router.push는 뒤로가기하면 login으로 간다

//router.replace
// localhost:3001 -> lovcalhost:3001/login -> localhost:3001/i/flow/login
// router.replace는 뒤로가기 하면 login이 아니라 3001로 간다

// 그래서 우리 로직에는 replace가 맞다
