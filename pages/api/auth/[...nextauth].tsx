import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        CredentialsProvider({
            name: 'NextAuthCredentials',
            credentials: {},
            async authorize(credentials) {
                console.log(credentials)

                return {
                    name: 'Admin',
                    email: 'admin@example.com',
                    image: 'https://github.com/danilochgs.png'
                }
            }
        })
    ],
    secret: process.env.SECRET
})