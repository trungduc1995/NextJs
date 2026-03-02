export default function StarPercent({ item }: any) {

    const listRate = item?.list_rate || [];
    const { count, percent } = getStarPercent(listRate);

    return (
        <>
            {[5, 4, 3, 2, 1].map((star) => {
                const starRating = star as StarRating;
                return (
                <div key={star} 
                    className="flex items-center justify-between gap-2 flex-wrap">
                    <p className="m-0 flex gap-[3px] w-[30px]">

                        <span>{star}</span>
                        <i className="bx bxs-star text-[#FBBF24] text-16" />
                    </p>
                    <div className="relative bg-[#E8ECF6] overflow-hidden rounded-[30px] h-3 w-[calc(100%_-_71px)]">
                        <i
                            className="max-w-[100%] bg-[#0678DB] absolute inset-0"
                            style={{ width: `${percent[starRating]}%` }}
                        />
                    </div>
                    <p className="m-0 text-[#6B7280] w-[25px] text-right"> {count[starRating]} </p>
                </div>
            );
            })}
        </>
    )
}

type StarRating = 1 | 2 | 3 | 4 | 5;

function getStarPercent(list_rate: any[] = []) {
    const result: Record<StarRating, number> = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
    };

    let totalCount = 0;

    list_rate.forEach(item => {
        totalCount += item.total;
        result[item.rate as StarRating] = item.total;
    });

    const percent: Record<StarRating, number> = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
    };

    if (totalCount > 0) {
        Object.keys(result).forEach(key => {
            percent[key as unknown as StarRating] = Math.round(
                (result[key as unknown as StarRating] / totalCount) * 100
            );
        });
    }

    return {
        count: result,
        percent,
        totalCount
    };
}
