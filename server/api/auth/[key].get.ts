import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  const key = event.context.params?.key
  if (key) {
    try {
      const user = await prisma.user.findFirst({
        where: {
          // @ts-ignore
          recovery: key
        }
      })
      if (user) {
        await prisma.user.update({
          select: {
            id: true
          },
          data: {
            // @ts-ignore
            recovery: ''  
          },
          where: {
            id: user.id
          }
        })
      }
      return { ok: !!user, user }
    } catch (e) {
      console.log(e)
      return { ok: false, user:null, e }
    }
  } else {
    return { ok: false, user:null }
  }
})