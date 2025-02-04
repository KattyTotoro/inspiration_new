import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
    const data = await readBody(event)
    try {
        await prisma.post.create({
            data, 
        })
        return {ok: true}
    } catch(e) {
        console.log(e)
        return {ok: false, e}
    }
})