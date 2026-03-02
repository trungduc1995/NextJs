'use client';

import { useState, Fragment } from 'react';

export default function ReviewForm() {
    const [rate, setRate] = useState(5);
    const [rateTitle, setRateTitle] = useState('Quá tuyệt vời');

    return (
        <>
        <div className="flex items-center mb-4 gap-4">
            <p className="m-0"> Chọn đánh giá của bạn </p>

            <div className="rating-comment clearfix">
                <CreateStar
                    rate={rate}
                    setRate={setRate}
                    setRateTitle={setRateTitle}
                />
            </div>

            <span className="star-tip bg-[#2b8ae0] text-white rounded-[3px] px-2 leading-[26px]">
                {rateTitle}
            </span>
        </div>

        <div className="lg:grid grid-cols-2 gap-3">
            <textarea
                className="w-full block p-3 resize-none h-[100px] outline-none border border-[#DDDDDD] rounded-[12px]"
                placeholder="Nhập đánh giá của bạn"
                defaultValue={""}
            />
            <div className="grid lg:grid-cols-2 gap-2">
                <input
                    type="text"
                    className="border border-[#DDDDDD] rounded-[8px] px-3"
                    placeholder="Họ tên*"
                />
                <input
                    type="tel"
                    className="border border-[#DDDDDD] rounded-[8px] px-3"
                    inputMode="numeric"
                    pattern="[0-9]{10,11}"
                    maxLength={11}
                    placeholder="Số điện thoại*"
                />
                <input
                    type="text"
                    className="border border-[#DDDDDD] rounded-[8px] px-3"
                    placeholder="Email*"
                />
                <button
                    type="button"
                    className="bg-btn text-white rounded-[8px]"
                    aria-label="Đánh giá"
                >
                    Gửi đánh giá
                </button>
            </div>
            
            <p className="red font-600"> </p>
        </div>
        </>
    );
}

function CreateStar({ rate, setRate, setRateTitle }) {
    const stars = [
        { rate: 5, title: 'Quá tuyệt vời' },
        { rate: 4, title: 'Rất tốt' },
        { rate: 3, title: 'Bình thường' },
        { rate: 2, title: 'Tạm được' },
        { rate: 1, title: 'Không thích' },
    ];

    return (
        <>
            {stars.map(({ rate: star, title }) => (
                <Fragment key={star}>
                    <input
                        type="radio"
                        className="rating-input"
                        name="user_post[rate]"
                        id={`rating-${star}`}
                        value={star}
                        checked={rate === star}
                        onChange={() => setRate(star)}
                    />

                    <label
                        htmlFor={`rating-${star}`}
                        title={title}
                        className="rating-star js-rating-star"
                        onMouseEnter={() => setRateTitle(title)}
                        onClick={() => setRateTitle(title)}
                    />
                </Fragment>
            ))}
        </>
    );
}
