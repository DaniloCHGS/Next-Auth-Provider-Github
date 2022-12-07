import Head from 'next/head'
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import { getSession, signOut, useSession } from 'next-auth/react'
import styles from '../styles/Home.module.css'

export const Home = () => {
    const { data: session } = useSession()

    return (
        <div>
            <Head>
                <title>Home - Github Provider Login</title>
            </Head>
            <main className={styles.main}>
                <img src={session.user.image} className={styles.avatar} alt="" />
                <h1>{session?.user?.name}</h1>
                <h2>{session?.user?.email}</h2>
                <button onClick={() => { signOut() }}>Sair</button>
            </main>
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