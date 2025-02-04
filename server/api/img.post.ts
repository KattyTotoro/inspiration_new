export default defineEventHandler(async (event) => {
  //  console.log(event.context.files)
  return { url: '/img/'+event.context.files[0].newFileName }
})