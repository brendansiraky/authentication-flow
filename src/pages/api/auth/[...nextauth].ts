import NextAuth from "next-auth"
import { PrismaClient } from '@prisma/client'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import EmailProvider from "next-auth/providers/email"
import GoogleProvider from "next-auth/providers/google"

const prisma = new PrismaClient()

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        EmailProvider({
            server: {
                host: 'smtp.ethereal.email',
                port: 587,
                auth: {
                    user: 'august.cremin@ethereal.email',
                    pass: '1KhV2sM82f6MxVmPV2'
                }
            },
            from: 'noreply@example.com',
        }),
        GoogleProvider({
            clientId: '540663388036-dmjmt52k7smdegdekflsdcgtem3c6ca0.apps.googleusercontent.com',
            clientSecret: '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',
        })
    ],
    secret: 'SuperSecret',
})