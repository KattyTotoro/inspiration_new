import {setGallery} from '~~/lib/setGalery'

export default function photoSwipe() {
  let showClose: any 

  onMounted(()=>{
    const imagesEls = document.querySelectorAll('.postPage img') as NodeListOf<HTMLImageElement>

    const images = [] as any

    let i = 0
    for (let el of imagesEls) {
      el.dataset.num=i.toString()
      images.push({
        src: el.src,
        msrc: el.src,
        alt: el.alt,
        w: el.naturalWidth,
        h: el.naturalHeight,
      },)
      i++
      el.addEventListener('click',show)
    }
    
    const lightbox = setGallery(
      {
        dataSource: images,
      },
      {
        immediate: false,
        beforeInit(lightbox) {
          // @ts-ignore
          lightbox.addFilter('thumbEl', (thumbEl, data, index) => {
            const el = document.querySelectorAll('.postPage img')[index];
            if (el) {
              return el;
            }
            return thumbEl;
          });
        },
      }
    );

    function show(e:MouseEvent) {
      const target = e.target as HTMLImageElement
      lightbox.loadAndOpen(Number(target.dataset?.num)||0)
    }
    showClose = show
 
  })

  onBeforeUnmount(()=>{
    const imagesEls = document.querySelectorAll('.postPage img') as NodeListOf<HTMLImageElement>
    for (let el of imagesEls) {
      el.removeEventListener('click',showClose)
    }
  })
}