import Link from "next/link"

export default function FilterItem( {item} ) {
    return (
        <Link href={item.url} 
            className={`${item.is_selected || item.is_selected == 1 ? 'current' : ''}`}
        >
            <span> {item.name} </span>
            <span> ({item.count}) </span>
        </Link>
    )
}