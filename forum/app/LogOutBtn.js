'use client'

import { signOut } from 'next-auth/react'
export default function LogOutBtn() {
	return (
		<button className="btn btn-primary" onClick={() => signOut()}>Logout</button>
	)
}