import { useSession, signIn, signOut } from 'next-auth/react'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
    const { data, status } = useSession()

    console.log({
        data, status
    })

    if (!data?.user) return null
    return (
        <div>
            <Head>
                <title>Authentication Flow</title>
                <meta name="description" content="An application showing an authentication flow." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <div>
                    <h3>Hello {data.user.email}</h3>
                    <button onClick={() => signOut()}>Sign Out</button>
                </div>
                <div>
                    <Link href="/dashboard">Dashboard Screen</Link>
                </div>
            </div>
        </div>
    )
}
