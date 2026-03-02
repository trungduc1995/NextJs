export default function Filter({
    attributeFilter,
    brandFilter,
    priceFilter
}: any) {

    return (
        <div className="popup-filter-holder">

            { brandFilter && brandFilter.length > 0 &&
                <div className="filter-item brand-filter">
                    <p className="filter-name capitalize"> Hãng sản xuất </p>

                    <div className="filter-list-holder">
                        {
                            brandFilter.map((item: any) => (
                                <label key={item.id}>
                                    <input type="checkbox" 
                                        defaultChecked={item.is_selected === 1}
                                    />
                                    <span className="value-filter">{item.name} ({item.count})</span>
                                </label>
                            ))
                        }
                    </div>
                </div>
            }

            { priceFilter && priceFilter.length > 0 &&
                <div className="filter-item">
                    <p className="filter-name capitalize"> Khoảng giá </p>

                    <div className="filter-list-holder">
                        {
                            priceFilter.map((item: any, index: number) => (
                                <label key={`price-${index}`}>
                                    <input type="checkbox" 
                                        defaultChecked={item.is_selected === 1}
                                    />
                                    <span className="value-filter">{item.name} ({item.count})</span>
                                </label>
                            ))
                        }
                    </div>
                </div>
            }

            { attributeFilter && attributeFilter.length > 0 &&
                attributeFilter.map((item: any, index: number) => (
                    <div key={index} className="filter-item"  >
                        <p className="filter-name capitalize"> {item.name} </p>

                        <div className="filter-list-holder">
                            {
                                item.value_list.map((value: any) => (
                                    <label key={value.id}>
                                        <input type="checkbox" 
                                            defaultChecked={item.is_selected === 1}
                                        />

                                        <span className="value-filter capitalize">
                                            {value.name} ({value.count})
                                        </span>
                                    </label>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}