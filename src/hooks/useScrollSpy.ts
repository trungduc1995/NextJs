'use client';
import { useEffect } from 'react';

export default function useScrollSpy({
    menuSelector = '.js-category-tab',
    offsetTop = 250,
    scrollOffset = 120,
} = {}) {
    useEffect(() => {
        const menuItems = document.querySelectorAll(menuSelector);
        if (!menuItems.length) return;

        const sections = Array.from(menuItems)
            .map(item => {
                const id = item.getAttribute('href');
                if (!id) return null;
                return document.querySelector(id);
            })
            .filter(Boolean);

        const onScroll = () => {
            const scrollPos = window.scrollY + offsetTop;
            let currentId = '';

            sections.forEach(section => {
                if (section.offsetTop <= scrollPos) {
                    currentId = section.id;
                }
            });

            menuItems.forEach(item => item.classList.remove('active'));

            if (currentId) {
                document
                    .querySelector(`${menuSelector}[href="#${currentId}"]`)
                    ?.classList.add('active');
            }
        };

        window.addEventListener('scroll', onScroll);

        menuItems.forEach(item => {
            item.addEventListener('click', e => {
                e.preventDefault();

                const targetId = item.getAttribute('href');
                const target = targetId && document.querySelector(targetId);
                if (!target) return;

                window.scrollTo({
                    top: target.offsetTop - scrollOffset,
                    behavior: 'smooth',
                });
            });
        });

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [menuSelector, offsetTop, scrollOffset]);
}
