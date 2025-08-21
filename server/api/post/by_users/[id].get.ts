import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
    const queryParams = getQuery(event)
    let i = 0 
    if (queryParams.i) {
        i = +queryParams.i
    }
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
                    approved: true,
                },
                skip:20*i,
                take:20
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