import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
    const queryParams = getQuery(event)
    let i = 0 
    if (queryParams.i) {
        i = +queryParams.i
    }
    const by_rubric = {} as any
    if (queryParams.rubric) {
        by_rubric.rubric_id = +queryParams.rubric
    }
    const text = event.context.params?.text
    try {
        if (text) {
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
                    OR:[
                        {text: {
                            contains: decodeURI(text),
                            // @ts-ignore
                            mode: 'insensitive',
                        }},
                        {title: {
                            contains: decodeURI(text),
                            // @ts-ignore
                            mode: 'insensitive',
                        }}, 
                    ],
                    ...by_rubric,
                },
                orderBy: {
                    created_at: 'desc'
                },
                skip: 20*i,
                take: 20
            })
            return {posts, ok: true}
        } else {
            return {posts:[], ok: false}
        }
    } catch(e) {
        console.log(e)
        return {posts:[], ok: false, e}
    }
})