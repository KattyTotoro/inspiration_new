import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
    const queryParams = getQuery(event)
    let i = 0 
    if (queryParams.i) {
        i = +queryParams.i
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
            where: {
                approved:true,
            },
            orderBy: {
                created_at: 'desc'
            },
            skip: 3*i,
            take: 3
        })
        return {posts, ok: true}
    } catch(e) {
        console.log(e)
        return {posts:[], ok: false, e}
    }
})