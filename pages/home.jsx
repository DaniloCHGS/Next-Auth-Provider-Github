import { getSession, signOut, useSession } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

export const Home = () => {
    const { data: session } = useSession()

    return (
        <div>
            <Head>
                <title>Home - Github Provider Login</title>
            </Head>
            <h1>{session?.user?.name}</h1>
            <h2>{session?.user?.email}</h2>
            <button onClick={() => { signOut() }}>Sair</button>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            session
        }
    }
}

export default Home