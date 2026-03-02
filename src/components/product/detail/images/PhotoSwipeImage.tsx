'use client'

import { useEffect, useRef } from 'react'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

export default function PhotoSwipeImage({
    images,
    activeIndex
}: {
    images: string[]
    activeIndex: number
}) {
    const galleryRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!galleryRef.current) return

        const lightbox = new PhotoSwipeLightbox({
            gallery: '#pswp-gallery',
            children: 'a',
            pswpModule: () => import('photoswipe')
        })

        lightbox.init()

        return () => lightbox.destroy()
    }, [])

    return (
        <div
            id="pswp-gallery"
            ref={galleryRef}
            className="w-full"
        >
            {images.map((img, index) => (
                <a
                    key={index}
                    href={img}
                    data-pswp-width="1200"
                    data-pswp-height="1200"
                    className={index === activeIndex ? 'block' : 'hidden'}
                >
                    <img
                        src={img}
                        alt=""
                        className="w-full object-contain cursor-zoom-in"
                    />
                </a>
            ))}
        </div>
    )
}
