import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  const json = await readBody(event)
  const data = JSON.parse(json)
  if (id) {
    try {
      const comment = await prisma.comment.create({
        data
      })
      if (data.comment_id) {
        await prisma.comment.update({
          data: {
            comments_num: {
              increment: 1
            },
          },
          where: {
            id: data.comment_id
          }
        })
      }
      return { comment, ok: true }
    } catch (e) {
      console.log(e)
      return { comment: null, ok: false, e }
    }
  } else {
    return { comment: null, ok: false }
  }
})