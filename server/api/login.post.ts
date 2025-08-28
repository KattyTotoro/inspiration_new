import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
    const data = await readBody(event)
    if (data.email && data.pass) {
      const user = await prisma.user.findUnique({
        select: {
          id:true,
          email: true,
          name: true,
          token: true,
          role: true,
        },
        where: {
          email: data.email,
          pass: data.pass
        }
      })
      if (user && user.token) {
        setCookie(event, 'session', user?.token, {
          httpOnly: true, // Makes the cookie inaccessible to client-side JavaScript
          secure: import.meta.dev ? false : true,   // Ensures the cookie is only sent over HTTPS
          maxAge: 60 * 60 * 24 * 7, // Sets the cookie to expire in 1 week (in seconds)
          sameSite: true
        })
        return user
      }
      return null
    } else {
      return {
        error: 'not found'
      }
    }
  
})