import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
    const id = event.context.params?.id; // Получаем ID поста из URL
  
    // Здесь должна быть логика удаления поста из базы данных
    // Например, используя Prisma:
    await prisma.post.delete({ where: { id: Number(id) } });
  
    return { success: true }; // Возвращаем успешный результат
  });