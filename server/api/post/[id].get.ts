import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
    const id = event.context.params?.id
    if (id) {
        try {
            const post = await prisma.post.findUnique({
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
                    id: +id
                }
            })
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
                    id: {
                        not: +id
                    },
                    rubric_id:1
                },
                orderBy: {
                    created_at: 'desc'
                },
                take: 3
            })
            return {post, posts, ok: true}
        } catch(e) {
            console.log(e)
            return {post:null, posts:[], ok: false, e}
        }
    } else {
        return {post:null, posts:[], ok: false}
    }
})