import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mail.ru",
  port: 465,
  secure: true,
  auth: {
    user: 'dom_mirra@mail.ru',
    pass: 'eETVesGmh1HlQHcFPagO',
  },
})

let confirm = async (mail: string, key: string) => {
  await transport.sendMail({
    from: '"no-reply inspirationworld.ru" <dom_mirra@mail.ru>',
    to: mail,
    subject: 'Подтверждение email ✔',
    html: `
    <p style="text-align:center; ">Для подтверждения email прейдите по <a style="color:#F0723B" href="${import.meta.dev?'http://localhost:3000':'https://inspirationworld.ru'}/auth/confirm/${key}">ссылке</a></p>
    `,
  })
}

let resetPass = async (mail: string, key: string) => {
  await transport.sendMail({
    from: '"no-reply inspirationworld.ru" <dom_mirra@mail.ru>',
    to: mail,
    subject: 'Восстановление доступа ✔',
    html: `
    <p style="text-align:center; ">Для восстановления доступа к учетной записи прейдите по <a style="color:#F0723B" href="${import.meta.dev?'http://localhost:3000':'https://inspirationworld.ru'}/auth/reset/${key}">ссылке</a></p>
    <p style="text-align:center; ">Ссылка доступна в течение двух часов</p>
    `,
  })
}

export { confirm, resetPass }