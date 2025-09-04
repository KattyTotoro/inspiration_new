function lazyLoader(path:string) {
  let i = 1
  let isDone = false
  let isInit = true
  let timer:NodeJS.Timeout|null = null
  return async function() {
    // console.log(i, isDone, isInit)
    if (!isDone && !isInit) {
      // if (timer) return []

      // timer = setTimeout(() => {
      //   timer = null
      // }, 150)
      const data = await $fetch<{posts:any[]}>(`/api/post${path}?i=${i}`)
      
      if (data.posts?.length) {
        i++
        return [...data?.posts]
      } else {
        isDone = true      
        return []
      }
    }
    isInit = false
  }
}

export default lazyLoader