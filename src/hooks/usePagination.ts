'use client'

import { useState, useMemo, useEffect } from "react";

export function usePagination<T>(data: any, perPage: number = 30) {

    const [page, setPage] = useState(1);

    const total = data.length;
    const totalPage = Math.ceil(total / perPage);

    useEffect(() => {
        setPage(1); // reset khi data đổi
    }, [data]);

    const currentData = useMemo(() => {
        return data.slice(0, page * perPage);
        // nếu muốn paging thật thì đổi thành:
        // const start = (page - 1) * perPage;
        // return data.slice(start, start + perPage);
    }, [data, page, perPage]);

    const hasMore = page < totalPage;

    const loadMore = () => setPage(prev => prev + 1);

    return {
        currentData,
        hasMore,
        loadMore,
        page,
        total,
        totalPage
    };
}
