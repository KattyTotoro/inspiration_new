import { exec } from 'child_process'


export default defineEventHandler(async (event) => {
    exec('ls', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error}`)
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`)
    }
    console.log(`Stdout: ${stdout}`)
    }) 
    // git pull && npm run build
    return {ok:true}
})