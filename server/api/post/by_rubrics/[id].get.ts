import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
    const queryParams = getQuery(event)
    let i = 0 
    if (queryParams.i) {
        i = +queryParams.i
    }
    const rubric_id = event.context.params?.id
    const where = {
        approved: true,
    } as any
    if (rubric_id) {
        where.rubric_id = +rubric_id
    }
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
            where,
            orderBy: {
                created_at: 'desc'
            },
            skip: 20*i,
            take:20
        })
        return {posts, ok: true}
    } catch(e) {
        console.log(e)
        return {posts:[], ok: false, e}
    }
})