export default defineEventHandler(async (event) => {

  deleteCookie(event, 'session', {
    httpOnly: true,
    sameSite: 'strict',
  })

})