import prisma from "~/lib/prisma"
import { confirm } from "~/lib/nodemailer"

export default defineEventHandler(async (event) => {
    const data = await readBody(event)
    if (data.email && data.pass) {
      const testUser = await prisma.user.findUnique({
        select: {
          id:true,
        },
        where: {
          email: data.email,
        }
      })
      if (testUser) {
        return {ok:false, user:null, massage:'not uniq'}
      }
      const user = await prisma.user.create({
        data, 
        select: {
          id:true,
          email:true,
          name:true,
          token:true,
          // @ts-ignore
          recovery: true
        }
      })
      // @ts-ignore
      await confirm(data.email, user.recovery)
      return {ok:true, user, massage:''}
    } else {
      return {
        error: 'not found'
      }
    }
  
})