'use client';
import { useState, useMemo } from "react";

export function useShowMore<T>(data: T[], perPage = 5) {
    const [page, setPage] = useState(1);

    const displayData = useMemo(() => {
        return data.slice(0, page * perPage);
    }, [data, page, perPage]);

    const hasMore = displayData.length < data.length;

    const loadMore = () => setPage(prev => prev + 1);

    return {
        displayData,
        hasMore,
        loadMore,
        page
    };
}
