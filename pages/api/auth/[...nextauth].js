import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import MailRuProvider from "next-auth/providers/mailru";
import VkProvider from "next-auth/providers/vk";
import Auth0Provider from "next-auth/providers/auth0";


import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "./lib/mongodb"


/*
    All requests to /api/auth/*
    signIn,
    callback,
    signOut,
    will automatically be handled by NextAuth.js.
 */

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        MailRuProvider({
            clientId: process.env.MAILRU_CLIENT_ID,
            clientSecret: process.env.MAILRU_CLIENT_SECRET
        }),
        VkProvider({
            clientId: process.env.VK_CLIENT_ID,
            clientSecret: process.env.VK_CLIENT_SECRET
        }),
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            issuer: process.env.AUTH0_ISSUER
        })

    ],

    pages: {
        signIn: "/signin"
    },
    session: {
        strategy: "JWT"
    },
    secret : process.env.NEXTAUTH_SECRET,
    adapter: MongoDBAdapter(clientPromise),
}
export default NextAuth(authOptions)