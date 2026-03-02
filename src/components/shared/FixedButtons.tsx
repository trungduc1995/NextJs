'use client';
import { useEffect, useState } from 'react'

export default function FixedButtons() {
    const [showGoTop, setShowGoTop] = useState(false);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setShowGoTop(window.scrollY > 250);
        };

        window.addEventListener('scroll', onScroll);
        
        const timer = setTimeout(() => setAnimate(true), 800);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', onScroll);
        }
    }, []);

    const goTop = () => {
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth' 
        });
    };

    return (
        <>
        <div className={`global-fixed-button-container ${animate ? 'animate__backInRight' : ''}`}>
            <a href="" target="_blank" rel="nofollow noopener noreferrer"> <i className="bx bxs-message-bubble-dots animation-beat"></i> </a>
            <a href="" target="_blank" rel="nofollow noopener noreferrer" style={{ backgroundImage: 'url(/images/icon-mess.png)' }}></a>
            <a href="" target="_blank" rel="nofollow noopener noreferrer"> <i className="bx bxs-phone animation-phone-ring"></i> </a>
        </div>
        
        {showGoTop && (
            <button type="button" className="icon-goTop bxr bx-arrow-up-stroke" aria-label="Lên đầu trang"
            onClick={goTop}></button>
        )}
        </>
    )
}