import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
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
            }
        })
        return {posts, ok: true}
    } catch(e) {
        console.log(e)
        return {posts:[], ok: false, e}
    }
})