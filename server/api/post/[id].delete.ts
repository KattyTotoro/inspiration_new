import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id; // Получаем ID поста из URL
  if (event.context?.user) {
    const post = await prisma.post.findUnique({
      where: {
        id: Number(id)     
      },
      select: {
        author_id: true
      }
    })
    if (event.context.user?.id == post?.author_id) {
      await prisma.post.delete({ where: { id: Number(id) } });
      return { success: true }; // Возвращаем успешный результат
    }
    return { success: false }; // Не автор
  }
  return { success: false }; // Неавторизован
})