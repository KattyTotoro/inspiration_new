import Busboy from 'busboy'
import path from 'path'
import sharp from 'sharp'

export default defineEventHandler(async (event) => {
  if (event.method === 'POST') {
    const contentType = getRequestHeader(event, "content-type")
    if (contentType?.includes('multipart/form-data;')) await useFiles(event)
  }
})

const useFiles = async (event: any) => {
  const { req } = event
  if (req.method === 'POST') {
    //console.log('busboy')
    return new Promise((resolve) => {
      const files = [] as any
      const fields = {} as any
      const busboy = Busboy({ headers: req.headers })
      busboy.on('file', (name, file, info) => {
        const { filename, encoding, mimeType } = info
        const enName = info.filename.split('.')[0].match(/[a-zA-Z0-9]/g)?.join('') || ''
        const newFileName = Date.now() + enName + '.webp'
        console.log(`File [${name}]: filename: ${filename}, encoding: ${encoding}, mimeType: ${mimeType}`)
        console.log(path.join(process.cwd(), 'public/img'))

        const saveTo = process.env.NODE_ENV !== 'production' ? path.join(process.cwd(), 'public/img', `${newFileName}`) : path.join('/root/public/img', `${newFileName}`)
        // console.log('saveTo', saveTo)
        // file.pipe(fs.createWriteStream(saveTo))
        
        const data = [] as any
        let fileAsBuffer

        file.on('data', (chunk) => {
          data.push(chunk)
        })
        .on('close', async () => {
          // merge data chunks with buffer and attach them to body
          fileAsBuffer = Buffer.concat(data)
          
          await sharp(fileAsBuffer)
          .webp({ quality: 80 })
          .toFile(saveTo)
        })
        .on('end', () => {
          files.push({
            fieldname: name,
            filename,
            newFileName,
            encoding,
            mimetype: mimeType,
          })
        })
      })
      busboy.on('field', (name, value, info) => {
        fields[name] = value
      })
      busboy.on('finish', () => {
        event.context.files = files
        event.context.fields = fields
        // resolve({ files, fields })
        resolve({})
      })
      req.pipe(busboy)
    })
  }
}