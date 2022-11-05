import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider, useSession } from "next-auth/react"
import { useRouter } from 'next/router'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <SessionProvider session={session}>
            <WithSession>
                <Component {...pageProps} />
            </WithSession>
        </SessionProvider>
    )
}

function WithSession({ children }: { children: JSX.Element }) {
    const { status } = useSession()
    const router = useRouter()

    console.log('render')

    if (status === 'unauthenticated') {
        typeof window !== 'undefined' && router.push('/api/auth/signin')
    }

    return children
}
