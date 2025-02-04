import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
    const id = event.context.params?.id
    const data = await readBody(event)
    delete data.id
    delete data.author
    delete data.rubric
    delete data.created_at
    delete data.updated_at
    if (id) {
        try {
            await prisma.post.update({
                data, 
                where: {
                    id: +id
                }
            })
            return {ok: true}
        } catch(e) {
            console.log(e)
            return {ok: false, e}
        }
    } else {
        return {ok: false}
    }
})