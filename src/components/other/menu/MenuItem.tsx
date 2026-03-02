import Link from "next/link"

export default function MenuItem({item}:any) {
    const hasChildren = item.children.length > 0

    return (
        <li className="item" data-id={item.id}>
            <Link href={item.url} 
                className={`cat-1 ${hasChildren ? 'has-children' : ''}`}
            >
                <i className="lazy cat-thumb" 
                    style={{ backgroundImage: `url(${item.thumnail})` }}
                ></i>

                <span className="cat-title"> {item.title} </span>
            </Link>

            { hasChildren &&
                <ul className="submenu">
                    { 
                        item.children.map( (item_2:any) => (
                            <li key={item_2.id}>
                                <Link href={item_2.url} className="blue">
                                    <span className="font-600"> {item_2.title} </span>
                                </Link>

                                {item_2.children.length > 0 &&
                                    item_2.children?.map( (item_3:any) => (
                                        <Link href={item_3.url} key={item_3.id}>
                                            <span> {item_3.title} </span>
                                        </Link>
                                    ))
                                }
                            </li>
                        ))
                    }
                </ul>
            }
        </li>
    )
}