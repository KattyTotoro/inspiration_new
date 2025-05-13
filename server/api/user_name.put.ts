import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
    const data = await readBody(event)
    const name = data.name
    const id = data.id
    try {
        const newUser = await prisma.user.update({
            data: {
                name
            },
            where: {
                id
            }
        })
        return newUser
    } catch (e) {
        console.log(e)
        return e      
    }
})
