import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
    try {
        const rubrics = await prisma.rubric.findMany({})
        return rubrics
    } catch(e) {
        console.log(e)
        return []
    }
})