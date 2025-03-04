import prisma from "~/lib/prisma"
import sharp from 'sharp'
import path from 'path'

export default defineEventHandler(async (event) => {
    const data = await readBody(event)

    if (!data.img) {
        const width = 601
        const height = 451
        const label = data.title

        const svg = `
        <svg width="${width}" height="${height}" viewBox="0 0 ${height} ${height + 2}">
        <!--this rect should have rounded corners-->
        <text x="10%" y="50%" text-anchor="left" dy="0.25em" font-size="4em" fill="#000">${label}</text>
        </svg>
        `

        const newFileName = Date.now() + '_no_image.webp'
        const saveTo = path.join(process.cwd(), '/public/img', `${newFileName}`)
        const svg_buffer = Buffer.from(svg)
        await sharp({
            create: {
                width: width,
                height: height,
                channels: 4,
                background: { r: 255, g: 255, b: 255, alpha: 1 },
            }
        })
        .composite([{
            input: svg_buffer,
            top: 0,
            left: 0,
        }])
        .composite([{ input: path.join(process.cwd(), '/public/img', `bg.jpg`), gravity: 'centre' }])
        .webp()
        .toFile(saveTo)
        // await sharp({
        //     text: {
        //       text: label,
        //       width,
        //       height,
        //     }
        // })
        // .composite([
        // { input: path.join(process.cwd(), '/public/img', `bg.jpg`), gravity: 'centre' },
        // ])
        // .webp()
        // .toFile(saveTo)
        data.img = '/img/'+newFileName
    }

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