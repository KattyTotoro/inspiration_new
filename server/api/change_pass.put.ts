import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  const data = await readBody(event)
  if (data.pass && data.id) {
    const user = await prisma.user.update({
      data: { pass: data.pass },
      where: {
        id: data.id,
      }
    })
    if (user) {
      return { ok: true }
    }
    return { ok: false }
  } else {
    return { ok: false }
  }

})