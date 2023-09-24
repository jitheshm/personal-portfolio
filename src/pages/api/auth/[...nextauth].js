// next-auth.js
import { getAdmin } from '@/helpers/adminHelper';
import NextAuth from 'next-auth'
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
  theme: {
    colorScheme: "dark", // "auto" | "dark" | "light"
    brandColor: "", // Hex color code
    logo: "", // Absolute URL to image
    buttonText: "" // Hex color code
  },
  providers: [
    Credentials({
      // The name to display on the sign-in form (e.g., 'Sign in with...')
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      
      authorize: async (credentials) => {
        // Add your authentication logic here
        const user=await getAdmin(credentials)
        

          console.log(user);
          if (user) {
            console.log("success");
            return user
          } else {
            console.log("failed");
            return null
          }
        





      },
    }),
  ],
  session: {
    jwt: true,
  },
  jwt:{
    secret: process.env.NEXTAUTH_SECRET,
  },
  
  callbacks: {
    async jwt({token, user}) {
      console.log(user);
      if (user) {
        token.id = user._id
        token.email = user.email // Replace with your user's email
        token.name = "admin" // Replace with your user's name
        token.picture=null
      }
      return token
    },
    async session({session, token}) {
      session.user = token
       console.log(session);
      return session
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    }
    
  }
  
})
