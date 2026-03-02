export default function Sort({ item }: any) {
    return (
        <div className="sort-block">
            <span>Sắp xếp: </span>
            <select id="js-sort-holder">
                <option value="">Tùy chọn</option>
                {
                    item.map((item: any) => (
                        <option key={item.key} value={item.url} >
                            {item.name}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}