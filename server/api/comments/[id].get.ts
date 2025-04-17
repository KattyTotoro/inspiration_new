import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  if (id) {
    try {
      const commentsAll = await prisma.comment.findMany({
        where: {
            post_id: +id
        },
        orderBy: {
            id: 'asc'
        }
      }) as any[]

      const comments = [] as any[]

      for (let el of commentsAll) {
        console.log(el.id, el.comment_id)
        if (!el.comment_id) {
            comments.push(el)
        } else {
            const comment = commentsAll.find(c=>c.id==el.comment_id)
            if (comment?.comments) {
                comment.comments.push(el)
            } else {
                if (comment) {
                    comment.comments = [] as any[]
                    comment.comments.push(el)
                }
            }
        }
      }

      return { comments, ok: true }
    } catch (e) {
      console.log(e)
      return { comments: [], ok: false, e }
    }
  } else {
    return { comments: [], ok: false }
  }
})