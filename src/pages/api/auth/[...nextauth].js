// next-auth.js
import { getAdmin } from '@/helpers/adminHelper';
import NextAuth from 'next-auth'
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
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
            return Promise.resolve(user)
          } else {
            console.log("failed");
            return Promise.resolve(null)
          }
        





      },
    }),
  ],
  session: {
    jwt: true,
  },
  
  callbacks: {
    async jwt(token, user) {
     
      if (user) {
        token.id = user._id
        token.email = user.email // Replace with your user's email
        token.name="admin"
      }
      return token
    },
    async session(session, token) {
      session.user = token
      return session
    },
    
  }
  
})
