import { exec } from 'child_process'


export default defineEventHandler(async (event) => {
  exec('git pull && npm i && npx prisma db push && cp default node_modules/@prisma/client/default.js && cp browser node_modules/@prisma/client/index-browser.js && npm run build && pm2 restart app', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error}`)
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`)
    }
    console.log(`Stdout: ${stdout}`)
  })
  // git pull && npm run build
  return { ok: true }
})