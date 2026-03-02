'use client';

import { useEffect } from 'react';

export function useTooltip() {
    useEffect(() => {
        const tooltip = document.getElementById('js-tooltip') as HTMLDivElement | null;
        if (!tooltip) return;
        const tooltipElement = tooltip!;

        const pad = 10;

        function onMouseMove(e: MouseEvent) {
            const target = e.target as HTMLElement;
            const product = target.closest('.js-p-item');
            if (!product) {
                tooltipElement.style.display = 'none';
                return;
            }

            const content = product.querySelector<HTMLElement>('.p-tooltip');
            if (!content) return;

            tooltipElement.innerHTML = content.innerHTML;
            tooltipElement.style.display = 'block';

            const w = tooltipElement.offsetWidth;
            const h = tooltipElement.offsetHeight;

            const left = e.pageX + w > window.innerWidth
                ? e.pageX - w - pad
                : e.pageX + pad;

            const top = e.pageY - h < window.scrollY
                ? window.scrollY
                : e.pageY - h - pad;

            tooltipElement.style.left = `${left}px`;
            tooltipElement.style.top = `${top}px`;
        }

        function onMouseOut(e: MouseEvent) {
            const target = e.target as HTMLElement;
            if (!target.closest('.js-p-item')) {
                tooltipElement.style.display = 'none';
            }
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseout', onMouseOut);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseout', onMouseOut);
        };
    }, []);

}
