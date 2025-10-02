import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
    const data = await readBody(event)
  if (data.email && data.id && data.token) {
      const user = await prisma.user.findUnique({
        select: {
          id: true,
          email: true,
          name: true,
          token: true,
          role: true,
          // @ts-ignore
          active: true,
        },
        where: {
          email: data.email,
          id: data.id,
          token: data.token,
        }
      })
      if (user) {
        setCookie(event, 'session', user?.token, {
          httpOnly: true, // Makes the cookie inaccessible to client-side JavaScript
          secure: import.meta.dev ? false : true,   // Ensures the cookie is only sent over HTTPS
          maxAge: 60 * 60 * 24 * 7, // Sets the cookie to expire in 1 week (in seconds)
          sameSite: true
        })
        return {ok:true, user, massage:''}
      }
      return {ok:false, user:null, massage:''}
    } else {
      return {
        error: 'not found'
      }
    }
  
})