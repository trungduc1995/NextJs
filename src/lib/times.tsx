'use client';
import { useEffect, useState, useMemo } from "react";

export function DealCountdown({ endTime }: { endTime: any }) {
    
    const formatTime = useMemo(() => {
        if (!endTime) return 0;

        if (typeof endTime === "string") {
            const parsed = new Date(endTime).getTime();
            return isNaN(parsed) ? 0 : Math.floor(parsed / 1000);
        }

        // Nếu là milliseconds (13 số)
        if (endTime > 9999999999) {
            return Math.floor(endTime / 1000);
        }

        return endTime;
    }, [endTime]);

    const [mounted, setMounted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(getTimeLeft(formatTime));

    useEffect(() => {
        setMounted(true);

        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft(formatTime));
        }, 1000);

        return () => clearInterval(timer);
    }, [formatTime]);

    if (!mounted) return null;

    if (timeLeft.total <= 0) {
        return <span className="text-red-500">Deal đã kết thúc</span>;
    }

    return (
        <>
            <p>{timeLeft.days}</p>
            <p>{timeLeft.hours}</p>
            <p>{timeLeft.minutes}</p>
            <p>{timeLeft.seconds}</p>
        </>
    );
}

export function getTimeLeft(endTime: number) {
    const now = Math.floor(Date.now() / 1000);
    const distance = endTime - now;

    if (distance <= 0) {
        return {
            total: 0,
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00'
        };
    }

    return {
        total: distance,
        days: String(Math.floor(distance / 86400)).padStart(2, '0'),
        hours: String(Math.floor((distance % 86400) / 3600)).padStart(2, '0'),
        minutes: String(Math.floor((distance % 3600) / 60)).padStart(2, '0'),
        seconds: String(distance % 60).padStart(2, '0'),
    };
}

// Đếm ngược theo thời gian hiện tại
export function getRemainingDays(dateStr: string): number {
    const [day, month, year] = dateStr.split("-").map(Number);

    // Hết hạn lúc 23:59:59 cho đúng logic tuyển dụng
    const endDate = new Date(year, month - 1, day, 23, 59, 59);
    const now = new Date();

    const diffTime = endDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays > 0 ? diffDays : 0;
}
