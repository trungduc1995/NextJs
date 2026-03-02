
'use client';
import { useEffect, useState } from 'react'
import { renderSummary } from "@/lib/utils"

export default function ProductSummary({ item }: any) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null


    return (
        <div className="mb-3 pd-summary-group">
            <p className="leading-6 mb-2 text-16 font-600"> Thông số sản phẩm </p>

            <div> {renderSummary(item)}</div>
        </div>
    )
}



