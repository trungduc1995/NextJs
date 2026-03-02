export default function CategoryIcon({item}:any) {    
    return(
        <>
            {item == 1 &&
                <p className="m-0">
                    <i className="icons icon-wallet"></i>
                    <span> Trả góp 0% </span>
                </p>
            }
            

            {item == 91 || item == 27 &&
                <p className="m-0">
                    <i className="icons icon-truck"></i>
                    <span> Miễn phí giao hàng </span>
                </p>
            }

            {item == 103 &&
                <p className="m-0">
                    <i className="icons icon-world"></i>
                    <span> Giao hàng toàn quốc </span>
                </p>
            }

            {item == 92 &&
                <p className="m-0">
                    <i className="icons icon-medal"></i>
                    <span> Bảo hành tận nơi </span>
                </p>
            }
        </>
    )
}