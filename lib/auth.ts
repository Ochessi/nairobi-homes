import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";

// In-memory user store for demo purposes
// In production, replace with a proper database
const users: { id: string; email: string; password: string; name: string }[] = [];

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
                name: { label: "Name", type: "text" },
                isSignup: { label: "Is Signup", type: "text" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email and password are required");
                }

                const isSignup = credentials.isSignup === "true";

                if (isSignup) {
                    // Check if user already exists
                    const existingUser = users.find(u => u.email === credentials.email);
                    if (existingUser) {
                        throw new Error("User already exists");
                    }

                    // Create new user
                    const hashedPassword = await bcrypt.hash(credentials.password, 10);
                    const newUser = {
                        id: crypto.randomUUID(),
                        email: credentials.email,
                        password: hashedPassword,
                        name: credentials.name || credentials.email.split("@")[0],
                    };
                    users.push(newUser);

                    return {
                        id: newUser.id,
                        email: newUser.email,
                        name: newUser.name,
                    };
                } else {
                    // Login flow
                    const user = users.find(u => u.email === credentials.email);
                    if (!user) {
                        throw new Error("No user found with this email");
                    }

                    const isValidPassword = await bcrypt.compare(credentials.password, user.password);
                    if (!isValidPassword) {
                        throw new Error("Invalid password");
                    }

                    return {
                        id: user.id,
                        email: user.email,
                        name: user.name,
                    };
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/auth",
        error: "/auth",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
            }
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};
