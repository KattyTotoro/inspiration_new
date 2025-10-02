import prisma from "~/lib/prisma"
import { v4 as uuidv4 } from 'uuid'
import { resetPass } from "~/lib/nodemailer"

export default defineEventHandler(async (event) => {
  const data = await readBody(event)
  if (data.email) {
    const uuid = uuidv4() 
    const user = await prisma.user.update({
      // @ts-ignore
      data: { recovery: uuid},
      where: {
        email: data.email,
      }
    })
    if (user) {
      resetPass(data.email, uuid)
      return { ok: true }
    }
    return { ok: false }
  } else {
    return { ok: false }
  }

})