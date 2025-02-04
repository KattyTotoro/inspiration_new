import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  const postArr = [
    {
      rubric_id: 1, 
      title: 'Третья стратья', 
      title_en:'', 
      text: 'Text 1 ВДОХНОВЕНИЕ - это Видеть, слышать, чувствовать…. Восхвалять творение, быть его частью ежесекундно! Приглашаем вместе учиться ведать Божественные энергии, делиться Радостью и Знаниями.', preview: 'third Peview ВДОХНОВЕНИЕ - это Видеть, слышать, чувствовать….', 
      img: 'inspirationLargeImage.png', 
      author_id: 1,
      smile:0,
      sad:0,
      },

    {rubric_id: 1,  title: 'Second post', title_en:'', text: 'Text 2 Second Text text text text ВДОХНОВЕНИЕ - это Видеть, слышать, чувствовать…. Восхвалять творение, быть его частью ежесекундно! Приглашаем вместе учиться ведать Божественные энергии, делиться Радостью и Знаниями.', 
      preview: 'SecondPeview...', img: 'summary_small_image.png', author_id: 1, 
      smile:0,
      sad:0,
    },

    {rubric_id: 1, title: 'First post', title_en:'', text: 'Text 3 Text text text text ВДОХНОВЕНИЕ - это Видеть, слышать, чувствовать…. Восхвалять творение, быть его частью ежесекундно! Приглашаем вместе учиться ведать Божественные энергии, делиться Радостью и Знаниями.', preview: 'Peview...', img: 'summary_large_image.png', author_id: 1,
      smile:0,
      sad:0,
      },
  ]


  function translit(word: string){
    var answer = ''
    var converter = {
      'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
      'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
      'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
      'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
      'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
      'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
      'э': 'e',    'ю': 'yu',   'я': 'ya',
   
      'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
      'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
      'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
      'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
      'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
      'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
      'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
    } as Record<string,string>
   
    for (var i = 0; i < word.length; ++i ) {
      if (converter[word[i]] == undefined){
        answer += word[i]
      } else {
        answer += converter[word[i]]
      }
    }
      answer = answer.trim().replaceAll(' ','_').toLocaleLowerCase()
    return answer
  }

  for (let el of postArr) {
    el.title_en = translit(el.title)
  }

  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Ivanov',
  //     email: 'test@test.ru'
  //   }
  // })
  
  // const rubric = await prisma.rubric.create({
  //   data: {
  //     title: 'common'
  //   }
  // })

  // const posts = await prisma.post.createMany({
  //   data: postArr
  // })

  return {}

})