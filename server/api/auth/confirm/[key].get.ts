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
          data: {
            // @ts-ignore
            recovery: '',
            active: true,
          },
          where: {
            id:user.id
          }
        })
      }
      return { ok: !!user }
    } catch (e) {
      console.log(e)
      return { ok: false, e }
    }
  } else {
    return { ok: false }
  }
})