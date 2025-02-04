import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
    try {
        const posts = await prisma.post.findMany({
            include: {
                author: true,
                rubric: true,
            },
            where: {
                rubric_id: 1
            }
        })
        return {posts, ok: true}
    } catch(e) {
        console.log(e)
        return {posts:[], ok: false, e}
    }
})