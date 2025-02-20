import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
    const rubric_id = event.context.params?.id
    const where = {} as any
    if (rubric_id) {
        where.rubric_id = +rubric_id
    }
    try {
        const posts = await prisma.post.findMany({
            include: {
                author: true,
                rubric: true,
            },
            where
        })
        return {posts, ok: true}
    } catch(e) {
        console.log(e)
        return {posts:[], ok: false, e}
    }
})