import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
    const id = event.context.params?.id

    if (event.context?.user?.role != 'moderator') {
        return { ok: false }; // Неавторизован
    }

    if (id) {
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