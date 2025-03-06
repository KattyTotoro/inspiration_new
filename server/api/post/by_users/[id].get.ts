import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
    const id = event.context.params?.id
    if (id) {
        try {
            const posts = await prisma.post.findMany({
                include: {
                    author: true,
                    rubric: true,
                },
                where: {
                    author_id: +id
                }
            })
            return {posts, ok: true}
        } catch(e) {
            console.log(e)
            return {posts:[], ok: false, e}
        }
    } else {
        return {posts:null, ok: false}
    }
})