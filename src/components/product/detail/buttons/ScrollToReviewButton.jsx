'use client';

export default function ScrollToReviewButton({
    avgRate,
    total
}) {
    const HEADER_HEIGHT = 120;

    const goToReview = () => {
        const el = document.querySelector('.pd-comment-container');
        if (!el) return;

        const top =
            el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;

        window.scrollTo({ top, behavior: 'smooth' });
    };

    return (
        <button type="button" className="m-0 flex items-center gap-1"
            onClick={goToReview}
        >
            <i className={`star star-${avgRate}`} />
            <span className="font-500"> ({total}) </span>
        </button>
    )
}