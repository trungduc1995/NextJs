'use client';
import Link from "next/link";
import { CustomerInfo } from "@/data/customers"
import { useSearchParams } from 'next/navigation';
import ChangeInfo from "./ChangeInfo";
import Order from "./Order";
import ChangePass from "./ChangePassword";
import Review from "./Review";
import Comment from "./Comment";


export default function AccountPage() {
    const searchParams = useSearchParams();
    const view = searchParams.get('view');
    const customer = CustomerInfo[0];

    const viewComponent: any = {
        "change-info": ChangeInfo,
        "order": Order,
        "product-review": Review,
        "product-comment": Comment,
        "change-pass": ChangePass,
    };
    const ActiveComponent = viewComponent[view || "change-info"];

    console.log(customer)

    return (
        <div className="account-page">
            <div className="container">
                <div className="account-col-left">
                    <div className="box-info">
                        <p>
                            Tài khoản của,
                            <b> {customer.name} </b>
                        </p>
                    </div>

                    <div className="box-direction font-500 text-16">
                        <Link href="/taikhoan?view=change-info"
                            className={view === 'change-info' ? 'current' : ''}
                        >
                            <i className="bx bx-user text-20" />
                            <span>Thông tin tài khoản</span>
                        </Link>

                        <Link href="/taikhoan?view=order"
                            className={view === 'order' ? 'current' : ''}
                        >
                            <i className="bx bx-list-ul-square text-20" />
                            <span>Danh sách đơn hàng</span>
                        </Link>

                        <Link href="/taikhoan?view=product-review"
                            className={view === 'product-review' ? 'current' : ''}
                        >
                            <i className="bxr bx-star text-20" />
                            <span>Đánh giá của tôi</span>
                        </Link>

                        <Link href="/taikhoan?view=product-comment"
                            className={view === 'product-comment' ? 'current' : ''}
                        >
                            <i className="bxr bx-message-dots text-20" />
                            <span>Bình luận của tôi</span>
                        </Link>

                        <Link href="/taikhoan?view=change-pass"
                            className={view === 'change-pass' ? 'current' : ''}
                        >
                            <i className="bx bx-lock text-20" />
                            <span>Thay đổi mật khẩu</span>
                        </Link>

                        <Link href="/san-pham-da-xem">
                            <i className="bx bx-eye text-20" />
                            <span>Sản phẩm đã xem</span>
                        </Link>

                        <Link href="/logout.php">
                            <i className="bx bx-arrow-out-right-square-half text-20" />
                            <span>Đăng xuất</span>
                        </Link>
                    </div>
                </div>

                <div className="account-col-right">
                    {ActiveComponent && 
                        <ActiveComponent customer={customer} 
                    />}
                </div>
            </div>
        </div>

    )
}