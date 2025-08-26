import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  if ((event.path.includes('api/post') || event.path.includes('api/comments')) && 
    ['POST', 'PUT', 'DELETE'].includes(event.method)) {
    const token = getCookie(event, 'session') || null
    if (token) {
      const user = await prisma.user.findUnique({where:{token}})
      event.context.user = user
    }
  }
})