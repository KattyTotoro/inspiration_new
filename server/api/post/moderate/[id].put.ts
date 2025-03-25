import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
    const id = event.context.params?.id
    const dataJSON = await readBody(event)
    const data = JSON.parse(dataJSON)
    let isModerator = false
    if (data.token) {
        const user = await prisma.user.findUnique({
            select: {
                role: true,
            },
            where: {
                token: data.token,
            }
        })
        isModerator = user?.role=='moderator'
    }

    if (id && isModerator) {
        try {
            await prisma.post.update({
                data:{
                    approved: true
                }, 
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