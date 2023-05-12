'use client'

import { signIn } from 'next-auth/react'
export default function LoginBtn() {
	return (
		<button className="btn btn-primary" onClick={() => signIn()}>Login</button>
	)
}