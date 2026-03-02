import DealPrice from "./DealPrice";
import Price from "./Price";

export default function ProductPrice({ item }: any) {
    if (!item) return null

    const isDeal = item?.sale_rules?.type === 'deal';

    return (
        <>
            {isDeal ? (
                <DealPrice item={item} />
            ) : (
                <Price item={item} />
            )}
        </>
    )
}