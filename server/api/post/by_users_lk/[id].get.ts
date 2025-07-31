import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
    const id = event.context.params?.id
    if (id) {
        try {
            const posts = await prisma.post.findMany({
                include: {
                    author: {
                        select: {
                            name: true,
                            pseudo: true,
                            id: true
                        }
                    },
                    rubric: true,
                },
                where: {
                    author_id: +id,
                },
                orderBy: {
                created_at: 'desc'
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