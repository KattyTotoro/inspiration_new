import prisma from "~/lib/prisma"
import sharp from 'sharp'
import path from 'path'

export default defineEventHandler(async (event) => {
    const id = event.context.params?.id
    const json = await readBody(event)
    const data = JSON.parse(json)
    delete data.id
    delete data.author
    delete data.rubric
    delete data.created_at
    delete data.updated_at

    if (event.context?.user?.id != data?.author_id) {
        return { ok: false }; // Неавторизован
    }

    if (!data.img) {
        const width = 600
        const height = 450
        const label = data.title
        let text = ''
        const textArr = label?.split(' ')
        let tmpText = ''
        let line = 0
        for (let word of textArr) {
            if (word.length < 20 && (tmpText.length + word.length) < 20) {
                if (tmpText) {
                    tmpText += ' ' + word
                } else {
                    tmpText += word
                }
            } else {
                text += `<text x="5%" y="${30 + line * 8}%" text-anchor="left" dy="0.25em" font-size="4em" fill="#000">${tmpText}</text>`
                line++
                tmpText = word
            }
        }
        text += `<text x="5%" y="${30 + line * 8}%" text-anchor="left" dy="0.25em" font-size="4em" fill="#000">${tmpText}</text>`

        const svg = `
        <svg width="${width}" height="${height}" viewBox="0 0 ${height} ${height + 2}">
            ${text}
        </svg>
        `
        // <!--this rect should have rounded corners-->

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
            .composite([
                { input: path.join(process.cwd(), '/public/img', `bg.jpg`), top: 0, left: 0, },
                {
                    input: svg_buffer,
                    top: 0,
                    left: 0,
                }
            ])
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
        data.img = '/img/' + newFileName
    }

    if (id) {
        try {
            await prisma.post.update({
                data: {
                    ...data,
                    approved: false,
                },
                where: {
                    id: +id
                }
            })
            return { ok: true }
        } catch (e) {
            console.log(e)
            return { ok: false, e }
        }
    } else {
        return { ok: false }
    }
})