import PhotoSwipeLightbox from 'photoswipe/lightbox';
import type { PhotoSwipeOptions } from 'photoswipe';
import 'photoswipe/style.css';

export const setGallery = (
  options: PhotoSwipeOptions = {},
  config: {
    immediate?: boolean;
    beforeInit?: (lightbox: PhotoSwipeLightbox) => void;
  } = {
    immediate: false,
  },
) => {
  const lightbox = new PhotoSwipeLightbox({
    pswpModule: () => import('photoswipe'),
    ...options,
  });

  const { immediate, beforeInit } = config;

  beforeInit?.(lightbox);
  lightbox.init();

  if (immediate) {
    lightbox.loadAndOpen(
      options?.index ?? 0,
      // @ts-ignore
      options?.dataSource ?? { gallery: options.gallery,},
    );
  }
  return lightbox;
};