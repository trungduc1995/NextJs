'use client'
import Link from "next/link";

interface RecruitItemProps {
    item: any;
}

export default function RecruitItem({ item }: RecruitItemProps) {
    if (!item) return null;

    return (
        <>
            <div className="recruit-item js-recruit-item">
                <ul className="ul">
                    <li>
                        <Link href={item.url} className="item-title"> {item.title} </Link>
                    </li>

                    <li>
                        <i className="static-icons static-icon-clock" />
                        <span className="item-extent">Thời hạn:</span> {item.extend.end_date}
                        <span className="date-note js-date-note" data-date={item.extend.end_date}>{/*// time format*/}</span>
                    </li>
                    
                    {item.extend.location &&
                        <li>
                            <i className="static-icons static-icon-location" />
                            <span className="item-extent">Địa điểm:</span>
                            {item.extend.location}
                        </li>
                    }
                </ul>

                <ul className="ul item-right">
                    <li>
                        <i className="static-icons static-icon-time" />
                        <p>Toàn thời gian</p>
                        <p>8h00 - 18h00</p>
                    </li>
                    <li>
                        <i className="static-icons static-icon-dola" />
                        <p>Mức lương</p>
                        <p>
                            {item.extend.salary ? item.extend.salary : 'Thỏa thuận'}
                        </p>
                    </li>
                </ul>
            </div>

        </>
    )
}