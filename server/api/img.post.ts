export default defineEventHandler(async (event) => {
  // console.log('on return', event.context.fields)
  // return { url: `/img/${event.context.files[0].newFileName}?w=${event.context.fields.width}&h=${event.context.fields.height}` }
  return { url: `/img/${event.context.files[0].newFileName}` }
})