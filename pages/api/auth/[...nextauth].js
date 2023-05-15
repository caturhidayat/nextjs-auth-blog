import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";
import { NextAuthOptions } from "next-auth";

const prisma = new PrismaClient();

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD,
                },
            },
            from: process.env.EMAIL_FROM,
            maxAge: 10 * 60, // Magic Link are valid for 10 Min only
            normalizeIdentifier(identifier) {
                let [local, domain] = identifier
                    .toLowerCase()
                    .trim()
                    .split("@");
                domain = domain.split(",")[0];
                return `${local}@${domain}`;
            },
        }),
    ],
    // callbacks: {
    //     async session({ session, token, user }) {
    //         session.accessToken = token.accessToken;
    //         session.user.id = token.id;

    //         return session;
    //     },
    // },
});

// export default NextAuth()
